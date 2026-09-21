const internshipScene = ({ id, step, project, title, lead, body, tone = 'blue' }) => `
    <article class="corridor-scene tone-${tone}" id="internship-${id}" data-corridor-scene="${id}">
        <div class="corridor-depth" aria-hidden="true"><span>${String(step).padStart(2, '0')}</span><i></i></div>
        <div class="corridor-scene-inner">
            <header class="corridor-scene-head">
                <span>${project}</span>
                <h2>${title}</h2>
                <p>${lead}</p>
            </header>
            ${body}
        </div>
    </article>`;

const internshipSceneLibrary = () => {
    const scenes = [
        internshipScene({
            id:'entry', step:0, project:'INTERNSHIP SYSTEM / ENTRY', tone:'sky',
            title:'这不是四份工作，而是一条逐渐闭合的 AI PPT 产品链',
            lead:'从“如何判断质量”开始，继续解决生成、编辑与规模化复用，最终让模型能力进入真实产品循环。',
            body:`<div class="corridor-project-chain">
                <section><b>01</b><span>定义什么是好</span><h3>AI PPT 评测体系</h3><p>标准、系统、Benchmark 与美学判断。</p></section>
                <i></i>
                <section><b>02</b><span>让结果可以交付</span><h3>开物生成与编辑</h3><p>图片 PPT、自然语言编辑与原生编辑器。</p></section>
                <i></i>
                <section><b>03</b><span>把方法交给 Agent</span><h3>Tencent-PPTX Skill</h3><p>Story、Design、Layout、门禁与 Factory。</p></section>
            </div>
            <div class="corridor-return-loop"><span>真实样本</span><i>→</i><span>评测与数据</span><i>→</i><span>问题定位</span><i>→</i><span>产品迭代</span><i>↺</i></div>
            <button class="corridor-enter" data-corridor-go="evaluation-start"><span>进入第一个问题</span><small>滚轮向下也可以继续</small><b>↓</b></button>`
        }),
        internshipScene({
            id:'evaluation-start', step:1, project:'PROJECT A / QUALITY SYSTEM', tone:'blue',
            title:'团队想知道开物在市场上处于什么位置，却没有共同的判断方式',
            lead:'不同成员主要依赖个人经验评价同一份 PPT；内容、视觉、文件和用户需求被混在一次讨论中。',
            body:`<div class="corridor-two-column">
                <section class="corridor-question-panel"><span>最初任务</span><blockquote>“我们想看看现在的开物 AI，在市场上到底是什么水平。”</blockquote><p>比较对象包括当时的主流 AI PPT 产品与不同模型方案。</p></section>
                <div class="corridor-problem-stack">
                    <section><b>01</b><div><h3>评价不可复现</h3><p>相同页面由不同人评价，会得到不同标准和结论。</p></div></section>
                    <section><b>02</b><div><h3>总分不可解释</h3><p>即使得到分数，也无法知道问题来自内容、视觉还是文件。</p></div></section>
                    <section><b>03</b><div><h3>结论无法驱动迭代</h3><p>“好看 / 不好看”不能直接转成模型与产品的下一步动作。</p></div></section>
                </div>
            </div>
            <div class="corridor-delivery-strip"><b>项目目标</b><span>可交付判断</span><span>问题定位</span><span>竞品与模型比较</span><span>下一轮迭代方向</span></div>`
        }),
        internshipScene({
            id:'evaluation-failure', step:2, project:'PROJECT A / FIRST FAILURE', tone:'indigo',
            title:'第一版的反直觉结果：专业知识越多，评测仍然会漂移',
            lead:'对同一份 PPT 进行多轮测试后，模型每次关注角度、扣分理由和维度权重仍然不同。',
            body:`<div class="corridor-failure-layout">
                <div class="corridor-test-runs">
                    <section><span>RUN 01</span><b>内容结构</b><p>重点检查信息完整性与章节逻辑。</p></section>
                    <section><span>RUN 02</span><b>视觉规范</b><p>转而关注对齐、层级、留白和构图。</p></section>
                    <section><span>RUN 03</span><b>事实 / 文件</b><p>又把注意力放在事实与硬错误上。</p></section>
                </div>
                <aside class="corridor-decision-card"><span>团队结论</span><h3>问题不是知识不足，而是任务边界过大。</h3><p>事实判断、审美判断和确定性检查互相干扰。下一步不再继续堆叠知识，而是重新拆解系统。</p></aside>
            </div>
            <div class="corridor-evidence-row"><div>待放：同一 PPT 的三轮真实评测截面</div><div>待放：第一版评测目标与维度表</div><div>待放：方法论复盘中的波动分析</div></div>`
        }),
        internshipScene({
            id:'evaluation-experiments', step:3, project:'PROJECT A / SIX EXPERIMENTS', tone:'blue',
            title:'六次单点实验逐渐定位问题，也证明提示词优化存在上限',
            lead:'每次改动都对应一个已观察到的失效点；它们提高了针对性，却无法彻底消除不同问题类型的相互干扰。',
            body:`<div class="corridor-experiment-grid">
                <section><b>01</b><h3>固定专业角色</h3><p>减少评价身份与语言风格漂移。</p></section>
                <section><b>02</b><h3>固定注意力顺序</h3><p>限制模型自行切换维度优先级。</p></section>
                <section><b>03</b><h3>引入格式塔原则</h3><p>识别文本排列、对齐和视觉组织问题。</p></section>
                <section><b>04</b><h3>增加信息权重</h3><p>检查正文重点是否与大纲重点一致。</p></section>
                <section><b>05</b><h3>统一栅格标准</h3><p>对齐生成与评测侧的间距、边距和单位。</p></section>
                <section><b>06</b><h3>用户 Query 优先</h3><p>先判断是否完成任务，再检查通用规范。</p></section>
            </div>
            <div class="corridor-turning-point"><span>BREAKPOINT</span><p>继续增加知识已经不能解决结构性问题：项目必须从“提示词优化”进入“评测架构重构”。</p></div>`
        }),
        internshipScene({
            id:'evaluation-system', step:4, project:'PROJECT A / ARCHITECTURE', tone:'cyan',
            title:'把一个总分拆成文本、视觉、文件三条可诊断质量链',
            lead:'问题性质不同，判断方法也必须不同；只有先定位问题来源，分数才具有产品价值。',
            body:`<div class="corridor-three-chains">
                <section><span>TEXT</span><h3>文本链｜先忠实，再表达</h3><ol><li>Query 与主题相关性</li><li>事实一致性</li><li>信息完整性</li><li>结构与叙事</li><li>受众与表达效率</li></ol></section>
                <section><span>VISUAL</span><h3>视觉链｜按阅读过程判断</h3><ol><li>能否看懂</li><li>阅读是否疲劳</li><li>构图与色彩是否成立</li><li>是否形成重点</li><li>是否产生记忆点</li></ol></section>
                <section><span>FILE</span><h3>文件链｜规则处理硬错误</h3><ol><li>能否打开</li><li>页数与格式</li><li>元素越界</li><li>字体与基础规范</li><li>确定性检查结果</li></ol></section>
            </div>
            <div class="corridor-output-rail"><span>维度分数</span><i>→</i><span>证据定位</span><i>→</i><span>修改建议</span><i>→</i><span>版本复测</span></div>`
        }),
        internshipScene({
            id:'evaluation-aesthetic', step:5, project:'PROJECT A / AESTHETIC BRANCH', tone:'violet',
            title:'基础评测守住“可用”，美学分支继续判断“是否真正完成目标风格”',
            lead:'美学不是把主观感觉包装成分数，而是把所有风格都应满足的底座，与目标风格的差异化表达分开。',
            body:`<div class="corridor-aesthetic-split">
                <section><span>BASELINE</span><h3>底座层</h3><p>构图、色彩、对齐、层级、密度、可读性、负空间与视线动线。</p><div><i>基线偏差</i><i>边距离散</i><i>字号层级</i><i>对比度</i><i>色彩占比</i></div></section>
                <section><span>STYLE RECIPE</span><h3>风格层</h3><p>根据用户 Query 加载视觉关键词、表现描述、风格基因与权重；弱锚风格保留整体判断。</p><div><i>7 大流派</i><i>30 种细分风格</i><i>Y2K</i><i>酸性</i><i>新丑风</i></div></section>
            </div>
            <div class="corridor-result-loop"><b>真实样本</b><i>→</i><b>自动评测</b><i>→</i><b>问题定位</b><i>→</i><b>模型 / 产品调整</b><i>→</i><b>Benchmark 复测</b></div>
            <div class="corridor-evidence-row four"><div>框架对照</div><div>真实报告</div><div>Benchmark</div><div>TDQA / EvalMate</div></div>`
        }),
        internshipScene({
            id:'image-route', step:6, project:'PROJECT B / ROUTE DECISION', tone:'amber',
            title:'图片模型可以突破视觉上限，但必须同时解决一致性、速度和编辑性',
            lead:'项目不是押注某个当前模型，而是先搭建可运行、可替换模型、可局部返工的产品基建。',
            body:`<div class="corridor-route-compare">
                <section><span>CODE / STRUCTURED</span><h3>稳定、可编辑</h3><b>优势</b><p>速度快，模板与结构可控。</p><b>短板</b><p>复杂图文融合、定制视觉与风格自由度受限。</p></section>
                <div class="corridor-versus">VS</div>
                <section><span>IMAGE MODEL</span><h3>视觉上限更高</h3><b>优势</b><p>风格自由，视觉表现更强。</p><b>短板</b><p>文字难修改、跨页一致性与生成耗时需要产品解决。</p></section>
            </div>
            <div class="corridor-three-goals"><section><b>01</b><h3>完成生成</h3><p>主题输入到 PPT 文件交付。</p></section><section><b>02</b><h3>支持修改</h3><p>自然语言定位页面与对象。</p></section><section><b>03</b><h3>进入协作</h3><p>接入可编辑、可回溯的原生编辑器。</p></section></div>`
        }),
        internshipScene({
            id:'image-pipeline', step:7, project:'PROJECT B / ALPHA PIPELINE', tone:'orange',
            title:'图片 PPT Alpha 将一次生成拆成八个可追踪、可替换、可返工的环节',
            lead:'每个环节都有明确输入、中间产物与验收方式，模型升级不会迫使产品重做整条链路。',
            body:`<div class="corridor-pipeline">
                <section><b>01</b><span>主题输入</span><small>用途 / 受众 / 页数</small></section><i>›</i>
                <section><b>02</b><span>意图解析</span><small>场景 / 风格 / 重点</small></section><i>›</i>
                <section><b>03</b><span>资料检索</span><small>事实清单</small></section><i>›</i>
                <section><b>04</b><span>大纲分镜</span><small>逐页叙事任务</small></section><i>›</i>
                <section><b>05</b><span>Prompt 编译</span><small>页级 Prompt IR</small></section><i>›</i>
                <section><b>06</b><span>批量生成</span><small>锚点页 / 多页图片</small></section><i>›</i>
                <section><b>07</b><span>PPT 组装</span><small>文件 / 资产映射</small></section><i>›</i>
                <section><b>08</b><span>局部迭代</span><small>失败页定向返工</small></section>
            </div>
            <div class="corridor-artifact-grid"><div>结构化需求<br>+ 事实清单</div><div>逐页叙事任务<br>+ 锚点页</div><div>Prompt IR<br>+ 页面图片</div><div>PPTX<br>+ 版本资产</div></div>
            <div class="corridor-note"><b>职责边界</b><p>产品方案、生成链路、模板、提示词、交互与验收由我负责；模型服务和大仓工程实现由研发完成。</p></div>`
        }),
        internshipScene({
            id:'editing', step:8, project:'PROJECT B / EDITING', tone:'peach',
            title:'从自然语言编辑到原生编辑器，补齐生成后的最后一步',
            lead:'一次生成很难精确命中所有要求；用户必须知道改哪里、怎么改，以及改坏以后如何回退。',
            body:`<div class="corridor-editing-layout">
                <section class="corridor-natural-edit"><span>NATURAL LANGUAGE EDIT</span><h3>先解决“如何精确地说”</h3><div class="corridor-edit-types"><i>文本精修</i><i>视觉元素</i><i>整页转换</i><i>全篇重构</i></div><p>页码 + 位置 / 内容 + 修改方式 → 锁定目标对象 → 只修改目标范围 → 生成前后对比 → 快照与回退。</p></section>
                <section class="corridor-native-editor"><span>NATIVE EDITOR</span><h3>再解决“AI 与手动如何共用画布”</h3><div class="corridor-editor-map"><b>元素点击</b><b>区域框选</b><b>批注对话</b><b>任务历史</b><b>版本评论</b></div><p>简单问题直接手动修改，复杂问题交给 AI；二者共享文本、图片、图表、图形和页面对象。</p></section>
            </div>
            <div class="corridor-result-banner"><span>真实结果</span><p>核心能力均已实现，并在腾讯文档主端与 WorkBuddy 中复用，成为人机双写与现有 PPT 编辑能力的一部分。</p></div>`
        }),
        internshipScene({
            id:'data', step:9, project:'PROJECT B / DATA FEEDBACK', tone:'green',
            title:'数据不是埋点清单，而是把产品问题转化为可观察、可行动的证据',
            lead:'开物与 WorkBuddy 的数据体系都从问题出发反推指标，并进入团队可以持续查看的看板。',
            body:`<div class="corridor-data-flow"><section><b>01</b><h3>提出问题</h3><p>从哪里进入？生成是否完成？结果是否被编辑、导出或继续使用？</p></section><i>→</i><section><b>02</b><h3>反推指标</h3><p>拆成事件、属性、统计口径与观察周期。</p></section><i>→</i><section><b>03</b><h3>对齐实现</h3><p>参与埋点、看板、上线取舍与验收。</p></section><i>→</i><section><b>04</b><h3>进入动作</h3><p>调整模板呈现、功能顺序与产品表达。</p></section></div>
            <div class="corridor-data-evidence"><section><span>开物 AIPPT</span><h3>专项数据进入 DataTalk / 灯塔</h3><p>基础埋点 → 专项口径 → 长期看板 → 可视化分析汇报。</p><div>待放：真实灯塔看板</div></section><section><span>WorkBuddy AIPPT</span><h3>候选指标收敛为团队可用看板</h3><p>场景分析 → 指标拆解 → 合并取舍 → 实现对齐 → 验收。</p><div>待放：最终看板 / 导出证据</div></section></div>`
        }),
        internshipScene({
            id:'skill', step:10, project:'PROJECT C / AGENT SKILL', tone:'teal',
            title:'Agent 会生成文件，不等于能够稳定完成一份专业 PPT',
            lead:'为了接入 WorkBuddy，团队从零构建全新的 PPT Skill，把需求、叙事、设计、渲染与质检拆成可维护的专业流程。',
            body:`<div class="corridor-skill-problems"><span>生成质量不稳定</span><span>不同场景不会选风格</span><span>难以遵守 PPT 设计规律</span><span>失败难以归因</span><span>经验难以复刻</span></div>
            <div class="corridor-skill-flow"><b>需求澄清</b><i>→</i><b>场景路由</b><i>→</i><b>Story</b><i>→</i><b>Design</b><i>→</i><b>Layout</b><i>→</i><b>质量门禁</b><i>→</i><b>返工</b><i>→</i><b>导出</b></div>
            <div class="corridor-skill-tracks"><section><span>STORY</span><h3>讲什么，按什么顺序</h3><p>受众、背景、核心观点、章节、页面角色、叙事节拍和内容槽位。</p></section><section><span>DESIGN</span><h3>整套内容长什么样</h3><p>风格族、Visual Contract、字体色板、Pattern、模板和质量底线。</p></section><section><span>LAYOUT / RENDER</span><h3>如何落实为可编辑页面</h3><p>页面布局、渲染结果、检查报告和返工对象。</p></section></div>`
        }),
        internshipScene({
            id:'factory', step:11, project:'PROJECT C / DESIGN.MD FACTORY', tone:'mint',
            title:'Design.md Factory 让风格生产从专家手工调试变成团队可复刻流程',
            lead:'它把参考 PPT、设计基底、真实生成测试、问题归因与版本回归组织成一条固定生产线。',
            body:`<div class="corridor-factory-flow"><section><b>01</b><h3>提取风格</h3><p>参考 PPT → 风格 DNA、色板、字体与版式母题。</p></section><section><b>02</b><h3>融合基底</h3><p>替换风格常量，不破坏结构规范与质量护栏。</p></section><section><b>03</b><h3>生成测试</h3><p>候选 Design.md + 真实 Query → 测试 PPT。</p></section><section><b>04</b><h3>问题归因</h3><p>定位 Story、Design、Layout 或模型执行。</p></section><section><b>05</b><h3>版本收敛</h3><p>快照、回归、比较与回滚。</p></section></div>
            <div class="corridor-factory-bottom"><section><span>固定七节骨架</span><p>风格 DNA｜母版骨架｜色彩字体｜信息密度｜组件装饰｜子版式｜质量闸门</p></section><section><span>生产原则</span><p>先保证稳定版式，再追求美术表现；风格可以变化，结构规范和质量底线必须稳定。</p></section><section><span>真实落地</span><p>团队可以持续生产新的 Design.md；Skill 已进入 WorkBuddy“幻灯片”入口。</p></section></div>`
        }),
        internshipScene({
            id:'synthesis', step:12, project:'SYSTEM / SYNTHESIS', tone:'night',
            title:'三个项目最终沉淀的是同一种 AI 产品方法',
            lead:'不是让模型“多做一点”，而是把不稳定能力组织成可判断、可控制、可持续迭代的系统。',
            body:`<div class="corridor-method-grid"><section><b>01</b><h3>先定义质量，再定义功能</h3><p>没有共同标准，就无法判断模型是否进步。</p></section><section><b>02</b><h3>先区分问题，再选择解法</h3><p>事实、叙事、设计、版式与文件需要不同方法。</p></section><section><b>03</b><h3>用系统边界对抗不确定性</h3><p>对象、版本、门禁、重试和契约决定产品下限。</p></section><section><b>04</b><h3>成功 Demo 不等于产品成立</h3><p>真实样本、行为、反馈与复测共同验证价值。</p></section><section><b>05</b><h3>有效经验必须能够复用</h3><p>标准、PRD、Skill 与 Factory 把判断变成团队资产。</p></section></div>
            <div class="corridor-final-line"><span>模糊业务问题</span><i>→</i><span>可验证目标</span><i>→</i><span>模型与交互流程</span><i>→</i><span>指标与验收</span><i>→</i><span>团队资产</span></div>
            <div class="corridor-end-actions"><button data-corridor-go="entry">回到入口 ↑</button><button data-open="product">返回 Product_Lab</button><button data-open="contact">建立连接 ↗</button></div>`
        })
    ];

    return scenes;
};

