// components/ui/Button.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";
type Rounded = "none" | "md" | "xl" | "full";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  rounded?: Rounded;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--lovell-logo-text)] text-white hover:bg-[color-mix(in_srgb,var(--lovell-logo-text)_90%,black)] focus-visible:ring-2 focus-visible:ring-[var(--lovell-teal)]",
  outline:
    "border border-[var(--lovell-logo-text)] text-[var(--lovell-logo-text)] hover:bg-[color-mix(in_srgb,var(--lovell-logo-text)_6%,white)] focus-visible:ring-2 focus-visible:ring-[var(--lovell-teal)]",
  ghost:
    "text-[var(--lovell-logo-text)] hover:bg-[var(--lovell-bg-soft)] focus-visible:ring-2 focus-visible:ring-[var(--lovell-teal)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-lg",
};

const roundedClasses: Record<Rounded, string> = {
  none: "rounded-none",
  md: "rounded-md",
  xl: "rounded-xl",
  full: "rounded-full",
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  rounded = "xl",
  isLoading,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors",
        "focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none gap-2",
        variantClasses[variant],
        sizeClasses[size],
        roundedClasses[rounded],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </button>
  );
}
