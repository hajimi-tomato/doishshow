const toolbar = path => `<div class="window-toolbar"><button class="nav-button back" data-nav="back" aria-label="后退"></button><button class="nav-button forward" data-nav="forward" aria-label="前进"></button><span class="crumb">${path}</span><span class="spacer"></span><span class="sync-status"><i></i>暑假午后 · 已同步</span></div>`;

const openButton = (id, label, sun = false) => `<button class="soft-button${sun ? ' sun' : ''}" data-open="${id}"><span>${label}</span><i>↗</i></button>`;

const modulePage = ({ path, title, intro, folders, active, content }) => `
    <div class="window-page">${toolbar(path)}
        <div class="module-layout">
            <aside class="module-sidebar"><strong>档案分类</strong>${folders.map(folder => `<span class="${folder === active ? 'active' : ''}">${folder}</span>`).join('')}<small class="category-status">当前开放：${active}</small></aside>
            <section class="module-main">
                <header class="module-intro"><div><h2>${title}</h2><p>${intro}</p></div><span class="folder-meta">Last modified：今天</span></header>
                ${content}
            </section>
        </div>
    </div>`;

const projectCard = (title, copy, tags, destination = 'product', image = '') => {
    const parts = title.split(' / ');
    const number = parts.length > 1 ? parts.shift() : 'FILE';
    const heading = parts.length ? parts.join(' / ') : title;
    return `<article class="project-card"><button class="project-preview" data-open="${destination}" aria-label="打开${heading}">${image ? `<img class="project-thumb" src="${image}" alt="${heading}视觉地图预览">` : ''}<span class="project-file-mark">${number}</span></button><div class="project-file-copy"><header><span>PROJECT FILE</span><i>已归档</i></header><h4>${heading}</h4><p>${copy}</p><div class="tags">${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div><button class="card-link" data-open="${destination}">打开项目文件 <b>→</b></button></div></article>`;
};

const casePage = ({code,title,claim,role,problem,process,outcome,parent,previous,next,image,accent='sky',visual='system'}) => `
    <article class="case-page case-${accent} visual-${visual}">
        ${toolbar(`${moduleNamesForContent[parent] || '作品档案'} › ${code}`)}
        <div class="case-workspace">
            <header class="case-file-head"><div><span class="page-kicker">${code}.PROJECT</span><h2>${title}</h2><p>${claim}</p></div><aside><span>参与模块</span><b>${role}</b><small>从左侧视觉地图进入，再沿下方路径阅读。</small></aside></header>
            ${image ? `<figure class="case-map"><button class="case-map-open" data-lightbox-src="${image}" data-lightbox-alt="${title}视觉地图"><img src="${image}" alt="${title}视觉地图"><span>查看完整地图 ⛶</span></button><figcaption><b>VISUAL_MAP.${image.split('.').pop().toUpperCase()}</b><span>完整比例 · 点击放大 · 当前为主题化项目图解</span></figcaption></figure>` : ''}
            <div class="case-route" aria-label="项目阅读路径">
                <section><span class="route-node">A</span><div><small>DISCOVER / 发现</small><h3>从哪里开始</h3><p>${problem}</p></div></section>
                <i aria-hidden="true"></i>
                <section><span class="route-node">B</span><div><small>BUILD / 构建</small><h3>系统如何成形</h3><p>${process}</p></div></section>
                <i aria-hidden="true"></i>
                <section><span class="route-node">C</span><div><small>VERIFY / 验证</small><h3>留下了什么</h3><p>${outcome}</p></div></section>
            </div>
            <div class="case-footnote"><span>阅读提示</span><p>上方按“问题、做法、结果”整理。想了解完整经历，可从桌面打开「我的简历」。</p></div>
        </div>
        <footer class="case-nav">
            <button data-open="${previous || parent}">← 上一个档案</button>
            <button class="parent" data-open="${parent}">返回 ${moduleNamesForContent[parent] || '文件夹'}</button>
            <button data-open="${next || parent}">下一个档案 →</button>
        </footer>
    </article>`;

const moduleNamesForContent = {ai:'AI_Gallery',ui:'UI_Studio',product:'Product_Lab',art:'Art_Corner'};

const zcoolImageSequence = (slug, count) => Array.from({length:count}, (_, index) => `assets/images/zcool/${slug}/${String(index + 1).padStart(2,'0')}.webp`);

