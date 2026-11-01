// ============================================================
//  LANSyncBox 官网 · i18n 国际化系统
//  实现方式参考 LisseldeE.github.io：字典 + data-i18n 属性驱动
//  单文件站点：语言由地址栏 ?lang= 承载（中文为裸地址）
//  语言优先级：?lang= > localStorage > 浏览器语言
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
        'pro.headline.pre': '去中心化，',
        'pro.headline.acc': '没有主机也不停',
        'pro.b1': '对等网状同步，断谁都不停',
        'pro.b2': '无需主机在线即可入房',
        'pro.b3': '版本向量 + 逻辑钟 + 时间戳',
        'pro.b4': '中断只续发剩余部分',
        'pro.b5': '支持 macOS（Apple Silicon）',
        'pro.diagram.alt': '同步示意：设备两两直连，没有主机也不停',
        'tiles.headline': '完整能力都在这里',
        'tiles.t1.title': '端昵称',
        'tiles.t1.desc': '可读昵称取代 IP',
        'tiles.t2.title': '屏幕顶部快捷添加',
        'tiles.t2.desc': '工具条一键添加，立即纳入同步',
        'tiles.t4.title': '私信',
        'tiles.t4.desc': '一对一文本与文件',
        'tiles.t5.title': '收集模式',
        'tiles.t5.desc': '多人汇总到一处',
        'tiles.t6.title': '去中心化',
        'tiles.t6.desc': '无主机也能互相同步',
        'tiles.t7.title': '投递',
        'tiles.t7.desc': '跨设备复制粘贴，不经中继',
        'demos.headline': '投递功能演示',
        'demos.d1.cap': '顶部快捷添加',
        'demos.d1.desc': '在顶部工具条一键添加文件或文件夹，立即纳入同步。',
        'demos.d2.cap': '列表快捷操作栏',
        'demos.d2.desc': '鼠标移上列表项即浮出快捷操作栏，常用动作一步可达。',
        'demos.d3.cap': '文本内容投递',
        'demos.d3.desc': '把选中的文本投递给房间内其他设备，跨设备粘贴即用。',
        'demos.d4.cap': '文件内容投递',
        'demos.d4.desc': '把文件直接投递到目标设备，点对点传输，不经过中继。',
        'download.headline': '下载 LANSyncBox',
        'footer.brand.desc': '一款为局域网设计的跨平台文件实时同步工具。',
        'footer.col.product': '产品',
        'footer.col.docs': '文档',
        'footer.col.community': '社区',
        'footer.col.contact': '联系',
        'footer.col.legal': '法律',
        'footer.link.download': '下载',
        'footer.link.details': '功能详情',
        'footer.link.wiki': 'Wiki 文档',
        'footer.link.changelog': '更新历史',
        'footer.link.issues': '问题反馈',
        'footer.link.email': '邮箱',
        'footer.link.terms': '用户协议',
        'footer.link.privacy': '隐私政策',
        'footer.license.note': '基于 GNU General Public License v3.0 开源',
        'dots.aria': '跳转到该段',

        // ---------- 信任行 ----------
        'trust.p1.title': '3 个平台',
        'trust.p1.desc': 'Windows · Linux · macOS',
        'trust.p2.title': '0 次公网中转',
        'trust.p2.desc': '数据全程留在局域网内',
        'trust.p3.title': 'GPL-3.0',
        'trust.p3.desc': '完全开源，代码可自行审计',
        'trust.p4.title': '无广告 · 无追踪',
        'trust.p4.desc': '不注册账号，不采集任何数据',

        // ---------- 使用场景 ----------
        'cases.kicker': '使用场景',
        'cases.headline': '同一个局域网，就有很多用得上的地方',
        'cases.s1.label': '家庭',
        'cases.s1.desc': '把照片、文档加进同步，家里几台电脑随时都是最新版。',
        'cases.s2.label': '小团队',
        'cases.s2.desc': '把项目资料加进同步，谁的改动其余人立刻同步到位。',
        'cases.s3.label': '开发机',
        'cases.s3.desc': '配置、脚本、构建产物在多台机器间流转，不必手动搬运。',
        'cases.s4.label': '无网现场',
        'cases.s4.desc': '展会、内网、机房等没有外网的场合，只要在同一局域网内就能同步。',

        // ---------- 常见问题 ----------
        'faq.kicker': '常见问题',
        'faq.headline': '装上之前，你可能想问的',
        'faq.q1': '需要联网吗？',
        'faq.a1': '不需要外部网络。只要设备连在同一个局域网内（同一路由器下的 Wi-Fi 或有线网络）就能同步。',
        'faq.q2': '需要注册账号吗？',
        'faq.a2': '不需要。下载安装后即可使用，没有账号体系，也不需要手机号或邮箱。',
        'faq.q3': '我的文件会经过你们的服务器吗？',
        'faq.a3': '不会。数据全程在局域网内点对点传输，我们不运营任何中转服务器，也不采集文件内容。',
        'faq.q4': '支持哪些平台？',
        'faq.a4': '支持 Windows、Linux 与 macOS（Apple Silicon）。移动端与更多平台会陆续补齐。',
        'faq.q6': '完全免费吗？',
        'faq.a6': '是。GNU GPL v3.0 开源，无广告、无内购、不做数据追踪；代码可在 GitHub 上自行审计。',

        // ---------- 收尾横带 ----------
        'outro.headline': '文件流动还可以如此简单',
        'outro.sub': '无需公网 · 无需服务器 · 无需注册',
        'outro.cta': '下载 LANSyncBox',

        // ---------- 下载页 · 版本切换 ----------
        'dl.latest': '最新版本',
        'dl.eyebrow': 'DOWNLOAD',
        'dl.channel': '最新构建',
        'dl.merge.note': 'Pro 版与标准版已合并为同一版本，下载后即为完整功能。',
        'dl.download': '下载',
        'dl.arch.win': '10 / 11 · x64',
        'dl.arch.linux': 'x64 · Debian / Ubuntu',
        'dl.arch.mac': 'Apple Silicon · M 系列',
        'dl.store.alt': '从 Microsoft Store 获取 LANSyncBox',
        'dl.store.badge': 'https://get.microsoft.com/images/zh-cn%20light.svg',
        'dl.consent.pre': '下载、安装或使用即表示您同意',
        'dl.consent.terms': '《用户协议》',
        'dl.consent.and': '与',
        'dl.consent.privacy': '《隐私政策》',
        'dl.consent.end': '。',

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

        // ---------- 隐私政策页 ----------
        'privacy.meta.title': '隐私政策 · LANSyncBox',
        'privacy.meta.description': 'LANSyncBox 隐私政策。',
        'privacy.title': '隐私政策',
        'privacy.sub': 'LANSyncBox 桌面客户端的隐私政策。',
        'privacy.back': '返回首页',

        // ---------- 用户协议页 ----------
        'terms.meta.title': '用户协议 · LANSyncBox',
        'terms.meta.description': 'LANSyncBox 用户协议。',
        'terms.title': '用户协议',
        'terms.sub': 'LANSyncBox 桌面客户端的用户协议。',
        'terms.back': '返回首页'
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
        'pro.headline.pre': 'Decentralized — ',
        'pro.headline.acc': 'runs on without a host',
        'pro.b1': 'Peer mesh sync — losing any peer keeps it running',
        'pro.b2': 'Join a room even when the host is offline',
        'pro.b3': 'Version vectors + logical clock + timestamps',
        'pro.b4': 'An interrupted transfer resumes only the remainder',
        'pro.b5': 'macOS support (Apple Silicon)',
        'pro.diagram.alt': 'Sync diagram: devices connect peer to peer with no host needed',
        'tiles.headline': 'Everything is in one build',
        'tiles.t1.title': 'Peer nicknames',
        'tiles.t1.desc': 'Readable names instead of IPs',
        'tiles.t2.title': 'Quick add from the top bar',
        'tiles.t2.desc': 'Add files or folders from the toolbar, synced right away',
        'tiles.t4.title': 'Direct message',
        'tiles.t4.desc': 'One-to-one text and files',
        'tiles.t5.title': 'Collect mode',
        'tiles.t5.desc': 'Many peers gather into one place',
        'tiles.t6.title': 'Decentralised',
        'tiles.t6.desc': 'No host needed — peers keep syncing',
        'tiles.t7.title': 'Deliver',
        'tiles.t7.desc': 'Cross-device copy & paste, no relay',
        'demos.headline': 'Deliver demos',
        'demos.d1.cap': 'Quick add from the top bar',
        'demos.d1.desc': 'Add a file or folder from the top toolbar and it joins the sync right away.',
        'demos.d2.cap': 'List quick-action bar',
        'demos.d2.desc': 'Hover a list item to reveal the quick-action bar — common actions in one step.',
        'demos.d3.cap': 'Text content delivery',
        'demos.d3.desc': 'Deliver the selected text to other devices in the room and paste it anywhere.',
        'demos.d4.cap': 'File content delivery',
        'demos.d4.desc': 'Deliver a file straight to the target device — peer to peer, no relay.',
        'download.headline': 'Download LANSyncBox',
        'footer.brand.desc': 'A cross-platform real-time file sync tool built for local networks.',
        'footer.col.product': 'Product',
        'footer.col.docs': 'Docs',
        'footer.col.community': 'Community',
        'footer.col.contact': 'Contact',
        'footer.col.legal': 'Legal',
        'footer.link.download': 'Download',
        'footer.link.details': 'Features',
        'footer.link.wiki': 'Wiki',
        'footer.link.changelog': 'Release history',
        'footer.link.issues': 'Issues',
        'footer.link.email': 'Email',
        'footer.link.terms': 'Terms of Service',
        'footer.link.privacy': 'Privacy Policy',
        'footer.license.note': 'Released under the GNU General Public License v3.0',
        'dots.aria': 'Go to this section',

        // ---------- Trust band ----------
        'trust.p1.title': '3 platforms',
        'trust.p1.desc': 'Windows · Linux · macOS',
        'trust.p2.title': 'Zero relay',
        'trust.p2.desc': 'Traffic stays inside your local network',
        'trust.p3.title': 'GPL-3.0',
        'trust.p3.desc': 'Fully open source — audit the code yourself',
        'trust.p4.title': 'No ads · No tracking',
        'trust.p4.desc': 'No account, no data collection',

        // ---------- Use cases ----------
        'cases.kicker': 'Use cases',
        'cases.headline': 'One local network, plenty of places it fits',
        'cases.s1.label': 'Home',
        'cases.s1.desc': 'Add photos and documents to the sync — every computer at home always has the latest version.',
        'cases.s2.label': 'Small teams',
        'cases.s2.desc': 'Add project files to the sync — any change reaches the others right away.',
        'cases.s3.label': 'Dev machines',
        'cases.s3.desc': 'Configs, scripts and build output move between machines — no manual copying.',
        'cases.s4.label': 'No-internet sites',
        'cases.s4.desc': 'Trade shows, intranets, server rooms — as long as you are on the same LAN, syncing works with no external network.',

        // ---------- FAQ ----------
        'faq.kicker': 'FAQ',
        'faq.headline': 'Questions before you install',
        'faq.q1': 'Do I need internet access?',
        'faq.a1': 'No external network is needed. As long as the devices are on the same local network (same router, Wi-Fi or wired), they can sync.',
        'faq.q2': 'Do I need an account?',
        'faq.a2': 'No. Just install it and start using it — there is no account system, and no phone number or email is required.',
        'faq.q3': 'Do my files pass through any server?',
        'faq.a3': 'No. Data moves peer-to-peer inside your local network. No relay servers are involved, and file contents are never collected.',
        'faq.q4': 'Which platforms are supported?',
        'faq.a4': 'Windows, Linux and macOS (Apple Silicon). Mobile and more platforms are on the way.',
        'faq.q6': 'Is it completely free?',
        'faq.a6': 'Yes. Open source under GNU GPL v3.0 — no ads, no in-app purchases, no data tracking. The code is on GitHub for anyone to audit.',

        // ---------- Closing band ----------
        'outro.headline': 'Moving files can be this simple',
        'outro.sub': 'No public network · No server · No sign-up',
        'outro.cta': 'Download LANSyncBox',

        // ---------- Download page · edition switch ----------
        'dl.latest': 'Latest version',
        'dl.eyebrow': 'DOWNLOAD',
        'dl.channel': 'Latest build',
        'dl.merge.note': 'The Pro and Standard editions are now a single release — one download gives you the full feature set.',
        'dl.download': 'Download',
        'dl.arch.win': '10 / 11 · x64',
        'dl.arch.linux': 'x64 · Debian / Ubuntu',
        'dl.arch.mac': 'Apple Silicon · M series',
        'dl.store.alt': 'Get LANSyncBox from the Microsoft Store',
        'dl.store.badge': 'https://get.microsoft.com/images/en-us%20light.svg',
        'dl.consent.pre': 'By downloading, installing or using LANSyncBox, you agree to the ',
        'dl.consent.terms': 'Terms of Service',
        'dl.consent.and': ' and ',
        'dl.consent.privacy': 'Privacy Policy',
        'dl.consent.end': '.',

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

        // ---------- Privacy policy page ----------
        'privacy.meta.title': 'Privacy Policy · LANSyncBox',
        'privacy.meta.description': 'Privacy Policy for LANSyncBox.',
        'privacy.title': 'Privacy Policy',
        'privacy.sub': 'The privacy policy for the LANSyncBox desktop client.',
        'privacy.back': 'Back to home',

        // ---------- Terms of Service page ----------
        'terms.meta.title': 'Terms of Service · LANSyncBox',
        'terms.meta.description': 'Terms of Service for LANSyncBox.',
        'terms.title': 'Terms of Service',
        'terms.sub': 'The terms of service for the LANSyncBox desktop client.',
        'terms.back': 'Back to home'
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
    // 版本号来源：本站 version/ 目录下的纯文本文件，发版时同步更新（沿用 Pro 分支版本号）
    versionUrl: 'version/lansyncboxpro',
    // 版本号取不到时的兜底值（仅在请求失败时生效）
    versionFallback: 'R1.2.1.0',
    // 发布资产地址模板：{tag} 即版本号本身（单版本，无前缀）
    dlRepo: {
        github: 'https://github.com/LisseldeE/LANSyncBox/releases/download/',
        gitee: 'https://gitee.com/Lisselde_E/LANSyncBox/releases/download/'
    },
    dlAssets: {
        win: 'LANSyncBox_Setup.exe',
        linux: 'lansyncbox_amd64.deb',
        mac: 'LANSyncBox_arm64.dmg'
    },
    dlStore: 'https://apps.microsoft.com/detail/9n4g6w3rm3q6?referrer=appbadge&mode=full'
};

