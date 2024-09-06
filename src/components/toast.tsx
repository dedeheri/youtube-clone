import React from "react";
import { Button } from "./ui/button";
import { useToast } from "@/lib/use-toast";

const ToastAlert = ({ icon, title }: any) => {
  const { toast } = useToast();
  return (
    <Button
      variant={"secondary"}
      className="rounded-full space-x-2"
      onClick={() => {
        toast({
          description: "This feature is not available",
        });
      }}
    >
      {icon}
      <span>{title}</span>
    </Button>
  );
};

export default ToastAlert;