const zcoolCasePage = ({code,title,summary,role,slug,count,source,parent,previous,next}) => {
    const images = zcoolImageSequence(slug,count);
    return `<article class="zcool-case">
        ${toolbar(`${moduleNamesForContent[parent]} › 站酷公开作品 › ${code}`)}
        <header class="zcool-case-head"><div><span class="page-kicker">PUBLISHED ARCHIVE / ${code}</span><h2>${title}</h2><p>${summary}</p></div><aside><span>项目归档</span><b>${role}</b><small>${count} 张正文原图 · 本地完整保存</small><a href="${source}" target="_blank" rel="noreferrer">查看站酷原作 ↗</a></aside></header>
        <figure class="zcool-cover"><button data-lightbox-src="${images[0]}" data-lightbox-alt="${title} · 封面"><img src="${images[0]}" alt="${title}封面"><span>打开封面原图 ⛶</span></button><figcaption><b>01 / ${String(count).padStart(2,'0')}</b><span>作品封面</span></figcaption></figure>
        <div class="zcool-gallery-head"><div><span>IMAGE SEQUENCE</span><h3>完整项目图组</h3></div><p>保持站酷发布顺序与原始比例；点击任意图片可放大阅读。</p></div>
        <div class="zcool-gallery">${images.slice(1).map((image,index)=>`<figure><button data-lightbox-src="${image}" data-lightbox-alt="${title} · 第 ${index+2} 张"><img src="${image}" loading="lazy" alt="${title}第 ${index+2} 张项目图"><span>查看原图</span></button><figcaption>${String(index+2).padStart(2,'0')} / ${String(count).padStart(2,'0')}</figcaption></figure>`).join('')}</div>
        <div class="zcool-source-note"><span>ZCOOL SOURCE</span><p>图片、标题与顺序来自作者公开站酷主页；网页内只做分类、浏览与放大交互，不改变原作版式。</p><a href="${source}" target="_blank" rel="noreferrer">原作链接</a></div>
        <footer class="case-nav"><button data-open="${previous || parent}">← 上一个档案</button><button class="parent" data-open="${parent}">返回 ${moduleNamesForContent[parent]}</button><button data-open="${next || parent}">下一个档案 →</button></footer>
    </article>`;
};

