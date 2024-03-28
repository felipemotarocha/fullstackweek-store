import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "./button";
import { cn } from "@/lib/utils";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
  textWaiting: string;
}

const LoadingButton = ({
  loading,
  textWaiting,
  className,
  children,
  ...props
}: LoadingButtonProps) => {
  return (
    <Button
      disabled={loading}
      className={cn("flex gap-2 font-bold", className)}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 animate-spin" />
          {textWaiting}
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;
