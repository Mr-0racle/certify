import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  Icon?: React.ElementType;
  name: string;
  description: string;
  className?: string;
  background?: React.ReactNode;
  href?: string;
  cta?: string;
}

export function BentoCard({
  Icon,
  name,
  description,
  className,
  background,
  href,
  cta,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/50 to-black p-6",
        "hover:border-purple-500/40 transition-colors",
        className
      )}
    >
      <div className="relative z-10">
        {Icon && <Icon className="h-8 w-8 text-purple-400" />}
        <h3 className="mt-4 text-xl font-semibold text-white">{name}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
        {href && cta && (
          <a
            href={href}
            className="mt-4 inline-block text-sm text-purple-400 hover:text-purple-300"
          >
            {cta} →
          </a>
        )}
      </div>
      {background && (
        <div className="pointer-events-none absolute inset-0 z-0">{background}</div>
      )}
    </div>
  );
}