const WindowContent = {
    start: {
        title:'Start_Here · 90 秒认识我', width:820, height:580,
        content:() => `<div class="window-page">
            ${toolbar('桌面 › Start_Here')}
            <section class="start-console">
                <div class="start-user"><span class="alias-avatar" aria-hidden="true">D</span><div><span>欢迎来到我的作品网站</span><h2>我是狗鱼，也可以叫我 doish。</h2><p>我做 AI 产品和交互设计，也用生成式工具创作视觉作品。你可以先看下面三个代表项目，再按兴趣打开其他文件夹；简历和联系方式也可以直接查看。</p></div></div>
                <div class="start-folders" aria-label="四个作品分类">
                    <button data-open="product"><img src="assets/images/icons/128/product.png" alt=""><b>Product_Lab</b><small>AI 产品：需求、方案与效果</small></button>
                    <button data-open="ui"><img src="assets/images/icons/128/ui.png" alt=""><b>UI_Studio</b><small>交互设计：研究、流程与界面</small></button>
                    <button data-open="ai"><img src="assets/images/icons/128/ai.png" alt=""><b>AI_Gallery</b><small>AI 图像：生成过程与视觉作品</small></button>
                    <button data-open="art"><img src="assets/images/icons/128/art.png" alt=""><b>Art_Corner</b><small>个人创作：手绘、摄影与记忆</small></button>
                </div>
            </section>
            <div class="page-scroll">
                <div class="section-head"><div><span class="section-number">↳</span><h3>从这三个项目开始</h3></div><small>分别展示 AI 产品、创作工具与交互设计</small></div>
                <div class="project-grid">
                    ${projectCard('01 / 腾讯 CSIG · AI-PPT 产品系统','围绕 AI 制作幻灯片的质量评估、图片生成和编辑体验，梳理完整产品流程。',['AI 产品','质量评估','编辑体验'],'case-product-internship','assets/images/cases/product-eval.webp')}
                    ${projectCard('02 / Stable Diffusion 提示词助手','根据 1000 多份用户反馈设计创作工具；上线后有超过 1.5 万人使用。',['创作工具','用户反馈','上线结果'],'case-product-agent','assets/images/cases/product-agent.webp')}
                    ${projectCard('03 / 消防移动指挥平台','通过访谈和问卷找到操作阻碍，重新设计任务流程；任务完成效率提升 40%。',['用户研究','流程设计','项目结果'],'case-ui-agent','assets/images/cases/ui-agent.webp')}
                </div>
                <div class="start-hint"><img src="assets/images/icons/128/memory.png" alt=""><p><b>可以自由浏览。</b><br>点击桌面的图标打开分类，或用下方按钮查看个人简介、简历和联系方式。</p></div>
                <div class="cta-row">${openButton('product','进入 Product_Lab',true)}${openButton('about','打开 About_Me.txt')}${openButton('resume','原始简历 PDF')}${openButton('contact','联系我')}</div>
            </div>
        </div>`
    },

    ai: {
        title:'AI_Gallery · 生成系统档案', width:790, height:555,
        content:() => modulePage({path:'库 › AI_Gallery',title:'AI_Gallery',intro:'不只是生成漂亮图片，也记录从训练、资产生成到完整运营视觉的过程。',folders:['公开项目','视觉系统','角色与风格','场景叙事','失败样本'],active:'公开项目',content:`
            <div class="photo-grid">
                <button class="media-card" data-open="case-ai-yone"><img src="assets/images/zcool/yone-lora/01.webp" alt="永恩 LoRA 训练记录封面"><h3>永恩 LoRA 训练记录</h3><p>目标 → 素材处理 → 标签 → 参数 → 产图实验 → 调整</p><span>打开 12 张完整图组 →</span></button>
                <button class="media-card" data-open="case-ui-hierarchy"><img src="assets/images/zcool/hakimi-island/01.webp" alt="哈基米幻想岛封面"><h3>哈基米幻想岛</h3><p>AIGC 资产、游戏机制、活动建筑与运营海报。</p><span>打开 16 张完整图组 →</span></button>
                <button class="media-card" data-open="case-ai-summer"><img src="assets/images/dreamcore/memory-pool.png" alt="明亮室内泳池的梦核视觉实验"><h3>把“梦一样的夏天”拆成变量</h3><p>目标 → 情绪 → 场景 → 光线 → 异常度 → 评价标准</p><span>打开实验档案 →</span></button>
                <button class="media-card" data-open="case-ai-system"><img src="assets/images/cases/ai-system.webp" alt="三组一致视觉语言的梦核场景"><h3>同一视觉语言的跨场景实验</h3><p>控制天空、材质与年代感，而不是依赖风格关键词。</p><span>打开实验档案 →</span></button>
                <button class="media-card" data-open="case-ai-kv"><img src="assets/images/dreamcore/summer-desktop-clean.png" alt="蓝天草坡与泳池的夏日梦核壁纸"><h3>从一句描述到完整桌面 KV</h3><p>为桌面图标、任务栏和窗口保留真实可用的负空间。</p><span>打开实验档案 →</span></button>
            </div>
            <div class="section-head"><h3>从公开作品到网站实验</h3><small>全部保持在 AI_Gallery 分类内</small></div>
            <div class="capability-grid"><div class="capability-card"><b>原始需求</b><small>最初的模糊意图是什么？</small></div><div class="capability-card"><b>控制变量</b><small>哪些 Prompt 与参数真正影响结果？</small></div><div class="capability-card"><b>失败与修正</b><small>怎样把偶然的好图变成稳定方法？</small></div></div>`})
    },

    ui: {
        title:'UI_Studio · 交互设计档案', width:800, height:550,
        content:() => modulePage({path:'库 › UI_Studio',title:'UI_Studio',intro:'站酷公开项目已经按原始发布顺序归档；每个文件都可以查看完整过程图。',folders:['站酷公开作品','服务设计','B 端系统','移动应用','HMI','履历项目'],active:'站酷公开作品',content:`
            <div class="project-grid ui-feature-grid">
                ${projectCard('01 / 2024–2025 UI 作品集','招聘管理系统与水乡行 APP 的年度整合档案，完整收录 65 张过程与界面图。',['年度合集','B 端 + APP','65P'],'case-ui-portfolio','assets/images/zcool/ui-portfolio/01.webp')}
            </div>
            <div class="project-grid ui-project-index">
                ${projectCard('02 / 运动周服务设计','从用户调研、旅程图、服务蓝图到移动端方案的完整服务设计项目。',['服务设计','UI / UX','22P'],'case-ui-defaults','assets/images/zcool/sports-week/01.webp')}
                ${projectCard('03 / 校内知推招聘系统','面向招聘业务的信息架构、候选人管理、数据看板与 AI 招聘模块。',['B 端系统','AI 功能','19P'],'case-ui-recruitment','assets/images/zcool/recruitment-system/01.webp')}
                ${projectCard('04 / 水乡行旅游 APP','覆盖景点、路线、预订、天气、消息与游记的完整移动旅游体验。',['移动应用','旅游服务','23P'],'case-ui-water','assets/images/zcool/water-town/01.webp')}
                ${projectCard('05 / 无界风息 HMI','从概念、情绪板、视觉规范到仪表、地图与车辆控制的车载长图。',['HMI','车载交互','长图'],'case-ui-hmi','assets/images/zcool/hmi-wind/01.webp')}
            </div>
            <div class="section-head"><h3>履历中的其他项目</h3><small>没有站酷图组，保留为结构化项目档案</small></div>
            <div class="project-grid single-project-row">${projectCard('消防移动指挥平台','围绕 3 类角色完成 8 次访谈与 60+ 份问卷，重构任务流与跨端协同。',['To G','用户研究','交互设计'],'case-ui-agent','assets/images/cases/ui-agent.webp')}</div>`})
    },

    product: {
        title:'Product_Lab · AI 产品研究', width:850, height:590,
        content:() => modulePage({path:'库 › Product_Lab',title:'Product_Lab',intro:'我更关心 AI 在真实任务中为什么失效，以及怎样把偶然的好结果变成稳定能力。',folders:['AI Agent','意图识别','提示词工程','评价体系','产品复盘','思考碎片'],active:'AI Agent',content:`
            <div class="project-grid">
                ${projectCard('Stable Diffusion 提示词助手 Agent','基于 1000+ 用户反馈定义差异化定位，灰度测试后在线使用 1.5w+。',['Agent','Prompt','MVP'],'case-product-agent','assets/images/cases/product-agent.webp')}
                ${projectCard('都市脑洞短剧脚本 Agent','以链式 Prompt 与 26 项可调参数，将剧本可用率从不足 10% 提升至 90%+。',['内容 Agent','参数化','业务增长'],'case-product-intent','assets/images/cases/product-intent.webp')}
                ${projectCard('腾讯 CSIG · AI-PPT 产品系统','一个可滚动深入的项目走廊：评测体系、开物生成与编辑、Tencent-PPTX Skill。',['Evaluation','AI-PPT','Agent Skill'],'case-product-internship','assets/images/cases/product-eval.webp')}
            </div>
            <div class="section-head"><h3>系统内核 / 项目拆解方式</h3><small>所有结论均对应简历中的真实经历与结果</small></div>
            <div class="capability-grid"><div class="capability-card"><b>问题与场景</b><small>用户是谁，AI 在哪里失效。</small></div><div class="capability-card"><b>系统与实验</b><small>Prompt / Tool / Memory / 指标。</small></div><div class="capability-card"><b>判断与反思</b><small>哪些结论可迁移，哪些仍然未知。</small></div></div>
            <div class="cta-row">${openButton('terminal','运行一次 Agent 决策演示',true)}</div>`})
    },

    art: {
        title:'Art_Corner · 私人图像档案', width:780, height:550,
        content:() => modulePage({path:'图片 › Art_Corner',title:'Art_Corner',intro:'在产品、界面和模型之外，我仍然用画面保存一些无法被指标描述的东西。',folders:['手绘','摄影','拼贴','像素实验','未完成'],active:'摄影',content:`
            <div class="photo-grid">
                <button class="photo-tile" data-open="case-art-summer" style="--tilt:-.7deg"><img src="assets/images/cases/art-contact-sheet.webp" alt="私人硬盘中的手绘、摄影、拼贴和像素实验"><span>MY_ARCHIVE.JPG · 一些只负责被记住的画面。</span></button>
                <button class="photo-tile" data-open="memory" style="--tilt:.8deg"><img src="assets/images/dreamcore/memory-pool.png" alt="室内泳池"><span>POOL_2009.JPG · 小时候以为夏天永远不会结束。</span></button>
                <button class="photo-tile" data-open="case-art-summer" style="--tilt:-.2deg"><img src="assets/images/dreamcore/summer-desktop-clean.png" alt="蓝天草坡与透明球构成的夏日视觉"><span>UNTITLED.PNG · 云像一张还没加载完的网页。</span></button>
            </div>
            <div class="section-head"><h3>私人图像分类</h3><small>手绘 / 摄影 / 拼贴 / 像素实验</small></div>`})
    },

    about: {
        title:'About_Me.txt - 记事本', width:610, height:525,
        content:() => `<article class="about-notepad"><div class="notepad-paper"><header><span class="alias-avatar" aria-hidden="true">D</span><div><span>ABOUT_ME.TXT</span><h2>狗鱼 <small>/ doish</small></h2><small>AI 产品 · 交互设计 · 视觉创作</small></div></header><p>我学习交互产品设计，也在实际项目中做 AI 产品。这个网站把我的项目、简历和联系方式整理成一台可以探索的电脑。</p><blockquote>我通常先弄清用户遇到什么问题，再设计流程和工具，最后用测试和反馈判断方案是否有效。</blockquote><p>在 AI-PPT、AI 写作和创作工具项目中，我参与需求梳理、交互设计与效果评估；在个人创作中，我尝试把生成技术和视觉表达结合起来。</p><p>如果你想先了解经历，可以打开简历；想看具体做法，可以从产品或交互项目开始。</p><div class="notepad-links"><button data-open="product">看 AI 产品项目</button><button data-open="ui">看交互设计项目</button><button data-open="resume">查看简历</button><button data-open="contact">联系我</button></div></div></article>`
    },

    contact: {
        title:'Contact_Me · 建立连接', width:560, height:430,
        content:() => `<section class="contact-card"><div class="contact-avatar alias-avatar" aria-hidden="true">D</div><div><span class="online">● 公开联系入口</span><h2>联系狗鱼</h2><p>想交流 AI 产品、交互设计或视觉创作，欢迎通过下面的方式联系我。点击即可复制。</p><div class="contact-actions"><button data-copy="1791083690@qq.com" data-copy-label="邮箱"><img src="assets/images/icons/128/contact.png" alt=""><span>复制邮箱 <small>1791083690@qq.com</small></span></button><button data-copy="z17720532551" data-copy-label="微信号"><img src="assets/images/icons/128/memory.png" alt=""><span>复制微信 <small>z17720532551</small></span></button><button data-copy="17720532551" data-copy-label="电话"><img src="assets/images/icons/128/terminal.png" alt=""><span>复制电话 <small>17720532551</small></span></button><a href="assets/documents/doish-resume.pdf" target="_blank" rel="noreferrer"><img src="assets/images/icons/128/resume.png" alt=""><span>打开简历 <small>PDF 文件</small></span></a></div></div></section>`
    },

    resume: {
        title:'我的简历 · doish', width:760, height:620,
        content:() => `<div class="window-page resume-viewer">${toolbar('公开文档 › 我的简历')}<div class="pdf-viewer-bar"><span><i></i>向下滚动预览；字小可打开 PDF 放大</span><div><a href="assets/documents/doish-resume.pdf" target="_blank" rel="noreferrer">打开 PDF</a><a href="assets/documents/doish-resume.pdf" download="doish-resume.pdf">下载 PDF</a></div></div><a class="pdf-sheet" href="assets/documents/doish-resume.pdf" target="_blank" rel="noreferrer" aria-label="打开狗鱼的简历 PDF"><img src="assets/images/public-resume/doish-resume-long.png" alt="狗鱼的完整简历，包括教育、实习、项目和能力信息" loading="lazy"><span>点击打开 PDF</span></a></div>`
    },

    memory: {
        title:'Memory_Pool · 夏日存档', width:800, height:520,
        content:() => `<section class="memory-view"><img src="assets/images/dreamcore/memory-pool.png" alt="千禧年记忆中的明亮室内泳池"><div class="memory-copy"><span class="page-kicker">FOUND PHOTO / 2009.08.16</span><h2>你以前来过这里吗？</h2><blockquote>小时候我以为未来会变得非常科幻。后来发现，未来仍然由按钮、文字、犹豫和人的感受组成。</blockquote><p>所以我想继续做那些既聪明，又有人味的产品。</p><button class="soft-button sun" data-memory-mode>把这段记忆设为桌面状态</button></div></section>`
    },

    trash: {
        title:'回收站 · 没有被选中的可能性', width:620, height:460,
        content:() => `<div class="window-page">${toolbar('桌面 › 回收站')}<div class="trash-files">
            <div class="trash-file"><img src="assets/images/cases/recovered-homepage.webp" alt="被否决的首页缩略图"><div><b>被否决的首页_03.fig</b><small>太像模板了，所以没有上线。</small></div><button data-restore="被否决的首页">还原</button></div>
            <div class="trash-file"><img src="assets/images/cases/recovered-prompt.webp" alt="失败的提示词样本缩略图"><div><b>失败的提示词_17.txt</b><small>生成结果很好看，但完全无法复现。</small></div><button data-restore="失败的提示词">还原</button></div>
            <div class="trash-file"><img src="assets/images/cases/recovered-copy.webp" alt="按钮文案对比缩略图"><div><b>差点上线的按钮文案.doc</b><small>清楚，但没有一点人的语气。</small></div><button data-restore="按钮文案">还原</button></div>
            <div class="trash-file"><img src="assets/images/cases/recovered-future.webp" alt="写给未来的信缩略图"><div><b>小时候想成为的人.txt</b><small>修改日期：2009/08/16</small></div><button data-restore="给未来的我">还原</button></div>
            <p class="folder-meta">4 个项目。这里保存着没有被选中的可能性。</p>
        </div></div>`
    },

    terminal: {
        title:'Logic_Terminal.exe · AI 决策演示', width:720, height:470,
        content:() => `<section class="terminal"><header class="terminal-visual"><img src="assets/images/icons/128/terminal.png" alt="Logic Terminal"><div class="terminal-map"><i></i><i></i><i></i><i></i><span></span></div><div><b>LOGIC CORE</b><small>intent → route → evaluate</small></div></header><div class="terminal-output">DOISH LOGIC TERMINAL [Version 1.0]\n这里保存着一些不能只用图片展示的东西。\n输入 help 查看命令。\n\n</div><form class="terminal-form"><label>C:\\Users\\doish&gt;</label><input autocomplete="off" spellcheck="false" aria-label="终端命令"><button class="terminal-run" type="submit" aria-label="执行终端命令">RUN</button></form><div class="terminal-hint">可用命令：help / whoami / projects / agent / evaluate / memory / contact / clear</div></section>`,
        onOpen: win => initializeTerminal(win)
    }
};

