"use client"

import { useRef } from "react";

export default function Page() {
    const pageRef = useRef<HTMLDivElement>(null);

    function handleInput() {
        const page = pageRef.current;

        if (page && !page.textContent) {
            const range = document.createRange();
            const sel = window.getSelection();

            if (sel && page.firstChild) {
                console.log(page.firstChild);
                range.setStart(page.firstChild, 0);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    }

    return (
        <div ref={pageRef} contentEditable={true} onInput={handleInput}
        className="h-[1066px] w-[866px] mt-4 p-5 flex flex-col text-[16px] border shadow-md focus-visible:outline-none resize-none ">
            <div></div>
        </div>
    )
}