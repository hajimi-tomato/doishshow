const InternshipPublic = {
    overview: {
        title: 'AI-PPT 系统化建设',
        subtitle: '从质量评测、生成编辑、数据观测到生产 Skill，把偶然的好结果变成稳定能力。',
        role: 'AI 产品 / 交互设计 / 评测策略 / Agent 能力设计',
        thesis: '四条工作线并不是平行堆叠：评测负责发现问题，产品负责承接修改，数据负责验证真实行为，Skill 负责把经验沉淀为可复用能力。',
        systemFlow: [
            {
                code: '01',
                mode: 'OBSERVE',
                title: '评测体系',
                input: '真实产物 / 人机差异',
                output: '可行动的质量诊断',
                feedback: '定位生成、编辑与交付问题',
                target: 'case-product-internship-eval'
            },
            {
                code: '02',
                mode: 'ACT',
                title: '生成与编辑',
                input: '用户意图 / 质量问题',
                output: '可理解、可修改的产物',
                feedback: '把诊断转成产品与交互动作',
                target: 'case-product-internship-creation'
            },
            {
                code: '03',
                mode: 'VALIDATE',
                title: '数据体系',
                input: '入口 / 行为 / 采纳',
                output: '真实使用中的判断依据',
                feedback: '验证能力是否进入工作流',
                target: 'case-product-internship-data'
            },
            {
                code: '04',
                mode: 'LEARN',
                title: '生产 Skill',
                input: '设计经验 / 失败模式',
                output: '可复用的 Agent 能力',
                feedback: '把经验编码进下一轮生成',
                target: 'case-product-internship-skill'
            }
        ],
        supportingThreads: [
            {
                code: 'S1',
                mode: 'PRODUCT FOUNDATION',
                title: '生成产品模板体系',
                body: '参与模板风格与规范建设，为结构化生成和图片生成提供视觉参照。',
                boundary: '保留能力位置，不公开模板原件与内部规范。'
            },
            {
                code: 'S2',
                mode: 'CAPABILITY',
                title: 'API 与工程协同',
                body: '参与任务创建、状态轮询、答复提交与交互中断的产品闭环，并理解产品工程结构。',
                boundary: '不把接口实现、代码仓库或工程发布写成本人独立完成。'
            },
            {
                code: 'S3',
                mode: 'RESEARCH',
                title: 'AI 写作能力研究',
                body: '设计创意写作提示词框架，并从模型机制讨论生成式创意的能力边界。',
                boundary: '当前只有总览事实索引，不扩写为独立案例。'
            },
            {
                code: 'S4',
                mode: 'METHOD',
                title: '叙事与团队方法论',
                body: '沉淀 PPT 叙事逻辑、产品命名探索、PRD 培训与阶段复盘。',
                boundary: '作为方法资产记录，不混同为独立业务结果。'
            }
        ]
    },
    publicationRules: [
        ['真实数值', '只表达方向、阶段与作用'],
        ['内部截图', '重绘为匿名结构图'],
        ['用户输入', '替换为合成示例'],
        ['原始文件', '只展示证据类型']
    ],
    projects: [
        {
            id: 'case-product-internship-eval',
            code: '01',
            kind: 'evaluation',
            title: 'AI-PPT 评测体系',
            short: '把“好不好”拆成可执行、可复用、可持续迭代的质量系统。',
            role: '评测标准、评测策略、提示词与 Benchmark 设计',
            status: '从方法探索进入长期运行，并被后续专业质量流程复用。',
            problem: '生成结果常被一句“看起来不错”概括，问题无法稳定复现，也难以回流到模型、Prompt 与产品链路。',
            work: [
                '定位重复评测波动和人机判断偏差，拆解不稳定来源',
                '重构内容、视觉与文件检查三条评测链路',
                '按人的阅读过程组织视觉判断，让扣分能够对应真实感受',
                '设计跨任务 Benchmark，并用真实样本持续校准规则'
            ],
            outcomes: ['形成完整质量闭环', '支持持续规模化运行', '方法被后续流程复用'],
            phases: [
                ['模糊判断', '发现分数波动与人机偏差'],
                ['结构重构', '内容、视觉、文件三链路'],
                ['双通道', '交付底线与审美判断分离'],
                ['长期运行', '评测结果持续回流产品']
            ],
            impact: {
                note: '只表达已被归档材料证明的运行状态、验证方式与复用关系，不展示可以反推业务的原值。',
                facts: [
                    ['RUNNING', '长期运行', '从一次性实验进入持续质量流程'],
                    ['VALIDATED', '批量实测', '用真实样本持续校准，而非单次演示'],
                    ['REUSED', '专业复用', '方法迁移后仍保留完整体系结构'],
                    ['ACTIONABLE', '可诊断', '结论能够回到生成、编辑与交付动作']
                ]
            },
            chapters: [
                {
                    kicker: 'STABILITY',
                    title: '先解决“同一份结果为什么判断不一致”',
                    body: '通过重复测试追踪差异，把问题拆到模型随机性、注意力顺序、标准模糊和专业依据不足；再用角色、优先顺序与波动容忍区间提高稳定性。'
                },
                {
                    kicker: 'HUMAN PATH',
                    title: '沿人的阅读过程重新组织维度',
                    body: '视觉判断不从术语表出发，而依次回答：是否看得懂、阅读是否疲劳、视觉是否协调、信息是否留下记忆，并把问题定位到层级、排版、色彩和配图。'
                },
                {
                    kicker: 'AESTHETICS',
                    title: '把交付底线和审美上限拆开',
                    body: '确定性的文件与版面硬伤进入质量门禁；基础设计能力进入通用底座；具体风格由视觉基因与配方表达，边缘风格保留整体判断空间。'
                },
                {
                    kicker: 'BENCHMARK',
                    title: '让分数变成可行动的诊断',
                    body: '在跨任务、跨方案和跨模型样本中回验框架，继续定位内容、视觉、忠实度、结构与交付问题，而不是只输出无法解释的总分。'
                }
            ],
            decisions: [
                ['专业概念越多，评测就越准吗？', '不。先抽象稳定结构，再补充必要标准，避免规则穷举。'],
                ['审美与物理硬伤应该放在同一分数里吗？', '不。可审计的交付问题与有立场的美学判断应走不同通道。'],
                ['评测的终点是得到一个分数吗？', '不是。每个结论都要能回到生成、编辑或交付链路。']
            ],
            ownership: {
                owned: '主导标准、策略、评测提示词、Benchmark 结构及最终规则微调。',
                collaborated: '与工程协作者共同完成系统实现、运行与后续承接。',
                boundary: '不把质量平台的通用能力、工程代码或全部运行结果写成本人独立完成。'
            },
            evidence: [
                ['问题与目标底稿', '证明项目起点与第一版诊断', 'ORIGIN'],
                ['方法论与提示词迭代', '支撑重构过程与主线心得', 'MAINLINE'],
                ['视觉更新与现行框架', '支撑人本维度与落地状态', 'SYSTEM'],
                ['评测规则与稳定性实验', '支撑 Judge 策略演进', 'METHOD'],
                ['美学底座与风格体系', '支撑审美双通道设计', 'AESTHETIC'],
                ['质量门禁与批量报告', '证明真实样本运行与归因', 'RUNNING'],
                ['质量平台结构记录', '证明能力进入长期环境', 'ADOPTION'],
                ['多方案与模型横评', '证明框架可用于诊断比较', 'BENCHMARK']
            ],
            reflection: '真正有效的评测不是给结果贴分数，而是让每一次扣分都能回答：哪里出了问题，下一步应该改什么。'
        },
        {
            id: 'case-product-internship-creation',
            code: '02',
            kind: 'creation',
            title: 'AI-PPT 生成与原生编辑器',
            short: '把“生成一份 PPT”继续推进到“可以理解、修改和交付”。',
            role: '产品探索、PRD、生成链路、自然语言编辑与交互方案',
            status: '形成真实生成产物与可运行原型；原生编辑器路线后续在团队协作中演进为正式发布的“人机双写”。',
            problem: '生成只是起点。用户还需要控制风格、修正内容、修改单页，并在 AI 与传统编辑之间自然切换。',
            work: [
                '从用户意图到页面交付，梳理可替换模型的生成链路',
                '用跨题材样本持续定位 Prompt、质量检查、兼容与速度问题',
                '设计自然语言局部修改、整页转换和全局叙事调整',
                '主笔原生编辑器 PRD，收敛选中、对话、回溯与必要编辑能力'
            ],
            outcomes: ['生成与编辑形成闭环', '原型进入真实产品环境', '“人机双写”正式发布'],
            phases: [
                ['机会探索', '视觉生成能否成为 PPT 新链路'],
                ['产品基建', '模型、模板与交付可替换'],
                ['自然语言编辑', '从局部修改到全篇转换'],
                ['人机双写', 'AI 进入编辑器与人实时协作']
            ],
            impact: {
                note: '使用与反馈只保留方向性结论，页面不公开日常原值、精确比例或真实用户输入。',
                facts: [
                    ['ADOPTION', '真实使用', '生成与编辑链路进入实际任务环境'],
                    ['CLOSED LOOP', '生成到编辑', '首轮产物能够继续进入自然语言修改'],
                    ['RELEASED', '正式发布', '产品路线演进为“人机双写”能力'],
                    ['FEEDBACK', '反馈闭环', '使用反馈可以继续回到产品迭代']
                ]
            },
            chapters: [
                {
                    kicker: 'IMAGE PPT',
                    title: '图片生成 PPT：先搭产品基建，再等待模型上限',
                    body: '把主题、资料、意图、大纲、设计方案、分镜、Prompt 编译、批量生成和组装交付串成完整链路，并保留文本与图像模型替换空间。'
                },
                {
                    kicker: 'QUALITY LOOP',
                    title: '把“效果不好”拆成可处理的问题',
                    body: '围绕生成适配、需求自检、文件交付、并行速度与模板控制建立问题清单；每一类问题都对应产品、Prompt 或研发侧的下一步动作。'
                },
                {
                    kicker: 'LANGUAGE EDIT',
                    title: '自然语言成为编辑入口，而不是聊天装饰',
                    body: '覆盖文本润色、视觉元素调整、整页风格转换和全局受众转换；修改时锁定无关区域，并为版本快照、比较和回退预留产品结构。'
                },
                {
                    kicker: 'HUMAN + AI COAUTHORING',
                    title: '从 AI 原生编辑器继续演进到“人机双写”',
                    body: '早期方案将需求澄清、元素选中、对话修改和任务回溯组织进同一编辑体验；该产品路线后续在团队协作中演进为腾讯文档“人机双写”，让人与 AI 在同一份文档中实时协作。'
                }
            ],
            decisions: [
                ['生成完成就等于任务完成吗？', '不。用户还要确认、修改、编辑和交付，产品必须覆盖后半程。'],
                ['要把传统编辑器完整复制进来吗？', '不。保留必要控制，把核心交互集中在意图、变化和回溯。'],
                ['应该绑定单一模型能力吗？', '不。先搭可替换的产品链路，让模型升级可以被快速承接。']
            ],
            ownership: {
                owned: '负责产品探索、生成链路、Prompt 与质量问题定位，主笔原生编辑器需求方案。',
                collaborated: '与交互、数据和研发协作完成范围收敛、排期、底层能力与后续产品演进。',
                boundary: '不声称独立完成模型、前后端、最终“人机双写”产品或全部规划能力的上线。'
            },
            evidence: [
                ['图片生成 PPT 探索', '支撑机会判断与完整生成链路', 'PRODUCT'],
                ['跨题材生成样本', '证明链路产生真实可交付结果', 'OUTPUT'],
                ['Prompt、页面与模板记录', '支撑质量问题与产品入口设计', 'ITERATION'],
                ['原生编辑器需求方案', '支撑范围、交互与协作决策', 'PRD'],
                ['可运行编辑器原型', '验证需求澄清和确认流程', 'DEMO'],
                ['自然语言编辑与体验问题', '支撑局部、整页和全局编辑设计', 'EDIT'],
                ['“人机双写”发布信息', '证明产品路线形成正式发布结果', 'RELEASE']
            ],
            reflection: 'AI 编辑器的价值不在于复制传统工具，而在于让用户能够表达意图、看到变化，并随时拿回控制权。'
        },
        {
            id: 'case-product-internship-data',
            code: '03',
            kind: 'data',
            title: 'AI-PPT 数据体系',
            short: '不是先堆指标，而是从业务问题反推需要观察什么。',
            role: '问题定义、指标拆解、埋点对齐、看板设计与验收',
            status: '生成产品与智能助手两条数据线均已落地，并成为团队持续可见的观察能力。',
            problem: '仅知道调用量无法解释用户从哪里来、做什么、在哪一步放弃，以及生成结果是否真正被采用。',
            work: [
                '从产品问题出发，反推指标口径、事件与扩展字段',
                '分别建立生成产品与智能助手内的 PPT 数据观察框架',
                '把入口、过程、编辑、采纳、复用与留存组织成分析路径',
                '与协作方共同推进埋点、看板和质量风险数据落地'
            ],
            outcomes: ['两条数据线完成落地', '团队可以持续查看', '支持后续产品判断'],
            phases: [
                ['基础上报', '前端行为与后台交付分开记录'],
                ['专项体系', '从问题反推指标与口径'],
                ['场景扩展', '多入口、上下文与采纳'],
                ['持续观察', '看板与专项分析连接决策']
            ],
            impact: {
                note: '公开页展示数据体系覆盖了什么、进入了什么状态；候选数量、事件明细与看板原值保持封存。',
                facts: [
                    ['COVERAGE', '双线落地', '生成产品与智能助手分别建立观察框架'],
                    ['VISIBLE', '持续看板', '从一次性汇报进入团队日常观察'],
                    ['CURATED', '指标收敛', '候选项经过合并、公共承接与取舍'],
                    ['DECISION', '支持判断', '入口、采纳、编辑与复用可以继续分析']
                ]
            },
            observationLenses: [
                {
                    mode: 'ENTRY',
                    title: '入口与意图',
                    question: '用户从哪里开始，为什么发起任务？',
                    publicSignal: '多入口被纳入同一观察框架',
                    sealed: '渠道分布、路径明细与原始 Query'
                },
                {
                    mode: 'PROCESS',
                    title: '过程与中断',
                    question: '任务如何推进，又可能在哪一步停下？',
                    publicSignal: '生成与编辑阶段可以被连续观察',
                    sealed: '事件字段、时间戳与异常日志'
                },
                {
                    mode: 'ADOPTION',
                    title: '采纳与交付',
                    question: '产物是否被继续修改、导出或分享？',
                    publicSignal: '结果价值不再只由生成成功定义',
                    sealed: '精确比例、用户内容与文件记录'
                },
                {
                    mode: 'RETURN',
                    title: '复用与回流',
                    question: '能力是否进入长期工作流并支持决策？',
                    publicSignal: '团队获得持续可见的观察能力',
                    sealed: '留存队列、组织看板与业务原值'
                }
            ],
            chapters: [
                {
                    kicker: 'QUESTION FIRST',
                    title: '先写问题，再写指标',
                    body: '从“用户从哪里来”“为什么开始”“生成后做了什么”“结果有没有进入工作流”等问题出发，向下拆成行为路径、指标口径、事件字段和计算方式。'
                },
                {
                    kicker: 'GENERATION',
                    title: '生成产品数据：观察从入口到交付',
                    body: '覆盖来源、创建意图、模板与材料、生成中断、对话修改、人工编辑、下载、版本与后续使用，使生成成功不再是唯一终点。'
                },
                {
                    kicker: 'ASSISTANT',
                    title: '智能助手数据：观察场景与采纳',
                    body: '把用户结构、多入口、上下文、生成过程、产物特征、二次创作、导出分享、留存与价值组织为分层指标池，并补入质量与风险方向。'
                },
                {
                    kicker: 'ANALYSIS',
                    title: '把看板继续转成产品判断',
                    body: '通过匿名的新旧链路观察范式比较编辑方式、交付行为与后续使用；严格保留口径差异，不把单日现象写成因果结论。'
                }
            ],
            decisions: [
                ['先有埋点，还是先有问题？', '先有问题。没有决策目标的字段只会制造数据噪音。'],
                ['生成量高，就代表产品有价值吗？', '不。还要观察编辑、采纳、导出、复用和留存。'],
                ['需求池中的指标都等于已经上线吗？', '不。候选、合并、公共能力承接与最终落地必须分开表达。']
            ],
            ownership: {
                owned: '主导业务问题、指标体系与分析结构，参与基础上报逻辑和看板方案。',
                collaborated: '与数据、前后端及业务协作者共同完成事件对齐、看板搭建和验收。',
                boundary: '不声称独立完成全部埋点开发，也不把候选指标数量写成最终上线数量。'
            },
            evidence: [
                ['基础埋点与上报底稿', '支撑前端行为与后台交付拆分', 'FOUNDATION'],
                ['生成产品专项数据设计', '支撑字段、看板与匿名分析', 'GENERATION'],
                ['智能助手场景数据需求', '支撑多入口、采纳与价值框架', 'ASSISTANT'],
                ['团队可见的完成状态', '证明两条数据线进入持续使用', 'DELIVERED']
            ],
            reflection: '指标不是数据表中的字段，而是一个可以被证伪的问题。先问清楚为什么，再决定记录什么。'
        },
        {
            id: 'case-product-internship-skill',
            code: '04',
            kind: 'skill',
            title: 'PPT 生产 Skill',
            short: '把 PPT 设计知识封装成 Agent 可以理解、调用和持续优化的能力。',
            role: 'Design 架构、Design.md Factory、质量门禁与优化探索',
            status: 'Design 方法进入真实 Skill 与灰度环境，并形成持续迭代的生产机制。',
            problem: '规则太少会让结果不稳定，规则太硬又会压低强模型上限；内容、叙事、视觉和布局也容易混入同一层。',
            work: [
                '提出底线、风格、模板与运行时的分层 Design 架构',
                '独立完成 Design.md Factory，把参考风格转成可执行设计契约',
                '探索质量门禁，将基础设计问题转成可检查规则',
                '结合场景、竞品、真实案例和限制分析持续优化 Skill'
            ],
            outcomes: ['形成可复用设计生产链', '进入真实灰度环境', '积累持续迭代机制'],
            phases: [
                ['基础限制', '先守住可读与可交付底线'],
                ['Design 架构', '视觉与叙事分轨治理'],
                ['Factory', '参考风格转可执行契约'],
                ['场景验证', '用真实任务校准规则强度']
            ],
            impact: {
                note: '灰度与迭代只表达已验证状态和改进方向，不展示访问原值、仓库或提交明细。',
                facts: [
                    ['ADOPTION', '真实灰度', '能力进入实际环境并获得使用验证'],
                    ['ITERATION', '多轮关键修改', '持续修正规则、流程与 Agent 行为'],
                    ['OWNED', '独立 Factory', '完成可运行的 Design.md 生产能力'],
                    ['VALIDATED', '真实场景', '用竞品、限制与案例共同校准规则']
                ]
            },
            chapters: [
                {
                    kicker: 'ARCHITECTURE',
                    title: '为 PPT 建立自己的 Design System',
                    body: '区分平台底线、风格规则、通用结构、模板实例与运行时内容；视觉轨回答“长什么样”，Story 轨回答“按什么逻辑讲”，两者通过页面契约合流。'
                },
                {
                    kicker: 'FACTORY',
                    title: '把 Design.md 的生产过程封装成独立 Skill',
                    body: '从参考 PPT 蒸馏风格 DNA，与中性生成基底融合，再经过真实生成、问题归因、版本快照、人工验收和瘦身，形成可维护的 Design 契约。'
                },
                {
                    kicker: 'QUALITY GATE',
                    title: '把基础设计底线变成可检查条件',
                    body: '围绕固定画布、可读性、对比、图片质量、布局碰撞、跨页一致性与文字规范探索门禁，让风格可以变化，但不能破坏交付底线。'
                },
                {
                    kicker: 'ITERATION',
                    title: '从竞品、场景与真实限制中持续修正规则',
                    body: '比较不同设计取向，研究真实任务分布与长链路失败点；把硬约束、软约束和场景策略分开，避免通用规则误伤叙事、科普与文化题材。'
                }
            ],
            decisions: [
                ['规则越多，输出就越好吗？', '不。强规则抬高下限，也可能压低上限并损害场景适配。'],
                ['所有题材都应使用一套默认风格吗？', '不。底线共用，表现层按场景路由。'],
                ['Design.md 应该承载 Story 与复杂 Layout 吗？', '不。职责分层才能控制膨胀、冲突与影响半径。']
            ],
            ownership: {
                owned: '主要负责 Design 架构，独立完成 Design.md Factory 与质量门禁探索，并持续贡献重要优化。',
                collaborated: '与 Skill、Story、自动化和发布协作者共同推进主能力迭代。',
                boundary: '不把主 Skill 的全部代码、研究报告、组件与工程发布写成本人独立完成。'
            },
            evidence: [
                ['Design 架构原件', '支撑分层、双轨与治理逻辑', 'ARCHITECTURE'],
                ['双版本 Skill', '支撑能力演进与实际对应关系', 'VERSION'],
                ['竞品研究与成对比较', '支撑优化假设与设计取向', 'RESEARCH'],
                ['Design 生产实验', '支撑规则强度与边界判断', 'EXPERIMENT'],
                ['质量门禁与灰度状态', '支撑底线探索和真实使用', 'GATE'],
                ['Design.md Factory', '证明独立完成的可执行生产线', 'FACTORY'],
                ['场景、限制与真实案例', '支撑当前效果和后续路线', 'VALIDATION']
            ],
            reflection: '好的 Skill 不是规则越多越好，而是把必须守住的底线变硬，把需要模型判断的空间留出来。'
        }
    ],
    ongoing: {
        code: '05',
        title: '腾讯文档体验改版',
        status: 'IN PROGRESS · SEALED',
        body: '这是独立的新事件。项目仍在进行，当前只保留档案位置，不公开过程，不推断本人贡献，也不提前书写结果。'
    }
};

