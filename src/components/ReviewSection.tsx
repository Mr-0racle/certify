import { cn } from "@/lib/utils";
import Marquee from "./magicui/marquee";
import { Twitter } from "lucide-react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Certify has revolutionized how we handle certificate verification. The blockchain integration is seamless.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Finally, a secure and efficient way to verify certificates. This is exactly what the education sector needed.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "The speed and security of certificate verification through Certify is unmatched. Highly recommended!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Implementing Certify has significantly reduced our administrative overhead. Amazing solution!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "The transparency and immutability of blockchain verification gives us complete peace of mind.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Certify has made certificate fraud a thing of the past. This is the future of verification.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-purple-500/20 bg-black/50 hover:bg-purple-900/20",
        "transform-gpu transition-all duration-300 ease-out hover:scale-105"
      )}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-white/40">{username}</p>
          </div>
        </div>
        <Twitter className="h-4 w-4 text-purple-400" />
      </div>
      <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
    </figure>
  );
};

export default function ReviewSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
        What People Are Saying
      </h2>
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-purple-500/20 bg-black/50 md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black" />
      </div>
    </section>
  );
}