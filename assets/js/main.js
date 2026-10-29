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
        initPolicyVersion();
        initDownload();
        initFaq();
        initBackLink();
        initDemoShimmer();
    }

    // ---- 返回按钮（隐私政策页 / 感谢页）：由本站首页点进来的，改走浏览器历史返回 ----
    //      这样首页由 bfcache 原样恢复（滚动位置与已渲染状态都还在），不重新加载、不闪加载动画；
    //      其余情况（直接打开、外链进入、无历史可退）一律不接管，浏览器照 href 正常跳转
    function initBackLink() {
        var links = document.querySelectorAll('.policy-back, .thanks-back');
        if (!links.length) return;

        var ref = document.referrer || '';
        var fromHome = ref.indexOf(window.location.origin + '/') === 0 &&
            !/\/(privacy|terms|thanks)\.html/i.test(ref) &&
            window.history.length > 1;
        if (!fromHome) return;

        Array.prototype.forEach.call(links, function (a) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                window.history.back();
            });
        });
    }

    // ---- 底部动图演示：图到位后停掉占位扫光 ----
    //      未出图时 .demo img 靠 16:9 占位并跑一道扫光；出图（或失败）后挂 .is-loaded
    //      把扫光和底图撤掉 —— 否则 object-fit: contain 的上下留白区会一直扫个不停
    function initDemoShimmer() {
        Array.prototype.forEach.call(document.querySelectorAll('.demo img'), function (img) {
            if (img.complete && img.naturalWidth) { img.classList.add('is-loaded'); return; }
            var done = function () { img.classList.add('is-loaded'); };
            img.addEventListener('load', done, { once: true });
            img.addEventListener('error', done, { once: true });
        });
    }

    // ---- 右侧分段指示器：每屏一个圆点，并同步顶栏焦点 ----
    function initDots() {
        var screens = Array.prototype.slice.call(document.querySelectorAll('.screen'));
        var dots = document.getElementById('dots');
        if (!screens.length || !dots) return;

        var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab[data-nav]'));
        var tabsEl = document.querySelector('.tabs');
        var underline = document.querySelector('.tab-underline');

        // 顶栏短线指示条：宽度取当前标签的「文字实际范围」（不含标签左右内边距），
        // 位置换算成 .tabs 的内容坐标（窄屏下列表可横向滑动，故补上 scrollLeft）
        function placeUnderline(tab) {
            if (!underline || !tabsEl || !tab) return;
            var range = document.createRange();
            range.selectNodeContents(tab);
            var box = range.getBoundingClientRect();
            if (!box.width) return;
            underline.style.width = box.width + 'px';
            underline.style.transform = 'translateX(' +
                (box.left - tabsEl.getBoundingClientRect().left + tabsEl.scrollLeft) + 'px)';
        }

        var activeTab = null;
        // 语言换字、窗口跨断点（标签字号与内边距会变）之后文字宽度都会变，重新贴合一次
        window.addEventListener('resize', function () { placeUnderline(activeTab); });
        window.addEventListener('i18n-applied', function () { placeUnderline(activeTab); });

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
                var on = t.getAttribute('data-nav') === key;
                t.classList.toggle('active', on);
                if (on) activeTab = t;      // 先定下选中标签（字体加粗会改文字宽），再测指示条
            });
            placeUnderline(activeTab);
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

        // 信任行的平台数量随版本走：标准版 2 个平台（Windows · Linux），Pro 版 3 个
        var platTitle = document.querySelector('[data-i18n^="trust.p1.title."]');
        var platDesc = document.querySelector('[data-i18n^="trust.p1.desc."]');
        function syncTrustPlatform(v) {
            var sfx = v === 'pro' ? 'pro' : 'std';
            [[platTitle, 'trust.p1.title.'], [platDesc, 'trust.p1.desc.']].forEach(function (pair) {
                if (!pair[0]) return;
                var key = pair[1] + sfx;
                pair[0].setAttribute('data-i18n', key);
                var val = window.t(key);
                if (val !== null) pair[0].textContent = val;   // 与 applyI18n 同一条守卫：取不到就保留原文案
            });
        }

        // 条款提示里的两个链接跟随当前版本：Pro 版带上 ?ver=pro，点开协议页即为对应正文
        var consentLinks = Array.prototype.slice.call(document.querySelectorAll('.dl-consent a'));
        function syncConsentLinks(v) {
            consentLinks.forEach(function (a) {
                var base = a.getAttribute('href').split('?')[0];
                a.setAttribute('href', v === 'pro' ? base + '?ver=pro' : base);
            });
        }

        // 地址栏里的目标版本：与协议页一致，Pro 版用 ?ver=pro，标准版保持裸地址
        function urlVersion() {
            var m = (window.location.search || '').match(/[?&]ver=(std|pro)(?:&|$)/i);
            return m ? m[1].toLowerCase() : '';
        }

        // 同步地址栏：保留 lang 等其余参数与锚点，只改 ver（不新增历史记录）
        function syncUrl(v) {
            try {
                var params = new URLSearchParams(window.location.search || '');
                params.delete('ver');
                if (v === 'pro') params.set('ver', 'pro');
                var q = params.toString();
                window.history.replaceState(null, '', window.location.pathname +
                    (q ? '?' + q : '') + (window.location.hash || ''));
            } catch (e) { }
        }

        function activate(v, writeUrl) {
            box.setAttribute('data-version', v);
            opts.forEach(function (b) {
                b.setAttribute('aria-pressed', b.getAttribute('data-version') === v ? 'true' : 'false');
            });
            syncTrustPlatform(v);
            syncConsentLinks(v);
            if (writeUrl) syncUrl(v);
        }
        activate(urlVersion() === 'pro' ? 'pro' : 'std', false);

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
                activate(v, true);
                window.scrollTo(0, y);
                root.style.scrollBehavior = sb;
            });
        });
    }

    // ---- 隐私政策 / 用户协议页：标准版 / Pro 版切换 ----
    //      状态挂在 .policy 的 data-version 上，滑块位置与两版正文显隐仍全部由 CSS 驱动；
    //      版本同时写进地址栏（?ver=pro，标准版保持裸地址），使任一版正文都能作为独立链接打开
    function initPolicyVersion() {
        var box = document.querySelector('.policy');
        if (!box) return;
        var opts = Array.prototype.slice.call(box.querySelectorAll('.ver-option'));

        // 地址栏里的目标版本：无参数或非 pro 一律按标准版处理
        function urlVersion() {
            var m = (window.location.search || '').match(/[?&]ver=(std|pro)(?:&|$)/i);
            return m ? m[1].toLowerCase() : '';
        }

        // 同步地址栏：保留 lang 等其余参数，只改 ver（不新增历史记录，返回键行为不变）
        function syncUrl(v) {
            try {
                var params = new URLSearchParams(window.location.search || '');
                params.delete('ver');
                if (v === 'pro') params.set('ver', 'pro');
                var q = params.toString();
                window.history.replaceState(null, '', window.location.pathname +
                    (q ? '?' + q : '') + (window.location.hash || ''));
            } catch (e) { }
        }

        function activate(v, writeUrl) {
            box.setAttribute('data-version', v);
            opts.forEach(function (b) {
                b.setAttribute('aria-pressed', b.getAttribute('data-version') === v ? 'true' : 'false');
            });
            if (writeUrl) syncUrl(v);
        }

        activate(urlVersion() === 'pro' ? 'pro' : 'std', false);

        opts.forEach(function (b) {
            b.addEventListener('click', function () { activate(b.getAttribute('data-version'), true); });
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

        // Pro 版中文：点平台先选「官方直连 / 代理加速」，选中后由感谢页触发下载
        var picker = box.querySelector('.dl-method');
        var veil = box.querySelector('.dl-veil');
        var pickRow = null;

        function closePicker() {
            if (pickRow) {
                pickRow.classList.remove('is-picking');
                pickRow = null;
            }
            if (veil) veil.hidden = true;
            if (!picker || picker.hidden) return;
            picker.hidden = true;
            picker.classList.remove('is-up');
            picker.style.top = '';
            var caret = picker.querySelector('.dl-method-caret');
            if (caret) caret.style.left = '';
        }

        // 浮层贴着被点的行展开：右侧与清单右缘错开 6px、宽 316px，比清单窄一截；
        // 下方视口放不下时翻到行上方；顶部箭头横向对准被点的那一行
        function openPicker(row) {
            var panels = picker.parentNode;
            var pr = panels.getBoundingClientRect();
            var plat = picker.querySelector('.dl-method-plat');
            var os = row.querySelector('.dl-os');
            var arch = row.querySelector('.dl-arch');
            if (plat) plat.textContent = (os && arch) ? os.textContent + ' · ' + arch.textContent : '';
            picker.hidden = false;
            if (veil) veil.hidden = false;
            picker.classList.remove('is-up');
            var h = picker.offsetHeight;
            var rr = row.getBoundingClientRect();
            if (rr.bottom + 10 + h + 8 > window.innerHeight) {
                picker.style.top = (rr.top - pr.top - h - 10) + 'px';
                picker.classList.add('is-up');
            } else {
                picker.style.top = (rr.bottom - pr.top + 10) + 'px';
            }
            // 箭头对准行的水平中心，并限制在浮层圆角之内
            var caret = picker.querySelector('.dl-method-caret');
            if (caret) {
                var popr = picker.getBoundingClientRect();
                var cx = rr.left + rr.width / 2 - popr.left;
                caret.style.left = Math.max(16, Math.min(popr.width - 26, cx - 5)) + 'px';
            }
        }

        function render() {
            closePicker();   // 语言/版本变化后浮层里的地址已过期，先收起
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

        // Pro 版中文才拦截行点击：先弹浮层选下载方式，其余情况保持原生跳转
        if (picker) {
            each.call(box.querySelectorAll('.dl-row'), function (row) {
                row.addEventListener('click', function (e) {
                    if (row.getAttribute('data-edition') !== 'pro') return;
                    if (window.getCurrentLang() !== 'zh-cn') return;
                    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                    e.preventDefault();
                    if (pickRow === row) { closePicker(); return; }
                    closePicker();
                    pickRow = row;
                    row.classList.add('is-picking');
                    openPicker(row);
                });
            });

            each.call(picker.querySelectorAll('.dl-method-opt'), function (btn) {
                btn.addEventListener('click', function () {
                    if (!pickRow) return;
                    var os = pickRow.getAttribute('data-os');
                    var url = buildUrl('pro', os);
                    if (!url) return;
                    if (btn.getAttribute('data-method') === 'proxy') {
                        url = (S.dlProxy || '') + url;
                    }
                    closePicker();
                    window.location.href = 'thanks.html?dl=' + encodeURIComponent(url) +
                        '&v=pro&p=' + encodeURIComponent(os);
                });
            });

            // 关闭：点浮层外、Esc、页面滚动或缩放（浮层按当前视口定位，滚动后会错位）
            document.addEventListener('click', function (e) {
                var t = e.target;
                if (!pickRow || !t || !t.closest) return;
                if (t.closest('.dl-row') || picker.contains(t)) return;
                closePicker();
            });
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') closePicker();
            });
            window.addEventListener('scroll', closePicker, true);
            window.addEventListener('resize', closePicker);
            // 切版本时浮层不属于任何面板，必须主动收起
            each.call(box.querySelectorAll('.ver-option'), function (b) {
                b.addEventListener('click', closePicker);
            });
        }

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

    // ---- 常见问题：保留 <details> 原生语义，只把瞬间开合补成高度过渡 ----
    //      拦下 summary 的原生开合，用内联 height + padding-bottom 做动画；
    //      脚本未运行或报错时 <details> 照常开合（fail-open），只是没有动画
    function initFaq() {
        // 用户要求减少动效时直接交回原生开合
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        var items = Array.prototype.slice.call(document.querySelectorAll('.faq details'));
        if (!items.length) return;

        var OPEN_MS = 340;
        var CLOSE_MS = 240;   // 离场约为入场的 3/4
        var OPEN_EASE = 'cubic-bezier(.16, 1, .3, 1)';
        var CLOSE_EASE = 'cubic-bezier(.7, 0, .84, 0)';
        // 内容区高度含 padding-bottom（全站 border-box），两条属性必须同步过渡，
        // 否则收起末尾会因 padding 卡住出现一次约 24px（窄屏 20px）的瞬间跳变
        function dur(ms, ease) {
            return 'height ' + ms + 'ms ' + ease + ', padding-bottom ' + ms + 'ms ' + ease;
        }

        Array.prototype.forEach.call(items, function (d) {
            var summary = d.querySelector('summary');
            var ans = d.querySelector('.ans');
            if (!summary || !ans) return;

            var shown = !!d.open;   // 意图状态：收起动画期间 d.open 仍为 true，不能拿它判断
            var timer = null;
            var onEnd = null;

            function cancel() {
                if (timer) { window.clearTimeout(timer); timer = null; }
                if (onEnd) { ans.removeEventListener('transitionend', onEnd); onEnd = null; }
            }
            // 收尾：清掉内联值，把最终开合状态交回 <details>
            function settle(isOpen) {
                cancel();
                if (!isOpen) d.open = false;
                d.classList.remove('closing');
                ans.style.height = '';
                ans.style.paddingBottom = '';
                ans.style.transition = '';
            }
            function watch(isOpen, ms) {
                onEnd = function (ev) {
                    if (ev.target === ans && ev.propertyName === 'height') settle(isOpen);
                };
                ans.addEventListener('transitionend', onEnd);
                // 兜底：后台标签页不跑过渡时靠定时器收尾，避免状态卡在半途
                timer = window.setTimeout(function () { settle(isOpen); }, ms + 80);
            }

            summary.addEventListener('click', function (e) {
                e.preventDefault();   // 拦下原生瞬间开合，改由过渡完成
                cancel();
                shown = !shown;

                if (shown) {
                    // ---- 展开：先打开取到自然高度，再从 0 过渡上去 ----
                    d.classList.remove('closing');
                    ans.style.transition = 'none';
                    ans.style.height = '';
                    ans.style.paddingBottom = '';
                    d.open = true;
                    var full = ans.offsetHeight;
                    var pb = window.getComputedStyle(ans).paddingBottom;
                    ans.style.height = '0px';
                    ans.style.paddingBottom = '0px';
                    void ans.offsetHeight;   // 强制回流，把 0 这个起点定下来
                    ans.style.transition = dur(OPEN_MS, OPEN_EASE);
                    ans.style.height = full + 'px';
                    ans.style.paddingBottom = pb;
                    watch(true, OPEN_MS);
                } else {
                    // ---- 收起：从当前高度（可能正处于展开动画中途）过渡到 0 ----
                    var h = ans.offsetHeight;
                    var p = window.getComputedStyle(ans).paddingBottom;
                    d.classList.add('closing');   // 让 +/− 标记立即翻回「+」
                    ans.style.transition = 'none';
                    ans.style.height = h + 'px';
                    ans.style.paddingBottom = p;
                    void ans.offsetHeight;
                    ans.style.transition = dur(CLOSE_MS, CLOSE_EASE);
                    ans.style.height = '0px';
                    ans.style.paddingBottom = '0px';
                    watch(false, CLOSE_MS);
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