const internshipProjects = {
    evaluation: {
        order:'01', file:'AI-PPT_质量评测体系.pptx', short:'质量评测体系', tone:'blue',
        title:'从“觉得好不好”，到一套可复现的 AI-PPT 质量系统',
        lead:'建立评测标准、定位第一版失败，并将文本、视觉与文件问题拆成可诊断的产品链路。',
        meta:'5 个流式节点 · 标准 / 实验 / Benchmark',
        art:'assets/images/internship-dreamcore/evaluation-system-v1.png',
        sceneIds:['evaluation-start','evaluation-failure','evaluation-experiments','evaluation-system','evaluation-aesthetic'],
        nav:['项目起点','第一版失败','六次实验','三链重构','美学分支'],
        evidence:['同一份 PPT 的多轮评测对比','评测维度与三链框架','Benchmark 与真实报告']
    },
    generation: {
        order:'02', file:'开物AIPPT_生成与编辑.pptx', short:'生成与编辑', tone:'amber',
        title:'让生图模型真正进入 PPT 生产与编辑流程',
        lead:'从技术路线判断、Alpha 生成链路，一直到自然语言编辑和原生编辑器。',
        meta:'3 个流式节点 · 路线 / 生成 / 编辑',
        art:'assets/images/internship-dreamcore/generation-editing-v1.png',
        sceneIds:['image-route','image-pipeline','editing'],
        nav:['路线决策','Alpha 生成链','生成后编辑'],
        evidence:['生图 PPT 产品方案','八段生成链路与中间产物','编辑前后对比与产品落地']
    },
    data: {
        order:'03', file:'AIPPT_数据体系.xlsx', short:'数据体系', tone:'green',
        title:'把产品问题变成可观察、可对齐、可行动的数据系统',
        lead:'从使用问题反推指标、埋点与统计口径，再进入团队可持续查看的看板与产品动作。',
        meta:'1 个核心节点 · 指标 / 看板 / 行动',
        art:'assets/images/internship-dreamcore/data-system-v1.png',
        sceneIds:['data'], nav:['数据反馈闭环'],
        evidence:['专项指标与埋点口径','看板结构与验收记录','数据推动的产品动作']
    },
    skill: {
        order:'04', file:'Tencent-PPTX_Skill.zip', short:'PPTX Skill', tone:'teal',
        title:'把 PPT 专业经验组织成 Agent 可维护、团队可复刻的生产系统',
        lead:'从 Story、Design、Layout 到质量门禁，再通过 Design.md Factory 把专家调试变成稳定流程。',
        meta:'3 个流式节点 · Skill / Factory / 方法',
        art:'assets/images/internship-dreamcore/pptx-skill-v1.png',
        sceneIds:['skill','factory','synthesis'],
        nav:['PPT Skill','Design.md Factory','方法沉淀'],
        evidence:['Skill 架构与专业流程','Design.md 生产与回归记录','真实场景与效果验收']
    }
};