Object.assign(WindowContent, {
    'case-product-agent': {title:'CASE 01 · Stable Diffusion 提示词助手',icon:'product',width:820,height:590,content:()=>casePage({code:'P-01',title:'把提示词工程变成普通创作者也能使用的 Agent',claim:'从 20+ 深访与 1000+ 份问卷出发，用一周完成 MVP，并在灰度测试中持续调整任务链路。',role:'产品规划 / Agent 与 Prompt 设计',problem:'Stable Diffusion 社区普遍存在提示词构建耗时、创意枯竭和工具门槛高的问题。',process:'定义三个核心场景，组织 100+ 用户灰度测试并收集 150+ 有效反馈；扩充 Agent 指令 Prompt，并将复杂能力拆为更轻的前端工具。',outcome:'在线版使用人数 1.5w+、本地版下载 6000+；任务成功率提升 25%，平均出图效率提升约 50%，降低门槛后本地下载量增加 200%。',parent:'product',previous:'case-product-eval',next:'case-product-intent',image:'assets/images/cases/product-agent.webp',visual:'agent',accent:'green'})},
    'case-product-intent': {title:'CASE 02 · 都市脑洞短剧脚本 Agent',icon:'product',width:820,height:590,content:()=>casePage({code:'P-02',title:'把短剧创作方法拆成可调控的内容 Agent',claim:'以爆款短剧知识库、链式 Prompt 与参数化控制，连接市场趋势、编导经验和业务产能。',role:'AIGC 策略 / 产品设计',problem:'人工撰写效率低，底模生成内容可用率不足 10%，业务方也难以控制题材、节奏与分镜输出。',process:'量化拆解市场爆款并建立知识库；设计结构化链式 Prompt、身份逻辑与功能自查；将 4 个环节拆成 26 项可调参数，并进行 5 轮市场适配。',outcome:'剧本可用率提升至 90%+，单集人力成本降低 60%，产稿效率提升 80%；支撑单部流水 60w+、项目季度 ROI 150%。',parent:'product',previous:'case-product-agent',next:'case-product-eval',image:'assets/images/cases/product-intent.webp',visual:'router',accent:'green'})},
    'case-product-eval': {title:'CASE 03 · 腾讯文档 AI-PPT 评价与编辑',icon:'product',width:820,height:590,content:()=>casePage({code:'P-03',title:'为 AI-PPT 建立可评测、可编辑的产品闭环',claim:'不只判断生成结果好不好，还要把问题定位到评测维度、生成逻辑与编辑体验。',role:'AI 产品策划 / Evaluation / 编辑器',problem:'AI-PPT 生成质量缺少客观基准，生图结果、结构逻辑与后续编辑之间也存在断裂。',process:'将 PPT 可用性拆为 4 类 31 个维度，以日均 100+ PPT 进行 4 轮验证；参与生图型 AI-PPT、模型切换、文本可编辑、预览调整与 AI 原生编辑器设计。',outcome:'形成可用于迭代的客观评测数据，并逐步拓宽生成效果边界；同时参与生产 Skill 的 DESIGN.md、STROY.md 与多模型视觉调优。',parent:'product',previous:'case-product-intent',next:'case-product-agent',image:'assets/images/cases/product-eval.webp',visual:'evaluation',accent:'green'})},
    'case-ui-agent': {title:'UI CASE · 消防移动指挥平台',icon:'ui',width:820,height:590,content:()=>casePage({code:'UI-R01',title:'用真实岗位研究重构 To G 消防协同体验',claim:'围绕政府消防部门与地方社区的联勤任务，将访谈、问卷和行为数据转化为核心流程。',role:'用户研究 / 产品与界面设计',problem:'不同岗位协作链路分散，首页与关键功能无法覆盖地方消防的真实联勤需求。',process:'完成 3 类岗位、8 位用户半结构化访谈与 60+ 份问卷；通过两轮 A/B 测试优化 3 个关键回退节点，并建立 Figma 组件库与交互规范。',outcome:'核心任务完成效率提升 40%，系统可用性提升 35%，设计沟通效率提升 20%，前端返工率降低约 50%。',parent:'ui',previous:'case-ui-hmi',next:'case-ui-portfolio',image:'assets/images/cases/ui-agent.webp',visual:'wizard'})},
    'case-ui-portfolio': {title:'UI PUBLISHED · 2024–2025 作品集',icon:'ui',width:900,height:640,content:()=>zcoolCasePage({code:'UI-Z01',title:'2024–2025 UI 作品集',summary:'整合校内知推招聘管理系统与水乡行旅游 APP，展示 B 端与移动端两类界面方法。',role:'UI / UX · 综合作品集',slug:'ui-portfolio',count:65,source:'https://www.zcool.com.cn/work/ZNzI1NjczNDg=.html',parent:'ui',previous:'case-ui-agent',next:'case-ui-defaults'})},
    'case-ui-defaults': {title:'UI PUBLISHED · 运动周服务设计',icon:'ui',width:900,height:640,content:()=>zcoolCasePage({code:'UI-Z02',title:'运动周 · 周边体育设施服务设计',summary:'从高校学生的找场地、预约、导航与社交痛点出发，完成调研、用户旅程、功能架构和移动端界面。',role:'服务设计 / UI / UX',slug:'sports-week',count:22,source:'https://www.zcool.com.cn/work/ZNzI3MTQ0MDg=.html',parent:'ui',previous:'case-ui-portfolio',next:'case-ui-recruitment'})},
    'case-ui-recruitment': {title:'UI PUBLISHED · 校内知推招聘系统',icon:'ui',width:900,height:640,content:()=>zcoolCasePage({code:'UI-Z03',title:'校内知推招聘管理系统',summary:'面向企业招聘业务，将简历、职位、人才库、流程跟进、数据分析与 AI 招聘能力组织进统一 B 端工作台。',role:'B 端产品 / 界面设计',slug:'recruitment-system',count:19,source:'https://www.zcool.com.cn/work/ZNzE4MTg0NTY=.html',parent:'ui',previous:'case-ui-defaults',next:'case-ui-water'})},
    'case-ui-water': {title:'UI PUBLISHED · 水乡行旅游 APP',icon:'ui',width:900,height:640,content:()=>zcoolCasePage({code:'UI-Z04',title:'水乡行 · 旅游 APP 界面设计',summary:'围绕江浙水乡的景点、路线、预订、天气、消息与游记内容，建立一站式移动旅游体验。',role:'移动应用 / UI / UX',slug:'water-town',count:23,source:'https://www.zcool.com.cn/work/ZNzE4MTc3ODQ=.html',parent:'ui',previous:'case-ui-recruitment',next:'case-ui-hmi'})},
    'case-ui-hmi': {title:'UI PUBLISHED · 无界风息 HMI',icon:'ui',width:900,height:640,content:()=>zcoolCasePage({code:'UI-Z05',title:'无界风息 HMI 车载练习设计',summary:'从概念关键词、情绪板、视觉规范到仪表、地图、媒体、车辆控制等车载界面的完整长图设计。',role:'HMI / 车载交互练习',slug:'hmi-wind',count:1,source:'https://www.zcool.com.cn/work/ZNzA0MjM3ODA=.html',parent:'ui',previous:'case-ui-water',next:'case-ui-agent'})},
    'case-ai-yone': {title:'AI PUBLISHED · 永恩 LoRA 训练',icon:'ai',width:900,height:640,content:()=>zcoolCasePage({code:'AI-Z01',title:'英雄联盟永恩 · LoRA 训练记录',summary:'完整记录目标定义、素材处理、DeepBooru 标签、参数设置、产图实验与后续调整，形成可复用的角色资产流程。',role:'LoRA 训练 / AIGC 资产',slug:'yone-lora',count:12,source:'https://www.zcool.com.cn/work/ZNzE4MTg0OTI=.html',parent:'ai',previous:'case-ai-kv',next:'case-ui-hierarchy'})},
    'case-ui-hierarchy': {title:'AI PUBLISHED · 哈基米幻想岛',icon:'ai',width:900,height:640,content:()=>zcoolCasePage({code:'AI-Z02',title:'哈基米幻想岛 · AIGC 游戏化运营设计',summary:'把 AI 生成的角色、建筑和视觉资产接入登录、升级、PK、奖励与运营海报，构成完整游戏化活动体验。',role:'AIGC 视觉 / 游戏化运营',slug:'hakimi-island',count:16,source:'https://www.zcool.com.cn/work/ZNzE4MTg0Njg=.html',parent:'ai',previous:'case-ai-yone',next:'case-ai-summer'})},
    'case-ai-summer': {title:'AI CASE 01 · 梦一样的夏天',icon:'ai',width:850,height:610,content:()=>casePage({code:'AI-01',title:'把“梦一样的夏天”拆成可控制变量',claim:'梦核不是一个关键词，而是一组可调整的空间、光线、年代与异常度。',role:'视觉策略 / Prompt 系统',problem:'只写“dreamcore”会得到风格化但不可控、甚至偏恐怖的随机结果。',process:'把目标拆成场景熟悉度、日光强度、色彩记忆、异常物体数量和恐怖阈值，并逐轮评价。',outcome:'得到温暖、安全、可复用的梦核语言，并实际用于本网站桌面与图标。',parent:'ai',previous:'case-ui-hierarchy',next:'case-ai-system',image:'assets/images/dreamcore/memory-pool.png',visual:'prompt',accent:'peach'})},
    'case-ai-system': {title:'AI CASE 02 · 跨场景视觉系统',icon:'ai',width:820,height:590,content:()=>casePage({code:'AI-02',title:'同一视觉语言的跨场景实验',claim:'控制天空、材质、年代感和异常度，而不是反复复制同一句风格词。',role:'视觉系统 / 变量设计',problem:'单张图片漂亮并不代表可以形成统一系列。',process:'锁定色板、光线、镜头与材质变量，再改变地点和叙事情境测试一致性。',outcome:'形成可迁移到壁纸、项目封面、图标和窗口反馈的共同美术语法。',parent:'ai',previous:'case-ai-summer',next:'case-ai-kv',image:'assets/images/cases/ai-system.webp',visual:'series',accent:'peach'})},
    'case-ai-kv': {title:'AI CASE 03 · 桌面 KV',icon:'ai',width:850,height:610,content:()=>casePage({code:'AI-03',title:'从一句描述到完整桌面 KV',claim:'图像不仅要表达情绪，还必须为图标、窗口和任务栏服务。',role:'AI 生图 / 使用场景控制',problem:'普通壁纸忽略真实 UI 覆盖后，常把高对比主体放在图标与文字区域。',process:'提前定义低细节区、地平线、焦点位置和任务栏安全区，再生成并回到界面验证。',outcome:'最终壁纸拥有明确负空间，同时保留泳池、气球和云层的记忆锚点。',parent:'ai',previous:'case-ai-system',next:'case-ai-yone',image:'assets/images/dreamcore/summer-desktop-clean.png',visual:'kv',accent:'peach'})},
    'case-art-summer': {title:'ART FILE · 夏日存档',icon:'art',width:850,height:610,content:()=>casePage({code:'ART-01',title:'那天的云像一张还没加载完的网页',claim:'有些画面不解决问题，只负责被记住。',role:'视觉叙事 / 私人档案',problem:'作品集如果只剩逻辑与结果，很难让人认识创作者真实的感受方式。',process:'保留低清数码照片、时间戳和一句短文本，让观看回到私人硬盘里的偶然发现。',outcome:'它成为严谨产品内容之外的一处呼吸，也构成网站的人格线索。',parent:'art',previous:'memory',next:'case-ai-summer',image:'assets/images/cases/art-contact-sheet.webp',visual:'art',accent:'peach'})},
    'restored-original': {title:'被否决的首页_03.fig',icon:'restored',width:620,height:500,content:()=>`<article class="notepad restored-note"><span class="comment">// RECOVERED DESIGN FILE</span><h2>为什么它被否决？</h2><div class="restored-proof rejected-proof"><img src="assets/images/cases/recovered-homepage.webp" alt="被红笔否决的通用首页线框"><span class="reject-mark">×</span><small>传统卡片首页 / 与个人身份缺少关系</small></div><p>它有完整的 Hero、卡片和导航，也足够“像一个作品集”。问题恰恰是：它太像任何人的作品集。</p><p>这次失败让我确认，形式必须解释“为什么是狗鱼”。</p><button class="soft-button" data-open="start"><span>查看现在的首页</span><i>→</i></button></article>`},
    'restored-prompt': {title:'失败的提示词_17.txt',icon:'restored',width:620,height:500,content:()=>`<article class="notepad restored-note"><span class="comment">// FAILED_PROMPT_17.txt</span><h2>漂亮，但无法复现。</h2><div class="restored-proof prompt-proof"><img src="assets/images/cases/recovered-prompt.webp" alt="带红色批注的失败生成联系表"><div class="variable-strips"><i></i><i></i><i></i><i></i></div><small>场景 / 光线 / 镜头 / 异常度必须被记录</small></div><p>失败原因：只描述了“感觉”，没有建立可控制的视觉变量。</p><button class="soft-button sun" data-open="case-ai-summer"><span>查看修正后的实验</span><i>→</i></button></article>`},
    'restored-copy': {title:'差点上线的按钮文案.doc',icon:'restored',width:620,height:540,content:()=>`<article class="notepad restored-note"><span class="comment">// BUTTON_COPY_FINAL_FINAL.doc</span><h2>清楚，但没有人的语气。</h2><div class="restored-proof"><img src="assets/images/cases/recovered-copy.webp" alt="冷漠按钮与温暖按钮的视觉对照"><small>同一个动作，也可以让人感到完全不同的交流温度</small></div><div class="copy-ab"><button>查看更多项目</button><span>→</span><button class="warm">如果你只有 90 秒<br><small>我已替你整理好重点</small></button></div><div class="tone-meter"><span>系统语言</span><i></i><span>人的语气</span></div><p>信息清晰不是终点。好的文案还需要让人感觉自己正在和谁交流。</p><button class="soft-button" data-open="start"><span>返回 90 秒总览</span><i>→</i></button></article>`},
    'restored-future': {title:'小时候想成为的人.txt',icon:'restored',width:620,height:500,content:()=>`<article class="notepad restored-note"><span class="comment">// LAST MODIFIED：2009/08/16</span><h2>给未来的我</h2><div class="future-letter"><img src="assets/images/cases/recovered-future.webp" alt="装着蜡笔画和旧电脑记忆的童年信封"><span>2009<br>08.16</span></div><p>小时候我以为未来会变得非常科幻。后来发现，未来仍然由按钮、文字、犹豫和人的感受组成。</p><p>所以我想继续做那些既聪明，又有人味的产品。</p><button class="soft-button sun" data-open="memory"><span>打开这段夏日存档</span><i>→</i></button></article>`}
});

