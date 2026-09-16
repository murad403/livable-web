import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-hover shadow-xs hover:shadow-md",
        customPill:
          "bg-primary text-white hover:bg-primary-hover font-medium text-base sm:text-lg h-12 sm:h-13 px-8 sm:px-10 rounded-full [clip-path:polygon(16px_0,calc(100%-16px)_0,100%_16px,100%_calc(100%-16px),calc(100%-16px)_100%,16px_100%,0_calc(100%-16px),0_16px)] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-xs",
        outline:
          "border border-gray-200 bg-white text-title hover:bg-gray-50 hover:border-gray-300",
        secondary:
          "bg-gray-100 text-title hover:bg-gray-200",
        ghost:
          "hover:bg-gray-100 text-title",
        link:
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-7 py-2.5 text-sm sm:text-base",
        sm: "h-9 rounded-full px-4 text-xs sm:text-sm",
        lg: "h-14 rounded-full px-9 text-base sm:text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "customPill",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
