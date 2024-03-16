import Toolbar from "./toolbar"
import Canvas from './canvas'
import { Section } from "@/components/ui/section"

export default function Editor() {
    return (
        <div className="flex flex-col">
            <Toolbar />
            <div className="flex flex-row justify-center items-center">
                <Canvas />
            </div>
        </div>
    )
}