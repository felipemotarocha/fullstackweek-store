import { ICONS } from "@/constants";
import { ComponentProps, ReactNode } from "react";
import { Badge } from "./badge";

interface TextBadgeProps extends ComponentProps<"p"> {
  slug: string,
}

const TextBadge = ({ children, slug }: TextBadgeProps) => {
  return (
    <Badge className="border-primary border-2 px-3 py-1 uppercase text-base flex flex-row gap-2 w-fit" variant="outline">
      {ICONS[slug as keyof typeof ICONS]}
      <span className="font-bold">{children}</span>
    </Badge>
  );
}

export default TextBadge;