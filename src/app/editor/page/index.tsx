"use client"

import { useRef } from "react";

export default function Page() {
    const pageRef = useRef<HTMLDivElement>(null);

    function handleInput() {
        const page = pageRef.current;
        
        // if (page?.innerHTML == '<br>') {
        //     page.innerText = ''
        // }
    }

    return (
        <div ref={pageRef} contentEditable={true} onInput={handleInput}
        className="h-[1066px] w-[866px] mt-4 p-5 flex flex-col text-[16px] border shadow-md focus-visible:outline-none resize-none">
            {/* Whenever I press Enter, a new div gets created */}
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