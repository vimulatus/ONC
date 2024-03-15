import { icons, LucideProps } from 'lucide-react'

export type Tool = keyof typeof icons;

export interface ComplexTool {
    icon: Tool,
    subgroup: Map<string, Tool>
}

interface IconProps extends Omit<LucideProps, 'ref'> {
    name: Tool
}

export function Icon({ name, className, ...props }: IconProps) {
    const LucideIcon = icons[name];

    return (
        <LucideIcon className={className} {...props} />
    )
}