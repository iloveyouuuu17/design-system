import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const primaryButtonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2 shrink-0",
    "rounded-[var(--radius-md)] cursor-pointer select-none whitespace-nowrap",
    "bg-primary text-primary-foreground",
    "transition-all duration-150 ease-out",
    "outline-none",
    "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-40 disabled:cursor-not-allowed",
    "after:absolute after:inset-0 after:min-w-[44px] after:min-h-[44px] after:m-auto",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export type ButtonSize = "sm" | "md" | "lg";

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children: React.ReactNode;
  forceState?: "default" | "hover" | "active" | "focus" | "disabled";
}

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ size = "md", leadingIcon, trailingIcon, children, className, forceState, disabled, ...props }, ref) => {
    const isDisabled = disabled || forceState === "disabled";
    const stateClasses = clsx({
      "brightness-[0.88]": forceState === "hover",
      "brightness-75 scale-[0.98]": forceState === "active",
      "ring-2 ring-primary ring-offset-2 ring-offset-background": forceState === "focus",
    });
    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          primaryButtonVariants({ size }),
          stateClasses,
          !forceState && ["hover:brightness-[0.88]", "active:brightness-75 active:scale-[0.98]"],
          className
        )}
        {...props}
      >
        {leadingIcon && <span className="shrink-0 flex items-center" aria-hidden="true">{leadingIcon}</span>}
        <span>{children}</span>
        {trailingIcon && <span className="shrink-0 flex items-center" aria-hidden="true">{trailingIcon}</span>}
      </button>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";
