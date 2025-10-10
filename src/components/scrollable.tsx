import { cn } from "@/lib/utils";

export default function Scrollable({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "scrollbar-hide absolute top-0 left-0 h-full w-full overflow-y-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