const internshipToolbar = (path, canReturn = false) => `<div class="window-toolbar internship-toolbar">
    ${canReturn ? '<button class="nav-button back" data-internship-folder aria-label="返回实习文件夹"></button>' : '<button class="nav-button back" data-nav="back" aria-label="后退"></button>'}
    <button class="nav-button forward" disabled aria-label="前进"></button>
    <span class="crumb">${path}</span><span class="spacer"></span><span class="sync-status"><i></i>2009 / SUMMER ARCHIVE</span>
</div>`;

const internshipFolderPage = () => `<section class="internship-shell internship-folder-view">
    ${internshipToolbar('Product_Lab › AI-PPT Internship')}
    <main class="internship-folder">
        <header class="internship-folder-hero">
            <img src="assets/images/internship-dreamcore/internship-folder-room-v1.png" alt="旧式电脑与夏日梦核风景" loading="eager">
            <div class="folder-hero-copy"><span>MY COMPUTER / INTERNSHIP ARCHIVE</span><h2>AI-PPT 实习项目系统</h2><p>在这台千禧年电脑里，四份项目文件记录了一条逐步闭合的产品链。双击一份文件，用滚轮继续向里阅读。</p></div>
            <div class="folder-memory-stamp" aria-hidden="true"><b>4 FILES</b><span>PRIVATE MEMORY<br>PUBLIC PREVIEW</span></div>
        </header>
        <section class="internship-file-grid" aria-label="AI-PPT 实习项目文件">
            ${Object.entries(internshipProjects).map(([id, project]) => `<button class="internship-file-card file-${id}" data-internship-file="${id}" style="--file-art:url('${project.art}')">
                <span class="file-cover" aria-hidden="true"><i></i><b>${project.order}</b></span>
                <span class="file-copy"><small>${project.file}</small><strong>${project.short}</strong><em>${project.meta}</em></span>
                <span class="file-open">OPEN →</span>
            </button>`).join('')}
        </section>
        <footer class="internship-folder-footer"><span>这些是项目档案，不是平级网页。</span><span>滚轮 / 方向键 / 节点目录均可浏览</span></footer>
    </main>
</section>`;

