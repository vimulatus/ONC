import { Button } from '../ui/button'
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from '../ui/tooltip'

export default function AddTooltip({
    children,
    content
}: {
    children: React.ReactNode,
    content: string
}) {
    return (
        <Tooltip>
            <TooltipTrigger>
                {children}
            </TooltipTrigger>
            <TooltipContent side='bottom'>
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export function TooltipButton({
    children,
    className,
    tooltip
}: {
    children: React.ReactNode,
    className?: string,
    tooltip?: string
}) {
    if (tooltip) {
        return (
        <AddTooltip content={tooltip}>
            <Button className={className} variant="ghost">
                {children}
            </Button>
        </AddTooltip>
            )
    } else {
        return (
            <Button className={className} variant="ghost">
                {children}
            </Button>
        )
    }
}