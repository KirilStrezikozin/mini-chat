import { Plus } from "lucide-react";
import { TextInput } from "./text-input";
import { Button } from "./ui/button";
import { ItemActions, ItemContent } from "./ui/item";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function MessageInput() {
  return (
    <>
      <ItemContent className="flex h-full flex-row justify-items-stretch">
        <TextInput
          className="h-full text-lg font-medium"
          placeholder="Message @username"
        />
      </ItemContent>
      <ItemActions className="flex h-full flex-col">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="p-0">
              <Plus className="h-8 w-8" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Attach images and files</p>
          </TooltipContent>
        </Tooltip>
      </ItemActions>
    </>
  );
}