const internshipVisual = kind => {
    if (kind === 'evaluation') return `
        <div class="intern-visual eval-station" aria-label="评测体系可视化">
            <div class="scan-rail"><span></span></div>
            <div class="eval-screens">
                <div><b>内容</b><span>事实与表达</span><em>PASS</em></div>
                <div><b>结构</b><span>叙事与层级</span><em>PASS</em></div>
                <div><b>视觉</b><span>版式与风格</span><em>SCAN</em></div>
                <div><b>可用</b><span>交付与编辑</span><em>PASS</em></div>
            </div>
            <p>QUALITY STATION · 发现问题 → 定位维度 → 回流迭代</p>
        </div>`;
    if (kind === 'creation') return `
        <div class="intern-visual creation-desk" aria-label="生成与编辑链路可视化">
            <div class="query-note"><small>USER INTENT</small><b>创建一份适合讲述的演示</b><span>主题、受众与风格均为合成示例</span></div>
            <div class="creation-route"><i></i><span>生成</span><i></i><span>理解</span><i></i><span>编辑</span><i></i></div>
            <div class="slide-canvas"><header><i></i><i></i><i></i></header><section><b>让想法成为<br>可编辑的页面</b><span></span><span></span></section><aside>AI<br>EDIT</aside></div>
        </div>`;
    if (kind === 'data') return `
        <div class="intern-visual beacon-station" aria-label="数据体系可视化">
            <div class="beacon"><i></i><i></i><i></i><span>?</span></div>
            <div class="data-path">
                <div><b>问题</b><span>哪里可能失效</span></div><i></i>
                <div><b>指标</b><span>如何被观察</span></div><i></i>
                <div><b>埋点</b><span>怎样被记录</span></div><i></i>
                <div><b>决策</b><span>下一步改什么</span></div>
            </div>
            <div class="signal-bars" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
        </div>`;
    return `
        <div class="intern-visual skill-factory" aria-label="PPT Skill 架构可视化">
            <div class="factory-input"><small>SCENE</small><b>用户意图</b><span>参考风格</span></div>
            <div class="factory-core">
                <div><b>STORY</b><span>讲什么</span></div>
                <div><b>DESIGN</b><span>如何表达</span></div>
                <div><b>LAYOUT</b><span>如何排布</span></div>
                <div><b>GATE</b><span>守住底线</span></div>
            </div>
            <div class="factory-output"><i></i><i></i><i></i><span>READY</span></div>
        </div>`;
};

