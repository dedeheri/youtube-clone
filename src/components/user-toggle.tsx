import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

interface Props {
  user: any;
}

const UserToggle = ({ user }: Props) => {
  return (
    <Popover>
      <PopoverTrigger className="z-30">
        <Image
          className="rounded-full"
          blurDataURL={user?.blurDataURL}
          alt={user?.name}
          src={user?.image}
          width={35}
          height={35}
        />
      </PopoverTrigger>
      <PopoverContent>{user?.name}</PopoverContent>
    </Popover>
  );
};

export default UserToggle;
