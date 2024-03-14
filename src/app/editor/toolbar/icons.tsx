import { icons, LucideProps } from 'lucide-react'

interface IconProps extends Omit<LucideProps, 'ref'> {
    name: keyof typeof icons
}

export default function Icon({ name, ...props }: IconProps) {
    const LucideIcon = icons[name];

    return (
        <LucideIcon {...props} />
    )
}