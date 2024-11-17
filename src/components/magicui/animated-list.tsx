import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedList({ children, className }: AnimatedListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let timeoutId: NodeJS.Timeout;
    const scroll = () => {
      if (!list) return;
      
      if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        list.scrollTop = 0;
      } else {
        list.scrollTop += 1;
      }
      
      timeoutId = setTimeout(scroll, 50);
    };

    scroll();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={listRef}
      className={cn("overflow-hidden", className)}
    >
      {children}
    </div>
  );
}