import { cn } from "@/lib/utils";

interface HyperTextProps {
  text: string;
  className?: string;
}

export default function HyperText({ text, className }: HyperTextProps) {
  return (
    <span
      className={cn(
        "animate-text-gradient bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[200%_auto] bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </span>
  );
}