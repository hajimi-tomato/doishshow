const storage = {
    get(key, fallback) { try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; } catch (_) { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) { /* Device-local enhancement only. */ } }
};

const SoundFX = (() => {
    let enabled = storage.get('myr-sound', false) === true;
    let context;
    const beep = (frequency, duration = .07) => {
        if (!enabled) return;
        try {
            context ||= new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = context.createOscillator();
            const gain = context.createGain();
            oscillator.type = 'sine'; oscillator.frequency.value = frequency;
            gain.gain.setValueAtTime(.03, context.currentTime);
            gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + duration);
            oscillator.connect(gain); gain.connect(context.destination);
            oscillator.start(); oscillator.stop(context.currentTime + duration);
        } catch (_) { /* Audio is decorative. */ }
    };
    return {
        play(name) {
            if (name === 'open') { beep(620); setTimeout(() => beep(830,.08),55); }
            else if (name === 'close') beep(390,.09);
            else if (name === 'restore') { beep(540,.09); setTimeout(() => beep(720,.12),75); }
            else beep(720,.05);
        },
        toggle() { enabled = !enabled; storage.set('myr-sound', enabled); return enabled; },
        get enabled() { return enabled; }
    };
})();
window.SoundFX = SoundFX;

const moduleNames = {
    start:'Start_Here', ai:'AI_Gallery', ui:'UI_Studio', product:'Product_Lab', art:'Art_Corner',
    about:'About_Me.txt', terminal:'Logic_Terminal', memory:'Memory_Pool', resume:'My_Resume.pdf', contact:'Contact_Me', trash:'回收站',
    'case-product-agent':'SD 提示词助手', 'case-product-intent':'短剧脚本 Agent', 'case-product-eval':'腾讯 AI-PPT',
    'case-product-internship':'腾讯 CSIG · AI-PPT 产品系统',
    'case-ui-agent':'消防指挥平台', 'case-ui-portfolio':'2024–2025 UI 作品集', 'case-ui-defaults':'运动周服务设计',
    'case-ui-recruitment':'校内知推招聘系统', 'case-ui-water':'水乡行 APP', 'case-ui-hmi':'无界风息 HMI',
    'case-ai-yone':'永恩 LoRA 训练', 'case-ui-hierarchy':'哈基米幻想岛',
    'case-ai-summer':'梦一样的夏天', 'case-ai-system':'跨场景视觉系统', 'case-ai-kv':'完整桌面 KV', 'case-art-summer':'夏日视觉存档',
    'restored-original':'被否决的首页', 'restored-prompt':'失败的提示词', 'restored-copy':'差点上线的按钮文案', 'restored-future':'给未来的我'
};
const allowedIds = new Set(Object.keys(WindowContent));
const restoredMap = {
    '被否决的首页':'restored-original', '失败的提示词':'restored-prompt',
    '按钮文案':'restored-copy', '给未来的我':'restored-future'
};
let restoredValue = storage.get('myr-restored', []);
const restored = new Set(Array.isArray(restoredValue) ? restoredValue.filter(id => id.startsWith('restored-')) : []);
let recentValue = storage.get('myr-recent', []);
let recent = Array.isArray(recentValue) ? recentValue.filter(id => allowedIds.has(id) && (!id.startsWith('restored-') || restored.has(id))).slice(0,5) : [];
let themeState = ['afternoon','evening','memory'].includes(storage.get('myr-theme','afternoon')) ? storage.get('myr-theme','afternoon') : 'afternoon';
let bootTimer;
let currentRouteId = null;
let navigationStack = [];
let navigationIndex = -1;

function updateNavigationButtons() {
    document.querySelectorAll('[data-nav="back"]').forEach(button => { button.disabled = navigationIndex <= 0; });
    document.querySelectorAll('[data-nav="forward"]').forEach(button => { button.disabled = navigationIndex >= navigationStack.length - 1; });
}

function iconFor(id) {
    if (id.startsWith('case-ai')) return 'ai';
    if (id.startsWith('case-ui')) return 'ui';
    if (id.startsWith('case-product')) return 'product';
    if (id.startsWith('case-art')) return 'art';
    if (id.startsWith('restored-')) return 'restored';
    return id;
}

