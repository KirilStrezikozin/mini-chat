import { cn } from "@/lib/utils";
import { PaneItem } from "./pane";
import { Button } from "./ui/button";
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "./ui/item";

export function ChatSearchbar() {
  return null;
}

export function ChatSidebar({
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
      <PaneItem justify="start" hint="search">
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
      <PaneItem justify="stretch" hint="chats">
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
      <PaneItem justify="end" hint="user">
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
