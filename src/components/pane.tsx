import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ChatContent } from "./chat-content";
import { ChatSidebar } from "./chat-sidebar";
import { Item } from "./ui/item";

interface PaneItemProps {
  className?: string;
  children: React.ReactNode;
  justify: "start" | "stretch" | "end";
  hint?: string;
}

export function PaneItem({
  className,
  children,
  justify,
  hint,
}: PaneItemProps) {
  const itemStyles = cva(["group relative mx-4 my-2 hover:ring"], {
    variants: {
      justify: {
        start: ["mt-4 justify-self-start"],
        stretch: ["justify-self-stretch h-full"],
        end: ["mb-4 justify-self-end"],
      },
    },
  });

  return (
    <div className={cn(itemStyles({ justify }), className)}>
      {hint && (
        <span className="text-muted-foreground group-hover:text-foreground bg-background absolute top-0 left-3 -translate-y-1/2 p-1 text-sm font-medium">
          {hint}
        </span>
      )}
      <Item
        variant="outline"
        className={cn(
          "w-full overflow-hidden rounded-none",
          justify === "stretch" ? "h-full" : "h-18 md:h-24",
        )}
      >
        {children}
      </Item>
    </div>
  );
}

export function ResizableVerticalSplit() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-h-screen max-w-full border md:min-w-[450px]"
    >
      <ResizablePanel
        className="border-none"
        minSize={8}
        defaultSize={20}
        maxSize={50}
      >
        <ChatSidebar />
      </ResizablePanel>
      <ResizableHandle className="invisible" />
      <ResizablePanel>
        <ChatContent />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
