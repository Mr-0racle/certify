import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "group inline-flex items-center rounded-full border border-white/5 bg-white/5 px-5 py-2 text-sm text-white backdrop-blur transition-colors hover:border-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}