// 单文件站点：语言不再用目录表达，只由地址栏的 ?lang= 承载
window.getUrlLang = function () {
    var m = (window.location.search || '').match(/[?&]lang=(zh-cn|en)(?:&|$)/i);
    return m ? m[1].toLowerCase() : '';
};

// 获取当前语言：?lang= > localStorage > 浏览器语言
window.getCurrentLang = function () {
    var byUrl = window.getUrlLang();
    if (byUrl) return byUrl;

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
    if (lang === window.getCurrentLang()) return;      // 已是当前语言，无需切换
    try { localStorage.setItem(window.SITE.langKey, lang); } catch (e) { }

    // 同步地址栏：只用 ?lang= 表达语言（中文保持裸地址），replaceState 不触发重载，
    // 其余参数与锚点原样保留
    try {
        var params = new URLSearchParams(window.location.search || '');
        params.delete('lang');
        if (lang === 'en') params.set('lang', 'en');
        var q = params.toString();
        window.history.replaceState(null, '', window.location.pathname +
            (q ? '?' + q : '') + (window.location.hash || ''));
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

    // 文案换完后广播一次：按「文字实际宽度」定位的装饰（如顶栏标签下的指示条）
    // 需要在这个时刻重排，否则会停在旧文案的宽度上
    window.dispatchEvent(new Event('i18n-applied'));
};
