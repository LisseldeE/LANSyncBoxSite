// ============================================================
//  LANSyncBox 官网 · i18n 国际化系统
//  实现方式参考 LisseldeE.github.io：字典 + data-i18n 属性驱动
//  语言优先级：URL 语言目录 > localStorage > 浏览器语言
// ============================================================

window.I18N = {
    'zh-cn': {
        // ---------- meta ----------
        'meta.title': 'LANSyncBox · 局域网文件实时同步工具',
        'meta.description': 'LANSyncBox 是一款跨平台、专为局域网设计的文件实时同步工具。多人同网即可安全共享与同步文件，无需公网、无需服务器，支持大文件流式传输与断点续传。',

        // ---------- 通用 ----------

        // ---------- 导航 ----------
        'nav.download': '下载',

        // ---------- Hero ----------

        // ---------- 数据条 ----------

        // ---------- 功能 ----------

        // ---------- 截图 ----------

        // ---------- 使用 ----------

        // ---------- 同步机制 ----------

        // ---------- 版本对比 ----------
        'editions.col.feature': '功能',
        'editions.col.standard': '标准版',
        'editions.col.pro': 'Pro 版',
        'editions.row.realtime': '实时文件同步',
        'editions.row.room': '房间分享（6 位数字 + 密码校验）',
        'editions.row.transfer': '大文件传输（流式分块 · 断点续传）',
        'editions.row.nickname': '端昵称显示（取代 IP）',
        'editions.row.deliver': '投递 · 跨设备复制粘贴',
        'editions.row.clipboard': '文本剪贴板广播',
        'editions.row.dm': '私信 · 端到端私密传输',
        'editions.row.mode': '同步 / 收集双模式',
        'editions.row.decentralized': '去中心化分布式架构',

        // ---------- 技术栈 ----------

        // ---------- 下载 ----------

        // ---------- 更新日志 ----------

        // ---------- 支持与页脚 ----------

        // ---------- 首页（7 段整屏版式） ----------
        'nav.home': '首页',
        'loading.default': '加载中...',
        'nav.help': '帮助',
        'nav.feedback': '反馈',
        'nav.details': '详情',
        'hero.tagline.1': '同一局域网内，文件实时同步到每一台设备。',
        'hero.tagline.2': '无需公网，无需服务器。',
        'hero.cta.download': '下载 LANSyncBox',
        'hero.scroll': '向下滚动',
        'std.name': '标准版',
        'std.headline.pre': '一台主机做中枢，其余端',
        'std.headline.acc': '实时跟随',
        'std.b1': '增删改重命名，实时派发',
        'std.b2': '6 位房间号 + 密码校验',
        'std.b3': '流式分块 · 断点续传',
        'std.b4': '最多 5 个文件并发',
        'std.b5': '双击只读预览，防误改',
        'std.alt': '标准版主界面',
        'pro.name': 'Pro 版',
        'pro.headline.pre': '去中心化，',
        'pro.headline.acc': '没有主机也不停',
        'pro.b1': '对等网状同步，断谁都不停',
        'pro.b2': '无需主机在线即可入房',
        'pro.b3': '版本向量 + 逻辑钟 + 时间戳',
        'pro.b4': '中断只续发剩余部分',
        'pro.b5': '支持 macOS（Apple Silicon）',
        'pro.alt': 'Pro 版主界面',
        'proonly.badge': '仅 Pro 版具备',
        'proonly.headline': '标准版没有的那几件事',
        'proonly.t1.title': '端昵称',
        'proonly.t1.desc': '可读昵称取代 IP',
        'proonly.t2.title': '投递',
        'proonly.t2.desc': '跨设备复制粘贴',
        'proonly.t3.title': '剪贴板广播',
        'proonly.t3.desc': '一次广播到全房',
        'proonly.t4.title': '端到端直投',
        'proonly.t4.desc': '图片文件不经中继',
        'proonly.t5.title': '私信',
        'proonly.t5.desc': '一对一文本与文件',
        'proonly.t6.title': '收集模式',
        'proonly.t6.desc': '多人汇总到一处',
        'demos.headline': 'Pro 版功能演示',
        'demos.d1.cap': '顶部快捷添加',
        'demos.d1.desc': '在顶部工具条一键添加文件或文件夹，立即纳入同步。',
        'demos.d2.cap': '列表快捷操作栏',
        'demos.d2.desc': '鼠标移上列表项即浮出快捷操作栏，常用动作一步可达。',
        'demos.d3.cap': '文本内容投递',
        'demos.d3.desc': '把选中的文本投递给房间内其他设备，跨设备粘贴即用。',
        'demos.d4.cap': '文件内容投递',
        'demos.d4.desc': '把文件直接投递到目标设备，点对点传输，不经过中继。',
        'compare.headline': '标准版 与 Pro 版差在哪',
        'editions.row.macos': 'macOS（Apple Silicon）',
        'download.headline': '下载 LANSyncBox',
        'footer.license.note': '基于 GNU General Public License v3.0 开源',
        'dots.aria': '跳转到该段',

        // ---------- 下载页 · 版本切换 ----------
        'dl.aria': '选择版本',
        'dl.latest': '最新版本',
        'dl.download': '下载',
        'dl.store.alt': '从 Microsoft Store 获取 LANSyncBox',
        'dl.store.badge': 'https://get.microsoft.com/images/zh-cn%20dark.svg',

        // ---------- 感谢页 ----------
        'thanks.meta.title': '感谢下载 LANSyncBox',
        'thanks.meta.description': '感谢你选择 LANSyncBox。同一局域网内，文件实时同步到每一台设备。',
        'thanks.title': '感谢你选择 LANSyncBox',
        'thanks.sub': '文件不再绕经公网，也不依赖服务器 —— 同一局域网内，实时同步到每一台设备。',
        'thanks.auto': '下载很快将会开始，请留意浏览器提示。',
        'thanks.next.title': '接下来',
        'thanks.next.1': '确保所有设备连在同一个局域网',
        'thanks.next.2': '由一台设备创建房间，记下 6 位房间号',
        'thanks.next.3': '其他设备输入房间号与密码即可加入',
        'thanks.back.download': '返回下载页',
        'thanks.back.home': '回到首页'
    },

    'en': {
        // ---------- meta ----------
        'meta.title': 'LANSyncBox · Real-time LAN File Sync',
        'meta.description': 'LANSyncBox is a cross-platform tool built for real-time file synchronization over a local network. Share and sync files securely within the same LAN — no public network, no server required.',

        // ---------- Common ----------

        // ---------- Navigation ----------
        'nav.download': 'Download',

        // ---------- Hero ----------

        // ---------- Stats ----------

        // ---------- Features ----------

        // ---------- Screenshots ----------

        // ---------- Usage ----------

        // ---------- Sync ----------

        // ---------- Editions ----------
        'editions.col.feature': 'Feature',
        'editions.col.standard': 'Standard',
        'editions.col.pro': 'Pro',
        'editions.row.realtime': 'Real-time file sync',
        'editions.row.room': 'Room sharing (6-digit number + password)',
        'editions.row.transfer': 'Large file transfer (chunked · resumable)',
        'editions.row.nickname': 'Peer nicknames (instead of IP)',
        'editions.row.deliver': 'Deliver · cross-device copy & paste',
        'editions.row.clipboard': 'Text clipboard broadcast',
        'editions.row.dm': 'Direct messages · private transfer',
        'editions.row.mode': 'Sync / Collect dual modes',
        'editions.row.decentralized': 'Decentralized architecture',

        // ---------- Tech ----------

        // ---------- Download ----------

        // ---------- Changelog ----------

        // ---------- Support & Footer ----------

        // ---------- Homepage (7-segment full-screen layout) ----------
        'nav.home': 'Home',
        'loading.default': 'Loading...',
        'nav.help': 'Help',
        'nav.feedback': 'Feedback',
        'nav.details': 'Details',
        'hero.tagline.1': 'Files stay in sync across every device on the same LAN.',
        'hero.tagline.2': 'No public network. No server.',
        'hero.cta.download': 'Download LANSyncBox',
        'hero.scroll': 'Scroll down',
        'std.name': 'Standard',
        'std.headline.pre': 'One host as the hub, every peer ',
        'std.headline.acc': 'follows live',
        'std.b1': 'Add, edit and rename, dispatched in real time',
        'std.b2': '6-digit room number + password check',
        'std.b3': 'Chunked streaming · resumable',
        'std.b4': 'Up to 5 files transferring at once',
        'std.b5': 'Double-click for a read-only preview',
        'std.alt': 'Standard edition main screen',
        'pro.name': 'Pro',
        'pro.headline.pre': 'Decentralized — ',
        'pro.headline.acc': 'runs on without a host',
        'pro.b1': 'Peer mesh sync — losing any peer keeps it running',
        'pro.b2': 'Join a room even when the host is offline',
        'pro.b3': 'Version vectors + logical clock + timestamps',
        'pro.b4': 'An interrupted transfer resumes only the remainder',
        'pro.b5': 'macOS support (Apple Silicon)',
        'pro.alt': 'Pro edition main screen',
        'proonly.badge': 'Pro only',
        'proonly.headline': 'The things the Standard edition leaves out',
        'proonly.t1.title': 'Peer nicknames',
        'proonly.t1.desc': 'Readable names instead of IPs',
        'proonly.t2.title': 'Deliver',
        'proonly.t2.desc': 'Cross-device copy & paste',
        'proonly.t3.title': 'Clipboard broadcast',
        'proonly.t3.desc': 'Broadcast to the whole room at once',
        'proonly.t4.title': 'Peer-to-peer delivery',
        'proonly.t4.desc': 'Images and files skip the relay',
        'proonly.t5.title': 'Direct message',
        'proonly.t5.desc': 'One-to-one text and files',
        'proonly.t6.title': 'Collect mode',
        'proonly.t6.desc': 'Many peers gather into a single place',
        'demos.headline': 'Pro feature demos',
        'demos.d1.cap': 'Quick add from the top bar',
        'demos.d1.desc': 'Add a file or folder from the top toolbar and it joins the sync right away.',
        'demos.d2.cap': 'List quick-action bar',
        'demos.d2.desc': 'Hover a list item to reveal the quick-action bar — common actions in one step.',
        'demos.d3.cap': 'Text content delivery',
        'demos.d3.desc': 'Deliver the selected text to other devices in the room and paste it anywhere.',
        'demos.d4.cap': 'File content delivery',
        'demos.d4.desc': 'Deliver a file straight to the target device — peer to peer, no relay.',
        'compare.headline': 'What differs between Standard and Pro',
        'editions.row.macos': 'macOS (Apple Silicon)',
        'download.headline': 'Download LANSyncBox',
        'footer.license.note': 'Released under the GNU General Public License v3.0',
        'dots.aria': 'Go to this section',

        // ---------- Download page · edition switch ----------
        'dl.aria': 'Select edition',
        'dl.latest': 'Latest version',
        'dl.download': 'Download',
        'dl.store.alt': 'Get LANSyncBox from the Microsoft Store',
        'dl.store.badge': 'https://get.microsoft.com/images/en-us%20dark.svg',

        // ---------- Thank-you page ----------
        'thanks.meta.title': 'Thank you for downloading LANSyncBox',
        'thanks.meta.description': 'Thank you for choosing LANSyncBox. Files stay in sync across every device on the same LAN.',
        'thanks.title': 'Thank you for choosing LANSyncBox',
        'thanks.sub': 'Files no longer travel over the public network or through a server — they stay in sync across every device on the same LAN.',
        'thanks.auto': 'Your download will start shortly — keep an eye on your browser.',
        'thanks.next.title': 'What to do next',
        'thanks.next.1': 'Make sure every device is on the same local network',
        'thanks.next.2': 'Create a room on one device and note the 6-digit number',
        'thanks.next.3': 'Join from the other devices with the number and password',
        'thanks.back.download': 'Back to downloads',
        'thanks.back.home': 'Back to home'
    }
};

