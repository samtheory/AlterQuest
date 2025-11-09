/**
 * EXAMPLE: How to use Tailwind CSS and shadcn/ui in your UI package
 * 
 * This file demonstrates the complete setup we just created.
 * You can delete this file once you understand how everything works.
 */

// ============================================
// 1. USING TAILWIND IN YOUR COMPONENTS
// ============================================

import { cn } from "@/lib/utils";

// Example: A button component using Tailwind classes
export function TailwindButton({ 
  children, 
  variant = "primary",
  className 
}: { 
  children: React.ReactNode; 
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <button
      className={cn(
        // Base styles
        "px-4 py-2 rounded-md font-medium transition-colors",
        // Variant styles
        variant === "primary" && "bg-blue-500 text-white hover:bg-blue-600",
        variant === "secondary" && "bg-gray-200 text-gray-900 hover:bg-gray-300",
        // Allow custom classes to override
        className
      )}
    >
      {children}
    </button>
  );
}

// ============================================
// 2. HOW TO USE IN YOUR NEXT.JS APPS
// ============================================

/**
 * In your apps/web/app/layout.tsx or apps/docs/app/layout.tsx:
 * 
 * import "@repo/ui/styles.css"  // Import Tailwind CSS
 * import { TailwindButton } from "@repo/ui/example"
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <TailwindButton variant="primary">
 *           Click me!
 *         </TailwindButton>
 *         {children}
 *       </body>
 *     </html>
 *   );
 * }
 */

// ============================================
// 3. HOW TO ADD SHADCN COMPONENTS
// ============================================

/**
 * To add shadcn components, run these commands in the ui package directory:
 * 
 * cd packages/ui
 * pnpx shadcn@latest add button
 * pnpx shadcn@latest add card
 * pnpx shadcn@latest add input
 * 
 * This will create components in packages/ui/src/components/ui/
 * 
 * Then you can import them:
 * import { Button } from "@repo/ui/components/button"
 * import { Card } from "@repo/ui/components/card"
 */

// ============================================
// 4. UNDERSTANDING THE CN() UTILITY
// ============================================

/**
 * The cn() function intelligently merges Tailwind classes.
 * 
 * Example without cn():
 * className="p-4 text-blue-500 p-2"  
 * // Result: Both p-4 AND p-2 applied (conflict!)
 * 
 * Example with cn():
 * cn("p-4 text-blue-500", "p-2")
 * // Result: Only p-2 applied (conflict resolved!)
 * 
 * This makes it easy to create components with default styles
 * that users can override:
 */

export function FlexibleCard({ className, children }: { 
  className?: string; 
  children: React.ReactNode 
}) {
  return (
    <div className={cn(
      "p-4 rounded-lg bg-white shadow",  // Default styles
      className  // User can override any of these
    )}>
      {children}
    </div>
  );
}

// Usage: <FlexibleCard className="p-8 bg-blue-50">...</FlexibleCard>
// Result: p-8 (not p-4) and bg-blue-50 (not bg-white) will be applied
