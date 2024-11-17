import { Shield, Award, Clock, FileText } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { BentoCard, BentoGrid } from "./magicui/bento-grid";
import Marquee from "./magicui/marquee";
import ClientTweetCard from "./magicui/client-tweet-card";
import { cn } from "@/lib/utils";

const certificates = [
  {
    name: "diploma.pdf",
    body: "Academic credentials secured and verified through our blockchain system.",
  },
  {
    name: "certificate.pdf",
    body: "Professional certifications with tamper-proof verification.",
  },
  {
    name: "badge.svg",
    body: "Digital badges representing verified achievements on the blockchain.",
  },
  {
    name: "transcript.pdf",
    body: "Academic records with instant verification capabilities.",
  },
];

const features = [
  {
    Icon: Shield,
    name: "Blockchain Security",
    description: "Immutable and secure verification powered by blockchain technology.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {certificates.map((cert, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-purple-500/20 bg-black/50 hover:bg-purple-900/20",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium text-white">
                {cert.name}
              </figcaption>
              <blockquote className="mt-2 text-xs text-gray-400">{cert.body}</blockquote>
            </div>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Clock,
    name: "Instant Issuance",
    description: "Issue certificates instantly with automated verification.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <ClientTweetCard
        id="1668408059125702661"
        className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: Award,
    name: "Tamper-Proof Authentication",
    description: "Guaranteed authenticity with cryptographic security.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <img
          src="https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&w=800&q=80"
          alt="Security"
          className="h-full w-full object-cover rounded-lg opacity-30"
        />
      </div>
    ),
  },
  {
    Icon: FileText,
    name: "Certificate Management",
    description: "Track and manage all your certificates in one place.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date()}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
        Key Features
      </h2>
      <BentoGrid className="max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}