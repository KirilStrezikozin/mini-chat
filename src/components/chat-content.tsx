import { cn } from "@/lib/utils";
import { ChatProfileDialog } from "./chat-profile-dialog";
import MessageInput from "./message-input";
import { PaneItem } from "./pane";
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
        <ItemContent className="flex flex-row items-center space-x-4">
          <ItemTitle className="text-lg">User Name</ItemTitle>
          <ItemDescription className="text-md">@username</ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChatProfileDialog />
        </ItemActions>
      </PaneItem>
      <PaneItem justify="stretch">
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with clear borders and transparent background.
          </ItemDescription>
        </ItemContent>
        <ItemActions></ItemActions>
      </PaneItem>
      <PaneItem
        justify="end"
        hint="input"
        className="align-start flex max-h-120 flex-col"
        itemClassName="h-max md:h-max min-h-24"
      >
        <MessageInput />
      </PaneItem>
    </div>
  );
}
