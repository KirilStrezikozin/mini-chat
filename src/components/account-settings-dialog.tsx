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
import { LogOut, Settings, SquareX } from "lucide-react";

export function AccountSettingsDialog() {
  return (
    <Dialog>
      <form className="h-full w-full">
        <DialogTrigger asChild>
          <Button variant="outline" className="p-0">
            <Settings className="h-8 w-8" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full font-mono" showCloseButton={false}>
          <DialogHeader className="pt-50 pb-10">
            <DialogTitle>My User</DialogTitle>
            <DialogDescription>@myusername</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-2 py-2">
            <Button variant="outline" className="p-0">
              <LogOut className="h-8 w-8" />
              Logout
            </Button>
            <Button variant="destructive" className="p-0">
              <SquareX className="h-8 w-8" />
              Delete Account
            </Button>
          </div>
          <DialogFooter className="text-muted-foreground flex flex-row justify-start sm:justify-start">
            <span className="text-xs">Account and settings</span>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