const internshipPhaseRail = project => `
    <section class="internship-phase-rail" aria-label="${project.title} 项目阶段">
        ${project.phases.map((phase,index) => `<article><i>${String(index + 1).padStart(2,'0')}</i><div><b>${phase[0]}</b><span>${phase[1]}</span></div></article>`).join('')}
    </section>`;

const internshipImpactPanel = project => `
    <section class="impact-signal-panel" aria-label="${project.title} 匿名影响信号">
        <header>
            <div><span>ANONYMIZED IMPACT</span><h3>结果有证据，但不暴露原值</h3></div>
            <p>${project.impact.note}</p>
        </header>
        <div class="impact-signal-grid">
            ${project.impact.facts.map((fact,index) => `<article>
                <i>${String(index + 1).padStart(2,'0')}</i>
                <small>${fact[0]}</small>
                <b>${fact[1]}</b>
                <p>${fact[2]}</p>
                <span aria-hidden="true"><em></em><em></em><em></em></span>
            </article>`).join('')}
        </div>
        <footer>
            <span><i></i> PUBLIC · 方向 / 状态 / 复用 / 作用</span>
            <span><i></i> SEALED · 原值 / 链接 / 样本 / 账号</span>
        </footer>
    </section>`;

const internshipObservationConsole = project => {
    if (!project.observationLenses) return '';
    return `
        <section class="observation-console" aria-label="${project.title} 脱敏数据观测台">
            <header>
                <div><span>QUESTION-LED OBSERVATORY</span><h3>不展示后台，把“为什么观察”讲清楚</h3></div>
                <p>每个观察面都保留产品问题与公开结论；原始分布、用户内容、字段和看板继续封存。</p>
            </header>
            <div class="observation-screen">
                <aside aria-hidden="true">
                    <div class="memory-radar"><i></i><i></i><i></i><b>?</b></div>
                    <span>SAFE SIGNAL</span>
                    <small>QUESTION → SIGNAL<br>→ DECISION</small>
                </aside>
                <div class="observation-lenses">${project.observationLenses.map((lens,index) => `
                    <article>
                        <i>${String(index + 1).padStart(2,'0')}</i>
                        <small>${lens.mode}</small>
                        <h4>${lens.title}</h4>
                        <p>${lens.question}</p>
                        <dl>
                            <div><dt>PUBLIC SIGNAL</dt><dd>${lens.publicSignal}</dd></div>
                            <div class="sealed"><dt>SEALED</dt><dd>${lens.sealed}</dd></div>
                        </dl>
                    </article>`).join('')}</div>
            </div>
            <footer><span><i></i> 可公开：问题、方法、方向、作用</span><span><i></i> 永久封存：原值、账号、路径、样本</span></footer>
        </section>`;
};