// ------------------------------------------------------------
//  站点级配置（链接、版本等，供 main.js 使用）
// ------------------------------------------------------------
window.SITE = {
    langKey: 'site-lang',
    langs: ['zh-cn', 'en'],
    repo: 'https://github.com/LisseldeE/LANSyncBox',
    proBranch: 'https://github.com/LisseldeE/LANSyncBox/tree/pro',
    releases: 'https://github.com/LisseldeE/LANSyncBox/releases',
    gitee: 'https://gitee.com/Lisselde_E/LANSyncBox/releases',
    store: 'https://apps.microsoft.com/detail/9nsjvp7fxkm3?referrer=appbadge&mode=full',
    privacy: 'https://github.com/LisseldeE/LANSyncBox/blob/main/privacy_policy.md',
    license: 'https://github.com/LisseldeE/LANSyncBox/blob/main/LICENSE',
    sponsor: 'https://ifdian.net/a/lisseldee',
    issues: 'https://github.com/LisseldeE/LANSyncBox/issues',

    // ---------- 下载页数据 ----------
    // 版本号来源：作者 GitHub Pages 上的纯文本文件，本站不维护版本号
    versionUrls: {
        std: 'https://lisseldee.github.io/version/lansyncbox',
        pro: 'https://lisseldee.github.io/version/lansyncboxpro'
    },
    // 版本号取不到时的兜底值（仅在请求失败时生效）
    versionFallback: { std: 'R7.1.7.0', pro: 'R1.2.0.0' },
    // 发布资产地址模板：{tag} 为版本 tag —— 标准版即版本号本身，Pro 版需加 pro- 前缀
    dlRepo: {
        github: 'https://github.com/LisseldeE/LANSyncBox/releases/download/',
        gitee: 'https://gitee.com/Lisselde_E/LANSyncBox/releases/download/'
    },
    dlAssets: {
        std: { tagPrefix: '', win: 'LANSyncBox_Setup.exe', linux: 'lansyncbox_amd64.deb' },
        pro: { tagPrefix: 'pro-', win: 'LANSyncBoxPro_Setup.exe', linux: 'lansyncboxpro_amd64.deb', mac: 'LANSyncBoxPro_arm64.dmg' }
    },
    // 两个版本都已上架 Microsoft Store
    dlStore: {
        std: 'https://apps.microsoft.com/detail/9nsjvp7fxkm3?referrer=appbadge&mode=full',
        pro: 'https://apps.microsoft.com/detail/9n4g6w3rm3q6?referrer=appbadge&mode=full'
    }
};

