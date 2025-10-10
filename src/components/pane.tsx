import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Item } from "./ui/item";

interface PaneItemProps {
  className?: string;
  itemClassName?: string;
  children: React.ReactNode;
  justify: "start" | "stretch" | "end";
  hint?: string;
}

export function PaneItem({
  className,
  itemClassName,
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
        <span className="text-muted-foreground group-hover:text-foreground bg-background absolute top-0 left-3 z-100 -translate-y-1/2 pr-1 pl-1 text-sm font-medium">
          {hint}
        </span>
      )}
      <Item
        variant="outline"
        className={cn(
          "w-full overflow-hidden",
          justify === "stretch" ? "h-full" : "h-18 md:h-24",
          itemClassName,
        )}
      >
        {children}
      </Item>
    </div>
  );
}
