import { cn } from "@/lib/utils"
import AddTooltip, { TooltipButton } from "../tooltip"
import {Icon, Tool} from "./icon"
import { ToggleGroup, ToggleGroupItem } from "./toggle-group"
import ColorTool from "./colorTool"
import { PresetColor } from "react-color/lib/components/sketch/Sketch"


export function Section({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <div className={cn("flex flex-row justify-center items-center", className)}>
            {children}
        </div>
    )
}

export function BasicSection({
    group,
    className,
    color = false,
    presetColors
}: {
    group: Map<string, Tool>,
    className?: string
    color?: boolean,
    presetColors?: Map<string, PresetColor[]>,
}) {
    if (color && presetColors == undefined) {
        throw new Error('PresetColors property required with color!')
    } 

    return (
        <Section className={className}>
            {[ ...group.keys() ].map((key, id) => {
                return (
                    <TooltipButton tooltip={key} key={id}>
                            {color ? (
                                <ColorTool presetColors={presetColors?.get(key)!} name={ group.get(key)! } />
                            ) : (
                                <Icon name={ group.get(key)! } />
                            )}
                    </TooltipButton>
                )
            })}
        </Section>
    )
}

export function ToggleSection({
    group,
    type = "multiple"
}: {
    group: Map<string, Tool>,
    type?: "multiple" | "single"
}) {
    return (
        <ToggleGroup type={type}>
            {[ ...group.keys() ].map((key, id) => {
                return (
                    <AddTooltip content={key} key={id}>
                        <ToggleGroupItem value={key} className="hover:bg-transparent">
                            <Icon name={ group.get(key)! } />
                        </ToggleGroupItem>
                    </AddTooltip>
                )
            })}
        </ToggleGroup>
    )
}

// export function PopoverSection({
//     group
// }: {
//     group: Map<string, ComplexTool>
// }) {
//     return (
        
//     )
// }