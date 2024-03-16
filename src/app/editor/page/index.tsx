"use client"

import { useRef } from "react";

export default function Page() {
    const pageRef = useRef<HTMLDivElement>(null);

    function handleInput() {
        const page = pageRef.current;
        
        const p = page?.firstChild;

        // Prevent br 
    }

    function handleKeyUp(e: React.KeyboardEvent<HTMLElement>) {
        // set p as default element on 'enter'
        if (e.key === 'Enter') {
            const selection = window.getSelection();
            const range = selection?.getRangeAt(0);

            const ele = range?.startContainer;
            const p = document.createElement('p');
            p.innerHTML = '&#8203'
            ele?.parentNode?.replaceChild(p, ele);

            range?.setStartAfter(p);
            range?.collapse(true);
            selection?.removeAllRanges();
            selection?.addRange(range!);
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
        const page = pageRef.current;

        // prevent first child of div from being deleted
        if (e.key === 'Backspace' || e.key === 'Delete') {
            const selection = window.getSelection();
            const range = selection?.getRangeAt(0);
            const ele = range?.startContainer.parentElement as HTMLElement | null;
            if (ele?.id === 'editor' && ele.childNodes.length == 1) {
                e.preventDefault();
            }
        }
    }

    function handleFocus() {
        const page = pageRef.current
        // check if div is empty 
        if (page && !page?.innerText.trim()) {
            page.innerHTML = `<h1 class="text-3xl">&#8203</h1>`;
        }
    }

    return (
        <div id="editor" ref={pageRef} contentEditable={true} onInput={handleInput} onFocus={handleFocus} onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        className="h-[1066px] w-[866px] mt-4 p-5 flex flex-col text-[16px] border shadow-md focus-visible:outline-none resize-none">
        </div>
    )
}

/*
TODO: 
- Elements in Toolbar actually do something to the page
- Real-time collab ?
- Title shows name of Document
- Map keyboard shortcuts to toolbar elements
*/