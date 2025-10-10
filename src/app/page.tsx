"use client";

import { ChatContent } from "@/components/chat-content";
import { ChatSidebar } from "@/components/chat-sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMemo } from "react";

export default function Home() {
  const isMobile = useIsMobile();

  const children = useMemo(() => {
    if (isMobile) return <ChatSidebar />;

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
  }, [isMobile]);

  return (
    <div className="flex h-screen w-full font-mono">
      <main className="flex w-full">{children}</main>
    </div>
  );
}