function canOpen(id) {
    return allowedIds.has(id) && (!id.startsWith('restored-') || restored.has(id));
}

function openModule(id, source = null, options = {}) {
    if (!canOpen(id)) { showToast(id.startsWith('restored-') ? '这个文件仍在回收站里。请先恢复它。' : '这个档案似乎已经被移动。'); return; }
    const config = WindowContent[id];
    const win = WindowManager.create(id, config);
    if (source instanceof Element) {
        const rect = source.getBoundingClientRect();
        win.style.transformOrigin = `${rect.left + rect.width/2 - win.offsetLeft}px ${rect.top + rect.height/2 - win.offsetTop}px`;
        createDreamFeedback(source);
    }
    if (!['start','trash'].includes(id)) {
        recent = [id, ...recent.filter(item => item !== id)].slice(0,5);
        storage.set('myr-recent', recent);
        renderRecent();
    }
    if (id === 'trash') setTimeout(syncRestoreButtons, 0);
    currentRouteId = id;
    if (options.recordHistory !== false && navigationStack[navigationIndex] !== id) {
        navigationStack = navigationStack.slice(0,navigationIndex+1);
        navigationStack.push(id); navigationIndex = navigationStack.length-1;
    }
    updateNavigationButtons();
    dispatchEvent(new CustomEvent('myr:module-opened',{detail:{id}}));
    if (options.syncRoute !== false) {
        const nextHash = `#/open/${encodeURIComponent(id)}`;
        if (location.hash !== nextHash) location.hash = nextHash;
    }
    closeMenus();
    return win;
}
window.openModule = openModule;

function navigateInternal(delta) {
    const nextIndex = navigationIndex + delta;
    if (nextIndex < 0 || nextIndex >= navigationStack.length) {
        showToast(delta < 0 ? '已经是本次访问的起点。' : '已经是最新打开的档案。');
        return;
    }
    navigationIndex = nextIndex;
    const id = navigationStack[navigationIndex];
    openModule(id,null,{recordHistory:false});
    updateNavigationButtons();
}

function createDreamFeedback(source) {
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    const rect = source.getBoundingClientRect();
    const ripple = document.createElement('i');
    ripple.className = 'dream-ripple';
    ripple.style.left = `${rect.left + rect.width/2}px`;
    ripple.style.top = `${rect.top + rect.height/2}px`;
    document.body.appendChild(ripple);
    for (let index=0; index<5; index++) {
        const bubble = document.createElement('i');
        bubble.className = 'click-bubble';
        bubble.style.left = `${rect.left + rect.width/2}px`;
        bubble.style.top = `${rect.top + rect.height/2}px`;
        bubble.style.setProperty('--dx', `${(index-2)*13}px`);
        bubble.style.setProperty('--dy', `${-28-Math.abs(index-2)*7}px`);
        document.body.appendChild(bubble);
        setTimeout(() => bubble.remove(), 720);
    }
    setTimeout(() => ripple.remove(), 680);
}

function renderRecent(query = '') {
    const target = document.querySelector('#recent-list');
    if (!target) return;
    target.replaceChildren();
    const normalized = query.trim().toLowerCase();
    const ids = normalized
        ? Object.keys(moduleNames).filter(id => canOpen(id) && `${moduleNames[id]} ${id}`.toLowerCase().includes(normalized)).slice(0,7)
        : recent;
    target.append(document.createTextNode(normalized ? `搜索结果（${ids.length}）：` : '最近打开：'));
    if (!ids.length) { target.append(document.createTextNode(normalized ? '没有找到匹配档案' : '等待你的第一次探索')); return; }
    ids.forEach((id,index) => {
        const button = document.createElement('button');
        button.className = 'inline-recent'; button.dataset.open = id; button.textContent = moduleNames[id];
        target.append(button);
        if (index < ids.length - 1) target.append(document.createTextNode(' · '));
    });
}

function showToast(message) {
    const toast = document.querySelector('#toast');
    toast.textContent = message; toast.classList.add('show');
    clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 2400);
}