const internshipProjectCover = (project, id) => `<article class="corridor-scene corridor-cover tone-${project.tone}" id="internship-${id}-cover" data-corridor-scene="${id}-cover">
    <img class="corridor-cover-art" src="${project.art}" alt="" loading="eager">
    <div class="corridor-cover-wash"></div>
    <div class="corridor-cover-copy"><span>FILE ${project.order} / ${project.file}</span><h2>${project.title}</h2><p>${project.lead}</p><div><b>滚轮向下</b><small>每次只进入一个节点</small><i>↓</i></div></div>
</article>`;

const internshipEvidenceScene = (project, id, step) => internshipScene({
    id:`${id}-evidence`, step, project:'EVIDENCE / REVIEW QUEUE', tone:project.tone,
    title:'证据会在这里进入叙事，但不会抢走项目主线',
    lead:'当前先保留结构与审核位。后续逐项放入真实方案、数据与落地结果，再确认删减和脱敏边界。',
    body:`<div class="corridor-review-grid">${project.evidence.map((item,index) => `<section><b>0${index + 1}</b><span>${item}</span><small>WAITING FOR REVIEW</small></section>`).join('')}</div>
        <div class="corridor-review-actions"><button data-internship-folder>返回实习文件夹</button><button data-corridor-go="${id}-cover">回到文件封面</button></div>`
});

