import { cn } from "@/lib/utils";
import { AccountSettingsDialog } from "./account-settings-dialog";
import { ChatSearchDialog } from "./chat-search-dialog";
import { PaneItem } from "./pane";
import Scrollable from "./scrollable";
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
        "flex h-full w-full flex-col justify-between justify-items-stretch",
        className,
      )}
      {...props}
    >
      <PaneItem
        justify="start"
        hint="search"
        itemClassName="grid justify-items-stretch"
        className="h-18 md:h-24"
      >
        <ChatSearchDialog />
      </PaneItem>
      <PaneItem justify="stretch" hint="chats">
        <ItemContent>
          <Scrollable className="px-2">
            <div className="flex flex-col space-y-2 py-4">
              {[...Array(50)].map((_, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  className="flex h-full w-full flex-row justify-start overflow-hidden border py-6"
                >
                  User Chat {i + 1}
                </Button>
              ))}
            </div>
          </Scrollable>
        </ItemContent>
      </PaneItem>
      <PaneItem justify="end" hint="user" className="h-18 md:h-24">
        <ItemContent>
          <ItemTitle>My User</ItemTitle>
          <ItemDescription>@myusername</ItemDescription>
        </ItemContent>
        <ItemActions>
          <AccountSettingsDialog />
        </ItemActions>
      </PaneItem>
    </div>
  );
}
