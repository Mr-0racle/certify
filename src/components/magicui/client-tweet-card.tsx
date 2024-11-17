import { cn } from "@/lib/utils";

interface ClientTweetCardProps {
  id: string;
  className?: string;
}

export default function ClientTweetCard({ id, className }: ClientTweetCardProps) {
  return (
    <div className={cn("w-full overflow-hidden rounded-lg", className)}>
      <blockquote className="twitter-tweet" data-conversation="none">
        <a href={`https://twitter.com/user/status/${id}`}></a>
      </blockquote>
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </div>
  );
}