const internshipCorridorPage = projectId => {
    const project = internshipProjects[projectId];
    const ids = ['entry','evaluation-start','evaluation-failure','evaluation-experiments','evaluation-system','evaluation-aesthetic','image-route','image-pipeline','editing','data','skill','factory','synthesis'];
    const sceneLibrary = internshipSceneLibrary();
    const library = Object.fromEntries(ids.map((id,index) => [id, sceneLibrary[index]]));
    const scenes = [internshipProjectCover(project, projectId), ...project.sceneIds.map(id => library[id]), internshipEvidenceScene(project, projectId, project.sceneIds.length + 1)];
    const navIds = [`${projectId}-cover`, ...project.sceneIds, `${projectId}-evidence`];
    const navLabels = ['文件封面', ...project.nav, '证据审核'];
    return `<section class="internship-shell internship-project-view" data-internship-project="${projectId}" style="--project-art:url('${project.art}')">
        ${internshipToolbar(`AI-PPT Internship › ${project.file}`, true)}
        <div class="internship-layout">
            <aside class="corridor-index">
                <header><span>FILE ${project.order} / PROJECT STREAM</span><h2>${project.short}</h2><p>这是一份会随滚轮向里展开的项目档案。</p></header>
                <nav aria-label="${project.short}节点目录">${navIds.map((id,index) => `<button data-corridor-go="${id}"><i>${String(index).padStart(2,'0')}</i><span>${navLabels[index]}</span></button>`).join('')}</nav>
                <button class="corridor-folder-return" data-internship-folder>← 返回文件夹</button>
                <div class="corridor-progress"><span><i></i></span><b>00 / ${String(scenes.length - 1).padStart(2,'0')}</b></div>
            </aside>
            <div class="internship-corridor" tabindex="0" aria-label="${project.short}流式项目档案">
                <div class="corridor-depth-world" aria-hidden="true"><i></i><i></i><i></i><span></span></div>
                ${scenes.join('')}
                <div class="corridor-camera-state" aria-hidden="true"><span>CAMERA DEPTH</span><b>00</b><i>SCROLL TO ENTER</i></div>
            </div>
        </div>
    </section>`;
};

