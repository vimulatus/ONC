"use client"

import { useState } from "react";
import {Icon} from "./icon";
import { PopoverButton, PopoverContent, PopoverTrigger } from "./popover";
import { Slider } from "./slider";

export default function FontSize({ _size } : { _size?: number }) {
    const [size, setSize] = useState(_size ? _size : 16)

    return (
        <PopoverButton tooltip={`Font Size: ${size}`}>
            <PopoverTrigger>
                <Icon size={28} name="ALargeSmall" />
            </PopoverTrigger>
            <PopoverContent>
                <div className="mb-4 flex items-center justify-center">
                    Font Size: {size}
                </div>
                <Slider 
                    defaultValue={[size]}
                    max={72}
                    min={8}
                    step={2}
                    onValueChange={(value: React.SetStateAction<number>[]) => setSize(value[0])}
                />
            </PopoverContent>
        </PopoverButton>
    )
}