function initializeTerminal(win) {
    const output = win.querySelector('.terminal-output');
    const form = win.querySelector('.terminal-form');
    const input = win.querySelector('.terminal-form input');
    const responses = {
        help:'help        查看全部命令\nwhoami      认识我\nprojects    查看代表项目\nagent       运行 Agent 决策演示\nevaluate    查看评价体系\nmemory      打开遗失的记忆\ncontact     建立连接\nclear       清空终端',
        whoami:'狗鱼 / doish / 交互产品设计 / AI 产品策划与 AIGC 策略\n经历：AI-PPT、AI 写作与原生编辑器；Agent 产品化；AIGC 视觉资产。',
        projects:'01  腾讯文档 AI-PPT 评价与编辑\n02  Stable Diffusion 提示词助手 Agent\n03  都市脑洞短剧脚本 Agent\n04  消防移动指挥平台',
        agent:'用户输入：帮我做一个有梦境感的个人网站\n\n  [用户气泡]\n       │\n       ▼\n  ◇ 目标识别 ── ◇ 情绪识别 ── ◇ 约束检查\n       │             │              │\n       └─────────────┼──────────────┘\n                     ▼\n      信息架构 → 视觉系统 → 交互原型 → 内容验证\n                     │\n             风险：氛围遮盖信息\n             处理：90 秒快捷路径\n\n任务规划完成。',
        evaluate:'AI EVALUATION MONITOR\n\n目标一致性  [████████░░]  锚点已定义\n事实完整性  [███████░░░]  等待真实素材\n可执行性    [█████████░]  路由已接通\n体验质量    [████████░░]  视觉证据补齐中\n\n模型评审 → 人工校准 → 误差复盘 ↺\n原则：好结果必须能够解释，也必须能够再次得到。',
        memory:'记忆档案已找到：Memory_Pool / 2009.08.16\n正在请求桌面打开……',
        contact:'连接入口已找到。正在请求打开 Contact_Me……'
    };
    const runCommand = () => {
        const command = input.value.trim().toLowerCase();
        if (!command) return;
        if (command === 'clear') output.textContent = '';
        else output.textContent += `C:\\Users\\doish> ${command}\n${responses[command] || `无法识别“${command}”。输入 help 查看命令。`}\n\n`;
        input.value = '';
        const scrollArea = win.querySelector('.window-body');
        scrollArea.scrollTop = scrollArea.scrollHeight;
        const routes = {projects:'start',agent:'case-product-agent',evaluate:'case-product-eval',memory:'memory',contact:'contact'};
        if (routes[command]) setTimeout(() => window.openModule?.(routes[command], input), 350);
    };
    form.addEventListener('submit', event => {
        event.preventDefault();
        runCommand();
    });
    input.addEventListener('keydown', event => {
        if (event.key !== 'Enter') return;
        event.preventDefault();
        runCommand();
    });
    input.focus();
}

window.WindowContent = WindowContent;
