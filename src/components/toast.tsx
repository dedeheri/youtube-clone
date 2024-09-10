import React from "react";
import { Button } from "./ui/button";
import { useToast } from "@/lib/use-toast";

interface IToastAlert {
  icon: any;
  title?: string;
  className?: string;
}

const ToastAlert = ({ icon, title, className }: IToastAlert) => {
  const { toast } = useToast();
  return (
    <Button
      variant={"secondary"}
      className={`rounded-full space-x-2 ${className}`}
      onClick={() => {
        toast({
          description: "This feature is not available",
        });
      }}
    >
      <div>{icon}</div>

      {title && <span>{title}</span>}
    </Button>
  );
};

export default ToastAlert;
