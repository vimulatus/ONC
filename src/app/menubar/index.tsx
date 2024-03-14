import { Button } from '@/components/ui/button';
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
        <div className='flex flex-row border-b-2 justify-between'>
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

        // <MenuBar>
        //     <MenuBarMenu>
        //     <MenuBarTrigger>
        //         <BookOpen />
        //     </MenuBarTrigger>
        //     </MenuBarMenu>
        //     <MenuBarMenu>
        //     <MenuBarTrigger>
        //         <PenSquare />
        //     </MenuBarTrigger>
        //     </MenuBarMenu>
        //     <MenuBarMenu>
        //     <MenuBarTrigger>
        //         <SquareSplitHorizontal />
        //     </MenuBarTrigger>
        //     </MenuBarMenu>
        //     <MenuBarMenu>
        //     <MenuBarTrigger>
        //         <Download />
        //         <MenuBarContent>
        //             <MenuBarItem>
        //                 PDF
        //             </MenuBarItem>
        //             <MenuBarItem>
        //                 MDX
        //             </MenuBarItem>
        //             <MenuBarItem>
        //                 Image
        //             </MenuBarItem>
        //         </MenuBarContent>
        //     </MenuBarTrigger>
        //     </MenuBarMenu>
        // </MenuBar>    
    )
}