// 从 URL 路径解析语言目录（相对路径部署安全，兼容 /LANSyncBoxSite/ 这类项目页）
window.getPathLang = function () {
    var p = window.location.pathname.toLowerCase();
    if (/(^|\/)en(\/|$)/.test(p)) return 'en';
    if (/(^|\/)zh-cn(\/|$)/.test(p)) return 'zh-cn';
    return '';
};

// 获取当前语言：URL 目录 > localStorage > 浏览器语言
window.getCurrentLang = function () {
    var byPath = window.getPathLang();
    if (byPath) return byPath;

    var saved = null;
    try { saved = localStorage.getItem(window.SITE.langKey); } catch (e) { }
    if (saved && window.I18N[saved]) return saved;

    var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return lang.indexOf('zh') === 0 ? 'zh-cn' : 'en';
};

// 翻译函数：仅按当前语言查字典。
// 命中 → 返回译文；未命中 → 返回 null。
// 绝不允许「未命中就把 key 当译文返回」——否则调用方会把原始 key（如 hero.tagline.1）
// 写进 DOM，这正是刷新后出现占位符文案的根因。
// 这里也不做中文回退：英文页取不到译文时应当保留 HTML 兜底文案，而不是显示中文。
window.t = function (key) {
    if (!key) return null;
    var dict = window.I18N[window.getCurrentLang()];
    if (!dict) return null;
    var val = dict[key];
    return (typeof val === 'string' && val !== '') ? val : null;
};

