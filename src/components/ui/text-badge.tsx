import { ICONS } from "@/constants";
import { ComponentProps, ReactNode } from "react";
import { Badge } from "./badge";

interface TextBadgeProps extends ComponentProps<"p"> {
  icon: string;
}

const TextBadge = ({ children, icon }: TextBadgeProps) => {
  return (
    <Badge
      className="flex w-fit flex-row gap-2 border-2 border-primary px-3 py-1 text-base uppercase"
      variant="outline"
    >
      {ICONS[icon as keyof typeof ICONS]}
      <span className="font-bold">{children}</span>
    </Badge>
  );
};

export default TextBadge;
