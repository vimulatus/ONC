import Editor from "./editor";
import Reader from "./reader";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle
} from '@/components/ui/resizable';

export default function Home() {
  return (
    <div className="h-[93vh]">
      {/* <ResizablePanelGroup direction="horizontal" className="mt-1">
        <ResizablePanel>
          <Editor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Reader />
        </ResizablePanel>
      </ResizablePanelGroup> */}

      <Editor />
    </div>
  );
}
