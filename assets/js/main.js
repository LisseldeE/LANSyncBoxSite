// ============================================================
//  LANSyncBox 官网 · 首页交互
//  平滑分段跳转 / 顶栏及站内锚点 / 右侧分段指示器 / 语言切换
// ============================================================

(function () {
    'use strict';

    var root = document.documentElement;

    // 下载链接渲染函数（由 initDownload 注入；语言切换后需重算，因为标准版中文走 Gitee）
    var dlRender = null;

    // 平滑滑过去：滚动期间临时关闭 scroll-snap，
    // 否则吸附动画会把程序化滚动抢走，表现成「只换 hash 不动画面」
    var snapTimer = null;
    function goTo(el) {
        if (!el) return;
        var prev = root.style.scrollSnapType || '';
        root.style.scrollSnapType = 'none';
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.clearTimeout(snapTimer);
        snapTimer = window.setTimeout(function () {
            root.style.scrollSnapType = prev;
        }, 780);
    }

    // 某个片段自身发生变化（如切换下载版本）时短暂关闭吸附，
    // 否则浏览器会在布局变化后重新吸附，表现为界面被强行居中/跳动
    function suppressSnap(ms) {
        root.style.scrollSnapType = 'none';
        window.clearTimeout(snapTimer);
        snapTimer = window.setTimeout(function () {
            root.style.scrollSnapType = '';
        }, ms || 400);
    }

    function init() {
        // 先套用当前语言的文案
        window.applyI18n();

        // ---- 站内锚点：平滑滑过去（目标不存在则不做任何接管） ----
        Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function (a) {
            a.addEventListener('click', function (e) {
                var id = a.getAttribute('href');
                if (!id || id.charAt(0) !== '#' || id.length < 2) return;
                var target = document.querySelector(id);
                if (!target) return;   // 帮助 / 反馈 尚未落地，暂不接管
                e.preventDefault();
                goTo(target);
                history.replaceState(null, '', id);
            });
        });

        initDots();
        initScrollHint();
        initLangSwitcher();
        initVersionSwitcher();
        initDownload();
    }

    // ---- 右侧分段指示器：每屏一个圆点，并同步顶栏焦点 ----
    function initDots() {
        var screens = Array.prototype.slice.call(document.querySelectorAll('.screen'));
        var dots = document.getElementById('dots');
        if (!screens.length || !dots) return;

        var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab[data-nav]'));

        screens.forEach(function (s) {
            var b = document.createElement('button');
            b.type = 'button';
            var label = window.t('dots.aria');
            if (label) b.setAttribute('aria-label', label);
            b.addEventListener('click', function () { goTo(s); });
            dots.appendChild(b);
        });

        var btns = Array.prototype.slice.call(dots.children);

        // 顶栏焦点：首屏 = 首页，第 2 屏 = 下载，其余 = 详情
        function syncTabs(i) {
            var key = i === 0 ? 'home' : (i === 1 ? 'download' : 'details');
            tabs.forEach(function (t) {
                t.classList.toggle('active', t.getAttribute('data-nav') === key);
            });
        }

        function activate(i) {
            btns.forEach(function (b, j) { b.classList.toggle('active', j === i); });
            syncTabs(i);
        }

        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (e) {
                    if (e.isIntersecting) activate(screens.indexOf(e.target));
                });
            }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
            screens.forEach(function (s) { io.observe(s); });
        } else {
            activate(0);
        }
    }

    // ---- 首屏滚动提示：离开顶部淡出，回到顶部淡入（滚动回调按帧节流） ----
    function initScrollHint() {
        var hint = document.querySelector('.scroll-hint');
        if (!hint) return;
        var ticking = false;
        function update() {
            ticking = false;
            hint.classList.toggle('is-hidden', window.scrollY > 10);
        }
        function onScroll() {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(update);
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        update();   // 首次进入时按当前滚动位置定状态（如带 #锚点 直达）
    }

    // ---- 语言切换：紧凑 中 / EN，沿用 i18n.js 的 switchLang ----
    function initLangSwitcher() {
        Array.prototype.forEach.call(document.querySelectorAll('.lang-option'), function (btn) {
            btn.addEventListener('click', function () {
                var lang = btn.getAttribute('data-lang');
                if (!lang || lang === window.getCurrentLang()) return;
                window.switchLang(lang);
                // 圆点的无障碍文案随语言刷新（switchLang 已同步 localStorage 与地址栏）
                var label = window.t('dots.aria');
                if (label) {
                    Array.prototype.forEach.call(document.querySelectorAll('#dots button'), function (b) {
                        b.setAttribute('aria-label', label);
                    });
                }
                // 标准版中文走 Gitee、英文走 GitHub，下载地址必须随语言重算
                if (dlRender) dlRender();
            });
        });
    }

    // ---- 下载页：标准版 / Pro 版切换，状态挂在 .dl-right 上，样式与面板由它驱动 ----
    function initVersionSwitcher() {
        var box = document.querySelector('.dl-right');
        if (!box) return;
        var opts = Array.prototype.slice.call(box.querySelectorAll('.ver-option'));

        function activate(v) {
            box.setAttribute('data-version', v);
            opts.forEach(function (b) {
                b.setAttribute('aria-pressed', b.getAttribute('data-version') === v ? 'true' : 'false');
            });
        }
        activate(box.getAttribute('data-version') === 'pro' ? 'pro' : 'std');

        opts.forEach(function (b) {
            b.addEventListener('click', function () {
                var v = b.getAttribute('data-version');
                if (!v || v === box.getAttribute('data-version')) return;
                // 切换只改本屏内部内容，视口不应有任何位移。
                // 记录当前位置 → 切换（内容高度可能变化）→ 立即原样复位；
                // 复位后视口仍停在同一屏的起点，浏览器再吸附也只是原地不动。
                var y = window.scrollY;
                var sb = root.style.scrollBehavior;
                root.style.scrollBehavior = 'auto';   // 复位必须瞬时，不能走平滑动画
                suppressSnap(500);
                activate(v);
                window.scrollTo(0, y);
                root.style.scrollBehavior = sb;
            });
        });
    }

    // ---- 下载页：从作者 GitHub Pages 取最新版本号，据此生成各平台下载链接 ----
    //      规则：标准版 —— 中文走 Gitee、英文走 GitHub；Pro 版恒走 GitHub
    //      点击下载 → 带上下载地址跳到感谢页，由感谢页即时触发下载
    function initDownload() {
        var box = document.querySelector('.dl-right');
        if (!box) return;

        var S = window.SITE || {};
        var versions = {
            std: (S.versionFallback || {}).std || '',
            pro: (S.versionFallback || {}).pro || ''
        };
        var each = Array.prototype.forEach;

        // 组装真实下载地址：{发布站}{tag}/{文件名}
        function buildUrl(edition, os) {
            var assets = (S.dlAssets || {})[edition];
            var repo = S.dlRepo || {};
            var ver = versions[edition];
            if (!ver || !assets || !assets[os]) return '';
            var base = (edition === 'std' && window.getCurrentLang() === 'zh-cn') ? repo.gitee : repo.github;
            return (base || '') + assets.tagPrefix + ver + '/' + assets[os];
        }

        function render() {
            each.call(box.querySelectorAll('[data-ver-num]'), function (el) {
                var v = versions[el.getAttribute('data-ver-num')];
                if (v) el.textContent = v;
            });
            each.call(box.querySelectorAll('.dl-btn'), function (a) {
                var url = buildUrl(a.getAttribute('data-edition'), a.getAttribute('data-os'));
                if (!url) return;
                a.setAttribute('href', 'thanks.html?dl=' + encodeURIComponent(url) +
                    '&v=' + encodeURIComponent(a.getAttribute('data-edition')) +
                    '&p=' + encodeURIComponent(a.getAttribute('data-os')));
            });
            each.call(box.querySelectorAll('.dl-store'), function (a) {
                var url = (S.dlStore || {})[a.getAttribute('data-edition')];
                if (url) a.setAttribute('href', url);
            });
        }

        dlRender = render;
        render();

        // 并行拉取两个版本号，成功后重绘；取不到则沿用兜底值
        if (!window.fetch) return;
        each.call(Object.keys(S.versionUrls || {}), function (edition) {
            window.fetch(S.versionUrls[edition], { cache: 'no-store' })
                .then(function (res) { if (!res.ok) throw new Error(res.status); return res.text(); })
                .then(function (txt) {
                    var v = (txt || '').trim().split(/\s+/)[0];
                    if (!v) return;
                    versions[edition] = v;
                    render();
                })
                .catch(function () { /* 版本号取不到，保留兜底值 */ });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