function initializeInternshipCorridor(win) {
    const corridor = win.querySelector('.internship-corridor');
    if (!corridor) return;
    const scenes = [...corridor.querySelectorAll('[data-corridor-scene]')];
    const buttons = [...win.querySelectorAll('[data-corridor-go]')];
    const progressFill = win.querySelector('.corridor-progress i');
    const progressText = win.querySelector('.corridor-progress b');

    let currentIndex = 0;
    let wheelLocked = false;
    let wheelRelease;
    let touchStartY = null;
    let motionTimer;
    const reducedMotion = matchMedia('(prefers-reduced-motion:reduce)').matches;
    const goToIndex = index => {
        const nextIndex = Math.max(0, Math.min(index, scenes.length - 1));
        if (nextIndex === currentIndex) return;
        const direction = nextIndex > currentIndex ? 'forward' : 'backward';
        currentIndex = nextIndex;
        corridor.dataset.motion = direction;
        corridor.classList.add('camera-moving');
        clearTimeout(motionTimer);
        motionTimer = setTimeout(() => corridor.classList.remove('camera-moving'), reducedMotion ? 20 : 820);
        update(currentIndex);
    };
    const goTo = id => {
        const index = scenes.findIndex(scene => scene.dataset.corridorScene === id);
        if (index >= 0) goToIndex(index);
    };
    buttons.forEach(button => button.addEventListener('click', event => {
        const id = event.currentTarget.dataset.corridorGo;
        if (id) goTo(id);
    }));

    const update = index => {
        const max = Math.max(1, scenes.length - 1);
        const current = Math.max(0, Math.min(index, max));
        currentIndex = current;
        progressFill.style.width = `${current / max * 100}%`;
        progressText.textContent = `${String(current).padStart(2,'0')} / ${String(max).padStart(2,'0')}`;
        const id = scenes[current]?.dataset.corridorScene;
        corridor.style.setProperty('--journey-progress', current / max);
        const cameraState = corridor.querySelector('.corridor-camera-state');
        if (cameraState) {
            cameraState.querySelector('b').textContent = String(current).padStart(2,'0');
            cameraState.querySelector('i').textContent = current === max ? 'END OF FILE / SCROLL UP' : current === 0 ? 'SCROLL TO ENTER' : 'MOVING THROUGH ARCHIVE';
        }
        scenes.forEach((scene,index) => {
            const offset = index - current;
            const distance = Math.min(Math.abs(offset), 4);
            const future = offset > 0;
            const past = offset < 0;
            const z = future ? -360 * distance : past ? 300 + (distance - 1) * 150 : 0;
            const y = future ? 14 * distance : past ? -92 - (distance - 1) * 18 : 0;
            const scale = future ? Math.max(.68, 1 - distance * .085) : past ? 1.06 + distance * .035 : 1;
            const opacity = offset === 0 ? 1 : future ? Math.max(0, .56 - (distance - 1) * .17) : 0;
            const blur = offset === 0 ? 0 : future ? Math.max(0, distance - 1) * 1.4 : 4;
            scene.style.setProperty('--scene-z', `${z}px`);
            scene.style.setProperty('--scene-y', `${y}%`);
            scene.style.setProperty('--scene-scale', scale);
            scene.style.setProperty('--scene-opacity', opacity);
            scene.style.setProperty('--scene-blur', `${blur}px`);
            scene.style.setProperty('--scene-tilt', future ? `${Math.min(distance * 1.1, 3.2)}deg` : past ? '-2deg' : '0deg');
            scene.style.zIndex = String(past ? 40 - distance : 30 - distance);
            scene.style.pointerEvents = offset === 0 ? 'auto' : 'none';
            scene.classList.toggle('is-active', offset === 0);
            scene.classList.toggle('is-future', future);
            scene.classList.toggle('is-past', past);
            scene.setAttribute('aria-hidden', offset === 0 ? 'false' : 'true');
        });
        win.querySelectorAll('.corridor-index [data-corridor-go]').forEach(button => button.classList.toggle('active', button.dataset.corridorGo === id));
    };
    corridor.addEventListener('wheel', event => {
        if (Math.abs(event.deltaY) < 4) return;
        event.preventDefault();
        clearTimeout(wheelRelease);
        wheelRelease = setTimeout(() => { wheelLocked = false; }, 220);
        if (wheelLocked) return;
        wheelLocked = true;
        goToIndex(currentIndex + (event.deltaY > 0 ? 1 : -1));
    }, { passive:false });
    corridor.addEventListener('keydown', event => {
        if (['ArrowDown','PageDown',' '].includes(event.key)) { event.preventDefault(); goToIndex(currentIndex + 1); }
        if (['ArrowUp','PageUp'].includes(event.key)) { event.preventDefault(); goToIndex(currentIndex - 1); }
        if (event.key === 'Home') { event.preventDefault(); goToIndex(0); }
        if (event.key === 'End') { event.preventDefault(); goToIndex(scenes.length - 1); }
    });
    corridor.addEventListener('pointerdown', event => {
        if (event.pointerType === 'touch') touchStartY = event.clientY;
    });
    corridor.addEventListener('pointerup', event => {
        if (event.pointerType !== 'touch' || touchStartY === null) return;
        const distance = touchStartY - event.clientY;
        touchStartY = null;
        if (Math.abs(distance) < 48) return;
        goToIndex(currentIndex + (distance > 0 ? 1 : -1));
    });
    update(0);
    corridor.focus({ preventScroll:true });
}

function initializeInternshipSystem(win) {
    const body = win.querySelector('.window-body');
    const title = win.querySelector('.window-title span');
    const showFolder = () => {
        body.innerHTML = internshipFolderPage();
        title.textContent = '腾讯 CSIG 实习项目系统 · AI PPT';
        body.querySelectorAll('[data-internship-file]').forEach(button => button.addEventListener('click', () => showProject(button.dataset.internshipFile)));
    };
    const showProject = projectId => {
        const project = internshipProjects[projectId];
        if (!project) return;
        body.innerHTML = internshipCorridorPage(projectId);
        title.textContent = `${project.short} · AI-PPT Internship`;
        body.querySelectorAll('[data-internship-folder]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); showFolder(); }));
        initializeInternshipCorridor(win);
    };
    showFolder();
}

Object.assign(WindowContent, {
    'case-product-internship': {
        title:'腾讯 CSIG 实习项目系统 · AI PPT',
        icon:'product', width:1100, height:680,
        content: internshipFolderPage,
        onOpen: initializeInternshipSystem
    }
});