// 语言切换：就地换文案（不重载页面），带柔和过渡，并同步地址栏
window.switchLang = function (lang) {
    if (window.SITE.langs.indexOf(lang) === -1) lang = 'zh-cn';
    if (lang === window.getPathLang()) return;        // 已在该语言目录，无需切换
    try { localStorage.setItem(window.SITE.langKey, lang); } catch (e) { }

    // 同步地址栏：replaceState 不触发重载，锚点与文件名（如 thanks.html）原样保留
    try {
        var path = window.location.pathname;
        var file = /\.[a-z0-9]+$/i.test(path) ? path.replace(/.*\//, '') : '';
        var base = path.replace(/[^\/]*$/, '').replace(/\/(zh-cn|en)\/$/, '/');
        var dir = lang === 'en' ? 'en/' : 'zh-cn/';
        window.history.replaceState(null, '', base + dir + file + (window.location.hash || ''));
    } catch (e) { }

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { window.applyI18n(); return; }

    // 先让文案淡出，再在淡出态换字，最后淡入 —— 避免新文案硬闪
    document.body.classList.add('i18n-switching');
    window.setTimeout(function () {
        window.applyI18n();
        window.requestAnimationFrame(function () {
            document.body.classList.remove('i18n-switching');
        });
    }, 170);
};

// 将翻译应用到所有声明了 data-i18n* 的元素
window.applyI18n = function () {
    var lang = window.getCurrentLang();
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

    // 页面可通过 body 上的 data-i18n-title-key / data-i18n-desc-key 覆盖标题与描述。
    // 同样守卫：取不到译文就保留 HTML 原有标题/描述，不写入 null。
    var titleKey = document.body.getAttribute('data-i18n-title-key') || 'meta.title';
    var descKey = document.body.getAttribute('data-i18n-desc-key') || 'meta.description';
    var titleVal = window.t(titleKey);
    if (titleVal !== null) document.title = titleVal;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        var descVal = window.t(descKey);
        if (descVal !== null) metaDesc.setAttribute('content', descVal);
    }

    // 所有可译点走同一条守卫路径：只有真正取到译文才写入，取不到一律跳过，
    // 保留 HTML 里写好的兜底文案 —— 这是杜绝 key 泄漏的关键。
    function apply(selector, kind) {
        document.querySelectorAll(selector).forEach(function (el) {
            var val = window.t(el.getAttribute(selector.slice(1, -1)));
            if (val === null) return;
            if (kind === 'text') el.textContent = val;
            else el.setAttribute(kind, val);
        });
    }
    apply('[data-i18n]', 'text');
    apply('[data-i18n-title]', 'title');
    apply('[data-i18n-placeholder]', 'placeholder');
    apply('[data-i18n-aria-label]', 'aria-label');
    apply('[data-i18n-alt]', 'alt');
    apply('[data-i18n-src]', 'src');

    // 语言切换器：滑块位置 + 高亮 + 无障碍状态
    var activeLang = lang === 'en' ? 'en' : 'zh-cn';
    var langBox = document.querySelector('.lang');
    if (langBox) langBox.setAttribute('data-active', activeLang);
    document.querySelectorAll('.lang-option').forEach(function (btn) {
        var on = btn.getAttribute('data-lang') === activeLang;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
};