const internshipHubPage = () => {
    const data = InternshipPublic;
    return `<article class="internship-hub">
        ${toolbar('Internship_Archive › AI-PPT_System')}
        <header class="internship-hero">
            <div><span class="privacy-chip">PUBLIC MIRROR · 已脱敏</span><h2>${data.overview.title}</h2><p>${data.overview.subtitle}</p><small>${data.overview.role}</small></div>
            <div class="archive-orbit" aria-hidden="true"><span class="orbit-core">AI<br>PPT</span><i></i><i></i><i></i><i></i><b>01</b><b>02</b><b>03</b><b>04</b></div>
        </header>
        <section class="internship-system-note"><span>这不是四件互不相关的任务</span><p>${data.overview.thesis}</p></section>
        <div class="internship-project-grid">${data.projects.map(project => `
            <button class="internship-module-card kind-${project.kind}" data-open="${project.id}">
                <span class="module-index">${project.code}</span>
                <span class="module-art">${internshipVisual(project.kind)}</span>
                <span class="module-copy"><small>PROJECT TRACK</small><b>${project.title}</b><p>${project.short}</p>
                    <span class="module-facts"><span><i>MY ROLE</i><strong>${project.role}</strong></span><span><i>PROOF</i><strong>${project.outcomes[0]}</strong></span></span>
                    <em>打开项目档案 →</em>
                </span>
            </button>`).join('')}</div>
        <section class="agent-system-map" aria-label="AI-PPT Agent 系统关系图">
            <header>
                <div><span>AGENT SYSTEM MAP</span><h3>四条工作线，组成一个持续学习的系统</h3></div>
                <p>评测发现问题，产品承接修改，数据验证真实行为，Skill 把经验写回下一轮生成。</p>
            </header>
            <div class="agent-system-canvas">
                <aside class="agent-system-core" aria-label="AI-PPT Agent 核心">
                    <div class="agent-core-orbit"><i></i><i></i><i></i><b>AI</b></div>
                    <strong>AI-PPT<br>AGENT SYSTEM</strong>
                    <small>OBSERVE · ACT<br>VALIDATE · LEARN</small>
                    <span><i></i> LOCAL MEMORY ONLINE</span>
                </aside>
                <div class="agent-flow-cards">${data.overview.systemFlow.map((node,index) => `
                    <button data-open="${node.target}" aria-label="打开${node.title}案例">
                        <i>${node.code}</i><small>${node.mode}</small><h4>${node.title}</h4>
                        <dl><div><dt>INPUT</dt><dd>${node.input}</dd></div><div><dt>OUTPUT</dt><dd>${node.output}</dd></div></dl>
                        <span>${node.feedback}</span><em>${index === data.overview.systemFlow.length - 1 ? '↺' : '→'}</em>
                    </button>`).join('')}</div>
            </div>
            <footer><span><i></i> 闭环不是流程装饰：每个输出都会成为下一条线的输入。</span><b>PROBLEM → PRODUCT → PROOF → CAPABILITY →</b></footer>
        </section>
        <section class="supporting-archive" aria-label="辅助工作索引">
            <header><div><span>SUPPORTING ARCHIVE</span><h3>没有强行变成案例，但也不会消失</h3></div><p>以下工作由总览事实底稿证明。当前只记录职责与产出位置，不使用缺少独立材料的细节填充页面。</p></header>
            <div>${data.overview.supportingThreads.map(item => `<article>
                <i>${item.code}</i><small>${item.mode}</small><h4>${item.title}</h4>
                <p>${item.body}</p><span>${item.boundary}</span>
            </article>`).join('')}</div>
            <footer><b>INDEXED · SOURCE SUMMARY ONLY</b><span>四条主线仍是实习板块的公开案例结构。</span></footer>
        </section>
        <section class="ongoing-archive" aria-label="进行中的项目">
            <span>${data.ongoing.code}</span><div><small>${data.ongoing.status}</small><b>${data.ongoing.title}</b><p>${data.ongoing.body}</p></div><i aria-hidden="true">LOCKED</i>
        </section>
        <section class="publication-protocol"><header><span>PUBLICATION PROTOCOL</span><b>原材料如何安全进入网站</b></header><div>${data.publicationRules.map((rule,index) => `<article><i>${String(index + 1).padStart(2,'0')}</i><span>${rule[0]}</span><b>→ ${rule[1]}</b></article>`).join('')}</div></section>
        <aside class="public-boundary"><b>公开展示边界</b><p>所有图形、示例和数据表达均由原始资料重新制作；不包含内部网址、账号、真实用户 Query、精确业务数据或原始文件。</p></aside>
        <footer class="case-nav"><button data-open="product">← 查看 AI 产品</button><button class="parent" data-open="internship">返回 Internship_Archive</button><button data-open="case-product-internship-eval">从评测体系开始 →</button></footer>
    </article>`;
};

