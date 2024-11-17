import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  children: React.ReactNode;
  [key: string]: any;
}

export default function Marquee({
  className,
  pauseOnHover = false,
  reverse = false,
  children,
  ...props
}: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    const scroller = scrollerRef.current;
    const scrollerContent = scroller.querySelector("[data-scroller-content]");
    if (!scrollerContent) return;

    const scrollerClone = scrollerContent.cloneNode(true);
    scroller.appendChild(scrollerClone);
  }, []);

  return (
    <div
      ref={scrollerRef}
      className={cn(
        "group flex w-full overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        data-scroller-content
        style={{ 
          animationDirection: reverse ? "reverse" : "normal" 
        }}
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] [animation-duration:var(--duration)] [animation-iteration-count:infinite] [animation-timing-function:linear]",
          !isHovered || !pauseOnHover
            ? "[animation-name:scroll]"
            : "[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
      `}</style>
    </div>
  );
}