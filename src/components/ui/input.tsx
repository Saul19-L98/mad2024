import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixI?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefixI, ...props }, ref) => {
    return (
      <>
        {prefixI && (
          <div className="absolute left-0 flex items-center px-3 top-2">
            {prefixI}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border focus-visible:border-[#1CCFFA] focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
            {
              ["px-3"]: !prefixI,
              ["pl-10 pr-6"]: prefixI,
            },
            className
          )}
          ref={ref}
          {...props}
        />
        -
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
