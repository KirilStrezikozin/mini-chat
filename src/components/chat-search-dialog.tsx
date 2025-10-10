import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Scrollable from "./scrollable";

export function ChatSearchDialog() {
  return (
    <Dialog>
      <form className="h-full w-full">
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-muted-foreground h-full w-full border-none"
          >
            Find or start a new chat
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full font-mono" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>
              <Input
                className="text-md h-18 font-medium sm:text-2xl"
                placeholder="Search by @username or name"
              />
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Scrollable className="relative h-80 px-2">
              <div className="flex flex-col space-y-2 py-4">
                {[...Array(50)].map((_, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    className="flex h-full w-full flex-row justify-start border py-6"
                  >
                    User Chat {i + 1}
                  </Button>
                ))}
              </div>
            </Scrollable>
          </div>
          <DialogFooter className="text-muted-foreground flex flex-row justify-start sm:justify-start">
            <span className="text-xs">Start with @ to search by username</span>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
