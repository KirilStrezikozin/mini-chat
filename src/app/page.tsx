import { ResizableVerticalSplit } from "@/components/pane";

export default function Home() {
  return (
    <div className="flex h-screen w-full">
      <main className="flex w-full">
        <ResizableVerticalSplit />
      </main>
    </div>
  );
}