async function copyContact(value,label) {
    try {
        await navigator.clipboard.writeText(value);
    } catch (_) {
        const field = document.createElement('textarea');
        field.value = value; field.setAttribute('readonly',''); field.style.position = 'fixed'; field.style.opacity = '0';
        document.body.appendChild(field); field.select(); document.execCommand('copy'); field.remove();
    }
    showToast(`${label}已复制：${value}`);
}

function openLightbox(source, alt = '') {
    const lightbox=document.querySelector('#image-lightbox');
    const image=lightbox?.querySelector('#lightbox-image');
    if(!lightbox||!image||!source)return;
    image.src=source; image.alt=alt;
    lightbox.querySelector('#lightbox-caption').textContent=alt;
    lightbox.classList.toggle('is-document',source.includes('resume-long')||source.includes('hmi-wind')||source.includes('water-town/04'));
    lightbox.hidden=false; document.body.classList.add('lightbox-open');
    lightbox.querySelector('[data-lightbox-close]')?.focus();
}

function closeLightbox() {
    const lightbox=document.querySelector('#image-lightbox');
    if(!lightbox||lightbox.hidden)return false;
    lightbox.hidden=true; lightbox.classList.remove('is-document'); document.body.classList.remove('lightbox-open');
    const image=lightbox.querySelector('#lightbox-image'); if(image)image.src='';
    return true;
}

function closeMenus() {
    document.querySelector('#start-menu').classList.remove('open');
    document.querySelector('#start-btn').classList.remove('active');
    document.querySelector('#start-btn').setAttribute('aria-expanded','false');
    document.querySelector('#context-menu').classList.remove('open');
}

function finishBoot() {
    clearTimeout(bootTimer);
    const boot = document.querySelector('#boot-screen');
    boot.classList.add('hidden'); boot.setAttribute('aria-hidden','true');
    boot.querySelector('#boot-skip').disabled = true;
    setTimeout(() => { if (boot.classList.contains('hidden')) boot.hidden = true; },720);
}

function applyTheme(state, announce = false) {
    themeState = state;
    document.body.classList.toggle('evening', state === 'evening');
    document.body.classList.toggle('memory-mode', state === 'memory');
    document.body.dataset.theme = state;
    const themeButton = document.querySelector('#theme-toggle');
    themeButton.textContent = state === 'evening' ? '☾' : state === 'memory' ? '◌' : '☀';
    themeButton.setAttribute('aria-label', state === 'evening' ? '当前为晚霞模式，点击切换' : state === 'memory' ? '当前为2009回忆模式，点击切换' : '当前为暑假午后，点击切换');
    themeButton.setAttribute('aria-pressed', state !== 'afternoon' ? 'true' : 'false');
    storage.set('myr-theme', state);
    renderAmbientBubbles(state === 'memory');
    if (announce) showToast(state === 'memory' ? '2009/08/16 · 记忆网络已连接' : state === 'evening' ? '18:36 · 放学后的晚霞' : '15:47 · 暑假午后');
    updateClock();
}

