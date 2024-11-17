import { FileText, Bell, Share2, Calendar } from "lucide-react";
import { BentoCard, BentoGrid } from "./magicui/bento-grid";
import Marquee from "./magicui/marquee";
import { AnimatedList } from "./magicui/animated-list";
import { cn } from "@/lib/utils";

const steps = [
  {
    name: "Create Certificate",
    description: "Design and generate digital certificates with our intuitive tools.",
    time: "Step 1",
    icon: "🎓",
    color: "#00C9A7",
  },
  {
    name: "Issue Certificate",
    description: "Securely issue certificates to recipients via blockchain.",
    time: "Step 2",
    icon: "📜",
    color: "#FFB800",
  },
  {
    name: "Verify Certificate",
    description: "Instant verification through our blockchain network.",
    time: "Step 3",
    icon: "✅",
    color: "#1E86FF",
  },
].map(step => ({
  ...step,
  name: `${step.name}`,
  description: `${step.description}`,
}));

const notifications = Array.from({ length: 10 }, () => steps).flat();

const StepCard = ({ name, description, icon, color, time }: typeof steps[0]) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-purple-400">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const features = [
  {
    Icon: FileText,
    name: "Create",
    description: "Design and generate certificates using our platform.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {steps.map((step, idx) => (
          <StepCard key={idx} {...step} />
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Bell,
    name: "Issue",
    description: "Securely issue certificates on the blockchain.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-full overflow-hidden">
        <AnimatedList className="h-full">
          {notifications.map((item, idx) => (
            <StepCard {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    ),
  },
  {
    Icon: Share2,
    name: "Share",
    description: "Share verified certificates with institutions.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
          alt="Sharing"
          className="h-full w-full object-cover rounded-lg opacity-30"
        />
      </div>
    ),
  },
  {
    Icon: Calendar,
    name: "Track",
    description: "Monitor certificate status and verification.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-full overflow-hidden">
        <AnimatedList className="h-full">
          {notifications.slice(0, 5).map((item, idx) => (
            <StepCard {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    ),
  },
];

export default function WorkingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
        How It Works
      </h2>
      <BentoGrid className="max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}