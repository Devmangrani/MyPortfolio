import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  href: string;
  description: string;
  image: string;
  type: "blog" | "notion";
  className?: string;
}

export function BlogCard({
  title,
  href,
  description,
  image,
  type,
  className,
}: BlogCardProps) {
  return (
    <Link href={href} target="_blank" className="block">
      <Card
        className={cn(
          "group overflow-hidden border transition-all duration-300 hover:shadow-lg",
          className
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            <Badge variant={type === "notion" ? "secondary" : "default"}>
              {type}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
} 