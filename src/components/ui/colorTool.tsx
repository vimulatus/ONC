"use client"

import { useRef, useState } from "react";
import SketchPicker, { PresetColor } from "react-color/lib/components/sketch/Sketch";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Icon, Tool } from "./icon";
import { ToolBuilder } from "./tool";

export default function ColorTool({ name, presetColors }: { name: Tool, presetColors: PresetColor[] }) {
    const defaultColor = useRef(() => {
        if (typeof presetColors[0] === 'string') {
            return presetColors[0]
        } else {
            return presetColors[0].color
        }
    })

    const [color, setColor] = useState(defaultColor.current);

    return (
        <Popover>
            <PopoverTrigger>
                <Icon name={name} fill={color} />
            </PopoverTrigger>
            <PopoverContent className="w-fit p-0">
                <SketchPicker presetColors={presetColors} color={color} onChange={color => setColor(color.hex)} />
            </PopoverContent>
        </Popover>
    )
}