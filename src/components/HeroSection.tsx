import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { RainbowButton } from "./magicui/rainbow-button";
import AnimatedGradientText from "./magicui/animated-gradient-text";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/20 to-black" />
      
      {/* Stars background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 0%, black 100%), repeating-linear-gradient(transparent 0%, transparent 50%, black 50%, black 100%)' }} />

      <div className="relative pt-32 px-4 sm:px-6 lg:px-8">
        {/* Top pill button */}
        <div className="flex justify-center mb-16">
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
              Introducing Certify
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </div>

        {/* Main content */}
        <div className="mx-auto max-w-[120rem] text-center">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
            Certify is the new way{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent">
                to verify certificates.
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Beautifully designed, blockchain-powered certificate verification system built with
            security, transparency, and speed in mind.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <RainbowButton onClick={() => window.open('https://certifi-dr6z.vercel.app/', '_blank')}>
              Get Started for free
              <ArrowRight className="ml-2 h-4 w-4" />
            </RainbowButton>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/10 bg-white/5 text-white backdrop-blur hover:bg-white/10"
              onClick={() => window.open('https://certify-docs.vercel.app', '_blank')}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}