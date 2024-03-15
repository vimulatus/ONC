import { Icon, Tool } from "./icon";
import { PopoverButton, PopoverContent, PopoverTrigger } from "./popover";
import { BasicSection } from "./section";

export function BasicToolBuilder({
    children,
    className,
    icon,
    group,
    tooltip
}: {
    children?: React.ReactNode,
    className?: string,
    icon: Tool,
    group?: Map<string, Tool>,
    tooltip?: string
}) {
    return (
        <PopoverButton className={className} tooltip={tooltip}>
            <PopoverTrigger>
                <Icon name={icon} />
            </PopoverTrigger>
            <PopoverContent onOpenAutoFocus={e => e.preventDefault()}>
                {children ? children : group ? <BasicSection group={group} /> : null}
            </PopoverContent>
        </PopoverButton>
    )
}