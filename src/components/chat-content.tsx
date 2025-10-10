import { cn } from "@/lib/utils";
import { PaneItem } from "./pane";
import { Button } from "./ui/button";
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "./ui/item";

export function ChatContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between justify-items-stretch",
        className,
      )}
      {...props}
    >
      <PaneItem justify="start" hint="chat">
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with clear borders and transparent background.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </PaneItem>
      <PaneItem justify="stretch">
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with clear borders and transparent background.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </PaneItem>
      <PaneItem justify="end" hint="input">
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with clear borders and transparent background.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </PaneItem>
    </div>
  );
}
