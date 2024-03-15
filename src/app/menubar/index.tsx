import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BookOpen, PenSquare, SquareSplitHorizontal, Download, RotateCcw } from 'lucide-react';

function MenubarItem({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <Button variant="ghost">
                {children}
            </Button>
        </div>
    )
}

export default function Menubar() {
    return (
        <div>

        <div className='flex flex-row justify-between'>
            <div className='flex flex-row m-1'>
                <Button variant="outline" className='text-sm mx-2'>
                    New
                </Button>
                <Button variant="outline" className='text-sm'>
                    <RotateCcw className='h-4' />
                    Reset
                </Button>
            </div>
            
            {/* title */}

            <div className='flex flex-row justify-center mx-4 items-center'>
            <MenubarItem>
                <BookOpen />
            </MenubarItem>
            <MenubarItem>
                <PenSquare />
            </MenubarItem>
            <MenubarItem>
                <SquareSplitHorizontal />
            </MenubarItem>
            <MenubarItem>
                <Download />
            </MenubarItem>
            </div>
        </div>
        <Separator />
        </div>
    )
}