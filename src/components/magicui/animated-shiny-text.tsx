import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedShinyText({
  children,
  className,
}: AnimatedShinyTextProps) {
  return (
    <span
      className={cn(
        "inline-flex animate-shine bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[200%_auto] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}