function renderAmbientBubbles(show) {
    document.querySelectorAll('.ambient-bubble').forEach(item => item.remove());
    if (!show || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    for (let index=0; index<7; index++) {
        const bubble = document.createElement('i');
        bubble.className='ambient-bubble';
        bubble.style.left=`${12+index*13}%`; bubble.style.setProperty('--delay',`${index*-1.7}s`); bubble.style.setProperty('--size',`${8+(index%3)*6}px`);
        document.querySelector('#desktop').appendChild(bubble);
    }
}

function addRestoredIcon(id) {
    if (!allowedIds.has(id) || document.querySelector(`[data-restored-id="${id}"]`)) return;
    const button = document.createElement('button');
    button.className='desktop-icon restored-file'; button.dataset.window=id; button.dataset.restoredId=id;
    button.innerHTML=`<span class="os-icon"><img src="assets/images/icons/128/restored.png" alt=""></span><span>${moduleNames[id]}.txt</span>`;
    document.querySelector('.desktop-icons').appendChild(button);
}

function restoreFile(name, sourceButton) {
    const id = restoredMap[name];
    if (!id) return;
    restored.add(id); storage.set('myr-restored',[...restored]);
    sourceButton.disabled=true; sourceButton.textContent='已还原';
    addRestoredIcon(id); createDreamFeedback(sourceButton); SoundFX.play('restore');
    showToast(`${moduleNames[id]}.txt 已恢复到桌面。`);
}

function syncRestoreButtons() {
    document.querySelectorAll('[data-restore]').forEach(button => {
        const id=restoredMap[button.dataset.restore];
        if (restored.has(id)) { button.disabled=true; button.textContent='已还原'; }
    });
}

function updateClock() {
    const clock=document.querySelector('#tray-clock');
    if (!clock) return;
    const now=new Date();
    clock.querySelector('strong').textContent=now.toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit',hour12:false});
    clock.querySelector('#tray-date').textContent=themeState==='memory'?'2009/08/16':now.toLocaleDateString('zh-CN',{month:'2-digit',day:'2-digit'});
}

function routeFromHash() {
    const match=location.hash.match(/^#\/open\/(.+)$/);
    if (!match) {
        if (currentRouteId) { const closing=currentRouteId; currentRouteId=null; WindowManager.close(closing); }
        return;
    }
    let id;
    try { id=decodeURIComponent(match[1]); }
    catch (_) { showToast('这个档案地址已经损坏。'); history.replaceState(null,'',location.href.split('#')[0]); return; }
    if (canOpen(id)) openModule(id,null,{syncRoute:false});
    else { showToast(id.startsWith('restored-')?'这个隐藏文件还没有被恢复。':'没有找到这个档案。'); history.replaceState(null,'',location.href.split('#')[0]); }
}

document.addEventListener('DOMContentLoaded', () => {
    renderRecent(); restored.forEach(addRestoredIcon); applyTheme(themeState); updateClock(); setInterval(updateClock,30000);
    const soundButton=document.querySelector('#sound-toggle');
    soundButton.textContent=SoundFX.enabled?'♫':'♪'; soundButton.setAttribute('aria-pressed',SoundFX.enabled?'true':'false');
    const hasRoute=/^#\/open\//.test(location.hash);
    if (hasRoute) { finishBoot(); setTimeout(routeFromHash,50); }
    else bootTimer=setTimeout(finishBoot,1600);

    document.querySelector('#boot-skip').addEventListener('click',finishBoot);

    document.querySelector('#experience-switcher').addEventListener('click', event => {
        const button = event.target.closest('[data-experience]');
        if (!button) return;
        const mode = button.dataset.experience;
        document.querySelectorAll('[data-experience]').forEach(item => {
            const active = item === button;
            item.classList.toggle('active', active);
            item.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        if (mode === 'tour') {
            createDreamFeedback(button);
            openModule('start', button);
        } else {
            WindowManager.closeAll();
            if (location.hash) history.replaceState(null,'',location.href.split('#')[0]);
            document.querySelector('#desktop').focus();
            showToast('已切换到自由探索。');
        }
    });

    const iconArea=document.querySelector('.desktop-icons');
    const handleDesktopIcon=(event,forceOpen=false)=>{
        const icon=event.target.closest('.desktop-icon[data-window]'); if(!icon)return;
        document.querySelectorAll('.desktop-icon').forEach(item=>item.classList.remove('selected')); icon.classList.add('selected');
        if(forceOpen||matchMedia('(max-width:680px)').matches||event.detail===0) openModule(icon.dataset.window,icon);
    };
    iconArea.addEventListener('click',event=>handleDesktopIcon(event,true));
    document.querySelector('.desktop-trash').addEventListener('click',event=>openModule('trash',event.currentTarget));

    document.addEventListener('click',async event=>{
        const lightboxSource=event.target.closest('[data-lightbox-src]'); if(lightboxSource){openLightbox(lightboxSource.dataset.lightboxSrc,lightboxSource.dataset.lightboxAlt||'完整图片');return;}
        if(event.target.closest('[data-lightbox-close]')||event.target.id==='image-lightbox'){closeLightbox();return;}
        const opener=event.target.closest('[data-open]'); if(opener){openModule(opener.dataset.open,opener);return;}
        const restore=event.target.closest('[data-restore]'); if(restore){restoreFile(restore.dataset.restore,restore);return;}
        const copy=event.target.closest('[data-copy]'); if(copy){await copyContact(copy.dataset.copy,copy.dataset.copyLabel || '内容');return;}
        const unavailable=event.target.closest('[data-unavailable]'); if(unavailable){showToast(unavailable.dataset.unavailable);return;}
        const nav=event.target.closest('[data-nav]'); if(nav){navigateInternal(nav.dataset.nav==='back'?-1:1);return;}
        if(event.target.closest('[data-memory-mode]')){applyTheme('memory',true);return;}
        if(!event.target.closest('#start-menu')&&!event.target.closest('#start-btn'))closeMenus();
    });

    document.querySelector('#start-btn').addEventListener('click',event=>{
        event.stopPropagation(); const menu=document.querySelector('#start-menu'); menu.classList.toggle('open');
        event.currentTarget.classList.toggle('active'); event.currentTarget.setAttribute('aria-expanded',menu.classList.contains('open')?'true':'false');
        document.querySelector('#context-menu').classList.remove('open'); SoundFX.play('click');
    });

    const search=document.querySelector('#project-search');
    search.addEventListener('input',()=>{
        const query=search.value.trim().toLowerCase(); renderRecent(query);
        document.querySelectorAll('.start-apps>button[data-open]').forEach(button=>{button.hidden=Boolean(query)&&!button.textContent.toLowerCase().includes(query)});
    });
    search.addEventListener('keydown',event=>{
        if(event.key!=='Enter'||!search.value.trim())return;
        const first=document.querySelector('#recent-list [data-open]'); if(first)openModule(first.dataset.open,first);
    });

    soundButton.addEventListener('click',event=>{
        const on=SoundFX.toggle(); event.currentTarget.textContent=on?'♫':'♪'; event.currentTarget.setAttribute('aria-pressed',on?'true':'false');
        showToast(on?'声音已开启：保持很轻。':'声音已关闭。'); if(on)SoundFX.play('click');
    });
    document.querySelector('#theme-toggle').addEventListener('click',()=>applyTheme(themeState==='afternoon'?'evening':'afternoon',true));
    document.querySelector('#tray-clock').addEventListener('click',()=>applyTheme(themeState==='memory'?'afternoon':'memory',true));

    document.querySelector('#desktop').addEventListener('contextmenu',event=>{
        if(event.target.closest('.window')||event.target.closest('.desktop-icon'))return;
        event.preventDefault(); closeMenus(); const menu=document.querySelector('#context-menu');
        menu.style.left=`${Math.max(0,Math.min(event.clientX,innerWidth-200))}px`; menu.style.top=`${Math.max(0,Math.min(event.clientY,innerHeight-190))}px`; menu.classList.add('open');
    });
    document.querySelector('#context-menu').addEventListener('click',event=>{
        const action=event.target.closest('[data-context]')?.dataset.context;
        if(action==='tour')openModule('start',event.target); if(action==='memory')applyTheme('memory',true);
        if(action==='refresh'){document.querySelector('.sun-wash').animate([{opacity:.2},{opacity:.85},{opacity:.2}],{duration:800});showToast('天空已经重新加载。云的位置好像变了一点。')}
        if(action==='about')openModule('about',event.target); closeMenus();
    });

    document.querySelector('#restart-memory').addEventListener('click',()=>{
        closeMenus(); WindowManager.closeAll(); const boot=document.querySelector('#boot-screen'); clearTimeout(bootTimer);
        boot.hidden=false; boot.removeAttribute('aria-hidden'); boot.querySelector('#boot-skip').disabled=false; boot.classList.remove('hidden');
        const oldProgress=boot.querySelector('.boot-progress span'); oldProgress.replaceWith(oldProgress.cloneNode());
        bootTimer=setTimeout(finishBoot,1600);
    });
    document.addEventListener('keydown',event=>{
        if(event.key==='Escape'){if(closeLightbox())return;closeMenus();WindowManager.closeFocused?.()}
        if(event.key.toLowerCase()==='m'&&event.altKey)applyTheme(themeState==='memory'?'afternoon':'memory',true);
    });
    addEventListener('myr:window-closed',event=>{
        if(currentRouteId!==event.detail.id)return;
        currentRouteId=null;
        if(location.hash) history.replaceState(null,'',location.href.split('#')[0]);
    });
    addEventListener('hashchange',routeFromHash);
});
