import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { CircleUserRound, SquareX } from "lucide-react";

export function ChatProfileDialog() {
  return (
    <Dialog>
      <form className="h-full w-full">
        <DialogTrigger asChild>
          <Button variant="outline" className="p-0">
            <CircleUserRound className="h-8 w-8" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full font-mono" showCloseButton={false}>
          <DialogHeader className="pt-50 pb-10">
            <DialogTitle>User Name</DialogTitle>
            <DialogDescription>@username</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col py-2">
            <Button variant="destructive" className="p-0">
              <SquareX className="h-8 w-8" />
              Leave chat
            </Button>
          </div>
          <DialogFooter className="text-muted-foreground flex flex-row justify-start sm:justify-start">
            <span className="text-xs">User profile and chat settings</span>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