const internshipCasePage = project => {
    const projects = InternshipPublic.projects;
    const index = projects.findIndex(item => item.id === project.id);
    const previous = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];
    return `<article class="internship-case kind-${project.kind}">
        ${toolbar(`AI-PPT_Internship › ${project.code}`)}
        <header class="internship-case-head">
            <div><span class="privacy-chip">SANITIZED CASE · ${project.code}</span><h2>${project.title}</h2><p>${project.short}</p></div>
            <aside><span>本人职责</span><b>${project.role}</b><small>团队成果与个人贡献分开表述</small></aside>
        </header>
        <div class="case-status-line"><span>PROJECT STATUS</span><p>${project.status}</p></div>
        ${internshipVisual(project.kind)}
        ${internshipPhaseRail(project)}
        ${internshipImpactPanel(project)}
        ${internshipObservationConsole(project)}
        <section class="internship-story">
            <article><span>01 / WHY</span><h3>为什么要做</h3><p>${project.problem}</p></article>
            <article class="work-panel"><span>02 / MY WORK</span><h3>我具体做了什么</h3><ol>${project.work.map(item => `<li>${item}</li>`).join('')}</ol></article>
            <article><span>03 / RESULT</span><h3>留下了什么</h3><div class="result-chips">${project.outcomes.map(item => `<b>${item}</b>`).join('')}</div></article>
        </section>
        <section class="project-chapters"><header><span>PROJECT ANATOMY</span><h3>工作内容不是一句概括</h3><p>以下内容来自已归档材料的脱敏重构，不展示原始页面与内部配置。</p></header><div>${project.chapters.map((chapter,index) => `<article><i>${String(index + 1).padStart(2,'0')}</i><small>${chapter.kicker}</small><h4>${chapter.title}</h4><p>${chapter.body}</p></article>`).join('')}</div></section>
        <section class="decision-log"><header><span>DECISION LOG</span><h3>关键判断与取舍</h3></header><div>${project.decisions.map((decision,index) => `<article><i>Q${index + 1}</i><div><b>${decision[0]}</b><p>${decision[1]}</p></div></article>`).join('')}</div></section>
        <section class="evidence-cabinet"><header><span>EVIDENCE CABINET</span><h3>每一批材料都有位置</h3><p>公开页只保留证据类型、支撑关系与阶段标签，不公开原文件、内部名称和敏感字段。</p></header><div>${project.evidence.map((item,index) => `<span><i>${String(index + 1).padStart(2,'0')}</i><b>${item[0]}</b><small>${item[1]}</small><em>${item[2]}</em></span>`).join('')}</div></section>
        <section class="ownership-boundary"><header><span>CONTRIBUTION BOUNDARY</span><h3>个人贡献与团队成果分开写</h3></header><div><article class="owned"><i>OWNED</i><p>${project.ownership.owned}</p></article><article><i>WITH TEAM</i><p>${project.ownership.collaborated}</p></article><article class="boundary"><i>NOT CLAIMED</i><p>${project.ownership.boundary}</p></article></div></section>
        <blockquote class="internship-reflection"><span>REFLECTION.LOG</span>${project.reflection}</blockquote>
        <footer class="case-nav"><button data-open="${previous.id}">← ${previous.title}</button><button class="parent" data-open="case-product-eval">返回实习总档案</button><button data-open="${next.id}">${next.title} →</button></footer>
    </article>`;
};
