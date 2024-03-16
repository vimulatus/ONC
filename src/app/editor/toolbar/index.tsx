"use client"

import {Icon, Tool} from "@/components/ui/icon"
import {
    PopoverButton, 
    PopoverTrigger,
    PopoverContent 
} from "@/components/ui/popover"
import React from "react"
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { BasicSection, Section, ToggleSection } from "@/components/ui/section"
import { PresetColor } from "react-color/lib/components/sketch/Sketch"
import FontSize from "@/components/ui/fontSize"
import {TooltipButton} from "@/components/tooltip"
import { BasicToolBuilder } from "@/components/ui/tool"

function AddSeperator() {
    return (
        <Separator className="mx-2" orientation="vertical" />
    )
}

function Extra({children}: {children: React.ReactNode}) {
    return (
        <PopoverButton className="mx-0 px-1">
                    <PopoverTrigger>
                        <Icon name="Plus" />
                    </PopoverTrigger>
                    <PopoverContent onOpenAutoFocus={e => e.preventDefault()} className="items-center justify-center">
                        {children}
                    </PopoverContent>
            </PopoverButton>
    )
}

function BasicFormattingGroup() {
    let visible = new Map<string, Tool>();
    visible.set('Bold', 'Bold');
    visible.set('Italic', 'Italic');
    visible.set('Underline', 'Underline');

    let hidden = new Map<string, Tool>();
    hidden.set('Strikethrough', 'Strikethrough');
    hidden.set('Superscript', 'Superscript');
    hidden.set('Subscript', 'Subscript');

    return (
        <Section>
            <ToggleSection group={visible} />

            <FontSize />

            <Extra>
                <BasicSection group={hidden} className="mb-4" />
                <Separator />
                <Section>
                    <PopoverButton className="mt-4">
                        <PopoverTrigger className="flex items-center justify-center">
                                <span className="text-lg">Font Style</span>
                                <Icon size={18} name="ChevronRight" />
                        </PopoverTrigger>
                        <PopoverContent side="right">
                                
                        </PopoverContent>
                    </PopoverButton>
                </Section>
            </Extra>            
        </Section>
    )
}

function ListTool() {
    let list = new Map<string, Tool>();
    list.set('Bulleted List', 'List');
    list.set('Numbered List', 'ListOrdered');
    list.set('Todo List', 'ListChecks');
    list.set('Accordion', 'ListCollapse');

    return (
        <PopoverButton tooltip="Add List">
            <PopoverTrigger className="flex items-center justify-center">
                <Icon name="List" />
                <Icon size={14} name="ArrowDown" />
            </PopoverTrigger>
            <PopoverContent onOpenAutoFocus={e => e.preventDefault()}>
                <BasicSection group={list} />
            </PopoverContent>
        </PopoverButton>
    )
}

function TableTool() {
    return (
        <BasicToolBuilder tooltip="Insert Table" icon="Table">

        </BasicToolBuilder>
    )
}

function ChartTool() {
    let chart1 = new Map<string, Tool>();
    chart1.set('Bar Chart', 'BarChart3');
    chart1.set('Area Chart', 'AreaChart');
    chart1.set('Pie Chart', 'PieChart');

    let chart = new Map<string, Tool>();
    chart.set('Line Chart', 'LineChart');
    chart.set('Scatter Chart', 'ScatterChart');
    chart.set('Gantt Chart', 'GanttChart');

    return (
        <BasicToolBuilder icon="BarChart2" tooltip="Insert Chart">
            <BasicSection className="mb-6 gap-4" group={chart1} />
            <BasicSection className="gap-4" group={chart} />
        </BasicToolBuilder>
    )
}

function HeadingTool() {
    let tools = new Map<string, Tool>();
    let tools1 = new Map<string, Tool>();
    tools.set("Heading 1", "Heading1");
    tools.set("Heading 2", "Heading2");
    tools.set("Heading 3", "Heading3");
    tools1.set("Heading 4", "Heading4");
    tools1.set("Heading 5", "Heading5");
    tools1.set("Heading 6", "Heading6");

    return (
        <BasicToolBuilder icon="Heading" tooltip="Insert Heading">
            <BasicSection className="mb-6 gap-4" group={tools} />
            <BasicSection className="gap-4" group={tools1} />
        </BasicToolBuilder>
    )
}

function PageTool() {
    return (
        <BasicToolBuilder icon="File" tooltip="Page Settings">
            {/* Page Orientation, Page Colour, Page Template */}
        </BasicToolBuilder>
    )
}

function MoreTools() {
    let tools = new Map<string, Tool>();
    tools.set("Insert Image", 'Image')
    tools.set('Insert Code', 'CodeXml');
    tools.set('Insert Quote', 'Quote');
    tools.set('Insert Link', 'Link');

    return (
        <Section>
            <TableTool />
            <ChartTool />
            <HeadingTool />
            <BasicSection group={tools} />
            <PageTool />
        </Section>
    )
}

const highligherPresetColors = [
    "transparent",
    "#e9ecef",
    "#eaddd7",
    "#99e9f2",
    "#a5d8ff",
    "#d0bfff",
    "#eebefa",
    "#fcc2d7",
    "#b2f2bb",
    "#96f2d7",
    "#ffec99",
    "#ffd8a8",
    "#ffc9c9",
]

const fontPresetColors = [
        "#1E1E1E",
        "#868E96",
        "#846358",
        "#0c8599",
        "#1971c2",
        "#6741d9",
        "#9c36b5",
        "#c2255c",
        "#099268",
        "#f08c00",
        "#e8590c",
        "#2f9e44",
        "#e03131",
]

export default function Toolbar() {
    let time = new Map<string, Tool>();
    time.set('Undo', 'Undo2');
    time.set('Redo', 'Redo2');
    
    let fontStyle = new Map<string, Tool>();
    fontStyle.set('Font Size', 'ALargeSmall');
    // fontStyle.set('Font Family', '')

    let textColor = new Map<string, Tool>();
    textColor.set('Text color', 'Pen');
    textColor.set('Highlight color', 'Highlighter');
    let presetColor = new Map<string, PresetColor[]>();
    presetColor.set('Text color', fontPresetColors);
    presetColor.set('Highlight color', highligherPresetColors);

    let align = new Map<string, Tool>();
    align.set('Alight Left', 'AlignLeft');
    align.set('Alight Center', 'AlignCenter');
    align.set('Alight Right', 'AlignRight');
    align.set('Justify', 'AlignJustify');


    let indent = new Map<string, Tool>();
    indent.set('Indent', 'IndentIncrease');
    indent.set('Outdent', 'IndentDecrease');

    return (
        <div>
            <Section className="h-11">
                <BasicSection group={time} />
                <AddSeperator />
                <BasicFormattingGroup />
                <AddSeperator />
                <BasicSection group={textColor} color={true} presetColors={presetColor} />
                <AddSeperator />
                <ToggleSection type="single" group={align} />
                <AddSeperator />
                <ListTool />
                <AddSeperator />
                <BasicSection group={indent} />
                <AddSeperator />
                <MoreTools />
            </Section>
            <Separator />
        </div>
    )
}