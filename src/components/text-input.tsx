"use client";

import { cn } from "@/lib/utils";
import { RefObject, useCallback, useEffect, useRef } from "react";

interface TextInputProps extends React.ComponentProps<"textarea"> {
  inputRef?: RefObject<HTMLTextAreaElement | null>;
}

/**
 * Textarea with automatic width and height adjustment to fill the available
 * width. Custom hooks and callbacks are used instead of `field-sizing-content`
 * for this component to also function in Firefox and Safari.
 */
export function TextInput({ className, inputRef, ...props }: TextInputProps) {
  const internalRef = useRef<HTMLTextAreaElement>(null);
  const ref = inputRef || internalRef; /* Use either given or internal ref. */

  const setAutoHeight = useCallback((elem: HTMLTextAreaElement | null) => {
    if (!elem) return;
    elem.style.height = "auto";
    if (elem.value) elem.style.height = elem.scrollHeight + "px";
  }, []);

  useEffect(() => {
    console.log(ref.current);
    const handleSetAutoHeight = () => setAutoHeight(ref.current);
    handleSetAutoHeight();

    window.addEventListener("resize", handleSetAutoHeight);
    return () => {
      window.removeEventListener("resize", handleSetAutoHeight);
    };
  }, [setAutoHeight, ref]);

  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      rows={1}
      onInput={(e) => setAutoHeight(e.currentTarget)}
      /* Loose focus if ESC is pressed down. */
      onKeyDown={(e) => {
        if (e.code === "Escape") e.currentTarget.blur();
      }}
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input w-full min-w-0 resize-none px-3 py-1 text-base transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}
