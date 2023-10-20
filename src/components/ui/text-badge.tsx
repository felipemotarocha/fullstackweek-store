import { ICONS } from "@/constants";
import { ComponentProps, ReactNode } from "react";
import { Badge } from "./badge";

interface TextBadgeProps extends ComponentProps<"p"> {
  icon: string,
}

const TextBadge = ({ children, icon }: TextBadgeProps) => {
  return (
    <Badge className="border-primary border-2 px-3 py-1 uppercase text-base flex flex-row gap-2 w-fit" variant="outline">
      {ICONS[icon as keyof typeof ICONS]}
      <span className="font-bold">{children}</span>
    </Badge>
  );
}

export default TextBadge;