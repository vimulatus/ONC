"use client"

import Icon from "./icons"
import { Toggle } from "@/components/ui/toggle"
import { Separator } from "@/components/ui/separator"
import { 
    Popover,
    PopoverTrigger,
    PopoverContent 
} from "@/components/ui/popover"

import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import React from "react"
import { icons } from "lucide-react"
import ColorPicker from "./colorpicker"

function Color({ name }: { name: keyof typeof icons }) {
    const [color, setColor] = useState('#000000')

    return (
        <Popover>
            <PopoverTrigger>
                <Icon name={name} color={color} fill={color}>A</Icon>
            </PopoverTrigger>
            <PopoverContent>
                <ColorPicker color={color} setColor={setColor} />
            </PopoverContent>
        </Popover>
    )
}

export default function Toolbar() {

    return (
        <div>
            {/* Basics:
            Bold, Italics, Underline, Strikethrough
            Font colour, Background/Highlight colour
            Align
            List
            Indent
            Undo/Redo

            Create Graph

            Create Code Block

            Create callout 

            Create quote block

            Create embed */}

            <Color name="Highlighter" />

            {/* <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold">
                    <Bold />
                </ToggleGroupItem>
                <ToggleGroupItem value="italics">
                    <Italic />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                    <Underline />
                </ToggleGroupItem>
            </ToggleGroup> */}


        </div>
    )
}