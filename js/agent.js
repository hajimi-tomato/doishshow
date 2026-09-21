const AgentRouter = (() => {
    const intents = ['recruiter','product','visual','explorer'];
    const labels = {recruiter:'招聘视角',product:'AI 产品',visual:'视觉探索',explorer:'隐藏叙事'};
    const moduleLabels = {
        start:'Start_Here',resume:'My_Resume.pdf',contact:'Contact_Me',about:'About_Me.txt',
        product:'Product_Lab','case-product-agent':'SD 提示词助手','case-product-eval':'腾讯 AI-PPT',terminal:'Logic_Terminal',
        ai:'AI_Gallery',ui:'UI_Studio',art:'Art_Corner',memory:'Memory_Pool',trash:'回收站'
    };
    const recommendations = {
        recruiter:['start','resume','contact','product'],
        product:['product','case-product-agent','case-product-eval','terminal'],
        visual:['ai','ui','art','memory'],
        explorer:['trash','memory','terminal','about']
    };
    const messages = {
        recruiter:'你似乎在快速核对身份、能力与代表证据。',
        product:'你正在追踪系统逻辑、Agent 路由与评价方法。',
        visual:'你更关注画面语言、界面结构与生成过程。',
        explorer:'你在寻找旧文件、个人记忆和隐藏叙事。'
    };
    const state = {
        scores:{recruiter:.25,product:.25,visual:.25,explorer:.25},
        visits:new Map(), dwell:new Map(), events:0, current:null
    };

    function vectorFor(id) {
        const v = {recruiter:0,product:0,visual:0,explorer:0};
        if (id === 'start') Object.assign(v,{recruiter:1.35,product:.35,visual:.15});
        else if (id === 'resume') Object.assign(v,{recruiter:2,product:.25});
        else if (id === 'contact') Object.assign(v,{recruiter:1.7,explorer:.15});
        else if (id === 'about') Object.assign(v,{recruiter:.9,explorer:.65});
        else if (id === 'product' || id.startsWith('case-product')) Object.assign(v,{product:1.9,recruiter:.45});
        else if (id === 'terminal') Object.assign(v,{product:1.1,explorer:1.05});
        else if (id === 'ui' || id.startsWith('case-ui')) Object.assign(v,{visual:1.55,product:.55});
        else if (id === 'ai' || id.startsWith('case-ai')) Object.assign(v,{visual:1.65,product:.45});
        else if (id === 'art' || id.startsWith('case-art')) Object.assign(v,{visual:1.9,explorer:.45});
        else if (id === 'memory') Object.assign(v,{visual:.9,explorer:1.45});
        else if (id === 'trash' || id.startsWith('restored-')) Object.assign(v,{explorer:1.9,visual:.2});
        return v;
    }

    function probabilities() {
        const exp = Object.fromEntries(intents.map(key => [key,Math.exp(state.scores[key] / 2)]));
        const total = intents.reduce((sum,key) => sum + exp[key],0);
        return Object.fromEntries(intents.map(key => [key,exp[key] / total]));
    }

    function recommendationFor(intent) {
        const candidates = recommendations[intent];
        return [...candidates].sort((a,b) => {
            if (a === state.current) return 1;
            if (b === state.current) return -1;
            return (state.visits.get(a) || 0) - (state.visits.get(b) || 0);
        })[0];
    }

    function render() {
        const core = document.querySelector('#agent-core');
        if (!core) return;
        const probs = probabilities();
        const ranked = [...intents].sort((a,b) => probs[b] - probs[a]);
        const intent = ranked[0];
        const confidence = Math.round(probs[intent] * 100);
        const phase = state.events === 0 ? 'SCANNING' : state.events < 3 ? 'INFERRING' : 'ROUTING';
        const next = recommendationFor(intent);
        core.dataset.phase = phase.toLowerCase();
        core.dataset.intent = intent;
        document.querySelector('#agent-phase').textContent = phase;
        document.querySelector('#agent-message').textContent = state.events ? messages[intent] : '正在观察浏览路径，等待形成第一条意图线索。';
        document.querySelector('#agent-confidence').textContent = `${confidence}%`;
        document.querySelector('#agent-confidence-fill').style.width = `${confidence}%`;
        core.querySelectorAll('[data-agent-node]').forEach(node => node.classList.toggle('active',node.dataset.agentNode === intent));
        const action = document.querySelector('#agent-recommendation');
        action.dataset.open = next;
        action.querySelector('b').textContent = moduleLabels[next] || next;
        const scoreRoot = document.querySelector('#agent-scores');
        scoreRoot.innerHTML = ranked.map(key => `<div><span>${labels[key]}</span><i><b style="width:${Math.round(probs[key] * 100)}%"></b></i><em>${Math.round(probs[key] * 100)}</em></div>`).join('');
        const tray = document.querySelector('.agent-tray-label');
        if (tray) tray.textContent = `AGENT · ${phase}`;
    }

    function observe(id,{strength=1,countEvent=true}={}) {
        if (!id) return;
        const vector = vectorFor(id);
        if (countEvent) {
            intents.forEach(key => { state.scores[key] *= .92; });
            state.events += 1;
            state.current = id;
            state.visits.set(id,(state.visits.get(id) || 0) + 1);
        }
        intents.forEach(key => { state.scores[key] += vector[key] * strength; });
        render();
    }

    function initialize() {
        render();
        addEventListener('myr:module-opened',event => observe(event.detail?.id));
        setInterval(() => {
            if (document.hidden || !state.current) return;
            const ticks = state.dwell.get(state.current) || 0;
            if (ticks >= 4) return;
            state.dwell.set(state.current,ticks + 1);
            observe(state.current,{strength:.12,countEvent:false});
        },10000);
    }

    return {initialize,observe,getState:() => ({scores:{...state.scores},events:state.events,current:state.current})};
})();

document.addEventListener('DOMContentLoaded',AgentRouter.initialize);
window.AgentRouter = AgentRouter;
