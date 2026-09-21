const WindowManager = (() => {
    let zIndex = 100;
    const open = new Map();
    const mobile = () => matchMedia('(max-width:680px)').matches;
    const iconKey = id => {
        if (id.startsWith('case-ai')) return 'ai';
        if (id.startsWith('case-ui')) return 'ui';
        if (id.startsWith('case-product')) return 'product';
        if (id.startsWith('case-art')) return 'art';
        if (id.startsWith('restored-')) return 'restored';
        return id;
    };
    const iconUrl = id => `assets/images/icons/128/${iconKey(id)}.png?v=20260830-recut`;

    function focus(win) {
        document.querySelectorAll('.window').forEach(item => item.classList.remove('focused'));
        document.querySelectorAll('.taskbar-window').forEach(item => item.classList.remove('active'));
        win.classList.remove('minimized');
        win.classList.add('focused');
        win.style.zIndex = ++zIndex;
        document.querySelector(`.taskbar-window[data-win="${win.dataset.winId}"]`)?.classList.add('active');
    }

    function create(id, config) {
        if (open.has(id)) {
            focus(open.get(id));
            return open.get(id);
        }
        const win = document.createElement('section');
        win.className = 'window';
        win.dataset.winId = id;
        win.setAttribute('role', 'dialog');
        win.setAttribute('aria-label', config.title);
        const offset = (open.size % 6) * 24;
        const width = Math.min(config.width || 680, innerWidth - 20);
        const height = Math.min(config.height || 510, innerHeight - 64);
        Object.assign(win.style, {
            width: `${width}px`, height: `${height}px`,
            left: `${Math.max(8, Math.min(72 + offset, innerWidth - width - 12))}px`,
            top: `${Math.max(6, Math.min(45 + offset, innerHeight - height - 50))}px`
        });
        win.innerHTML = `
            <header class="window-titlebar">
                <div class="window-title"><img class="window-app-icon" src="${iconUrl(config.icon || id)}" alt=""><span>${config.title}</span></div>
                <div class="window-controls">
                    <button class="window-ctrl minimize" aria-label="最小化"></button>
                    <button class="window-ctrl maximize" aria-label="最大化"></button>
                    <button class="window-ctrl close" aria-label="关闭"></button>
                </div>
            </header>
            <div class="window-body">${typeof config.content === 'function' ? config.content() : config.content}</div>
            <div class="window-resize" aria-hidden="true"></div>`;
        document.querySelector('#window-container').appendChild(win);
        open.set(id, win);
        document.querySelector(`.desktop-icon[data-window="${id}"]`)?.classList.add('open');
        addTaskbar(id, config.title, config.icon || id);
        attach(win, id);
        if (mobile()) win.classList.add('maximized');
        focus(win);
        setTimeout(() => config.onOpen?.(win), 0);
        window.SoundFX?.play('open');
        return win;
    }

    function addTaskbar(id, title, icon) {
        const button = document.createElement('button');
        button.className = 'taskbar-window active';
        button.dataset.win = id;
        button.innerHTML = `<img src="${iconUrl(icon)}" alt=""><span>${title}</span>`;
        button.addEventListener('click', () => {
            const win = open.get(id);
            if (!win) return;
            if (win.classList.contains('minimized')) return focus(win);
            if (win.classList.contains('focused')) return minimize(id);
            focus(win);
        });
        document.querySelector('#taskbar-windows').appendChild(button);
    }

    function attach(win, id) {
        const titlebar = win.querySelector('.window-titlebar');
        win.addEventListener('pointerdown', () => focus(win));
        win.querySelector('.close').addEventListener('click', event => { event.stopPropagation(); close(id); });
        win.querySelector('.minimize').addEventListener('click', event => { event.stopPropagation(); minimize(id); });
        win.querySelector('.maximize').addEventListener('click', event => { event.stopPropagation(); maximize(id); });
        titlebar.addEventListener('dblclick', () => maximize(id));
        attachDrag(win, titlebar);
        attachResize(win, win.querySelector('.window-resize'));
    }

    function attachDrag(win, handle) {
        let state;
        handle.addEventListener('pointerdown', event => {
            if (mobile()) return;
            if (event.target.closest('.window-controls') || win.classList.contains('maximized')) return;
            state = { x:event.clientX, y:event.clientY, left:win.offsetLeft, top:win.offsetTop };
            handle.setPointerCapture?.(event.pointerId);
        });
        handle.addEventListener('pointermove', event => {
            if (!state) return;
            win.style.left = `${Math.max(-win.offsetWidth + 110, Math.min(innerWidth - 110, state.left + event.clientX - state.x))}px`;
            win.style.top = `${Math.max(0, Math.min(innerHeight - 78, state.top + event.clientY - state.y))}px`;
        });
        handle.addEventListener('pointerup', event => { state = null; handle.releasePointerCapture?.(event.pointerId); });
    }

    function attachResize(win, handle) {
        let state;
        handle.addEventListener('pointerdown', event => {
            if (mobile()) return;
            state = { x:event.clientX, y:event.clientY, width:win.offsetWidth, height:win.offsetHeight };
            handle.setPointerCapture?.(event.pointerId);
            event.stopPropagation();
        });
        handle.addEventListener('pointermove', event => {
            if (!state) return;
            win.style.width = `${Math.max(330, Math.min(innerWidth - win.offsetLeft, state.width + event.clientX - state.x))}px`;
            win.style.height = `${Math.max(250, Math.min(innerHeight - 44 - win.offsetTop, state.height + event.clientY - state.y))}px`;
        });
        handle.addEventListener('pointerup', () => { state = null; });
    }

    function minimize(id) {
        open.get(id)?.classList.add('minimized');
        document.querySelector(`.taskbar-window[data-win="${id}"]`)?.classList.remove('active');
        focusTopVisible();
    }
    function maximize(id) { if (!mobile()) open.get(id)?.classList.toggle('maximized'); }
    function close(id) {
        const win = open.get(id);
        if (!win) return;
        open.delete(id);
        document.querySelector(`.desktop-icon[data-window="${id}"]`)?.classList.remove('open');
        win.classList.add('closing');
        document.querySelector(`.taskbar-window[data-win="${id}"]`)?.remove();
        setTimeout(() => win.remove(), 150);
        focusTopVisible();
        dispatchEvent(new CustomEvent('myr:window-closed',{detail:{id}}));
        window.SoundFX?.play('close');
    }
    function focusTopVisible() {
        const visible = [...open.values()].filter(win => !win.classList.contains('minimized'));
        if (!visible.length) return;
        visible.sort((a,b) => Number(b.style.zIndex || 0) - Number(a.style.zIndex || 0));
        focus(visible[0]);
    }
    function closeAll() { [...open.keys()].forEach(close); }
    function closeFocused() {
        const focused = document.querySelector('.window.focused:not(.minimized)');
        if (focused) close(focused.dataset.winId);
    }
    function fitToViewport() {
        open.forEach(win => {
            if (mobile()) { win.classList.add('maximized'); return; }
            win.classList.remove('maximized');
            const width = Math.min(win.offsetWidth, innerWidth - 12);
            const height = Math.min(win.offsetHeight, innerHeight - 50);
            win.style.width = `${Math.max(330,width)}px`; win.style.height = `${Math.max(250,height)}px`;
            win.style.left = `${Math.max(0,Math.min(win.offsetLeft,innerWidth-win.offsetWidth))}px`;
            win.style.top = `${Math.max(0,Math.min(win.offsetTop,innerHeight-48-win.offsetHeight))}px`;
        });
    }
    addEventListener('resize', fitToViewport);

    return { create, focus, minimize, maximize, close, closeAll, closeFocused };
})();

window.WindowManager = WindowManager;
