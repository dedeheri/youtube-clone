import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IUser } from "@/interface/user";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { logout } from "@/assets";
import { useTheme } from "next-themes";
import { AppearanceIcon } from "./icons";
import { signOut } from "next-auth/react";

interface Props {
  user: IUser;
}

const UserToggle = ({ user }: Props) => {
  const { setTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger className="z-30">
        <Image
          className="rounded-full"
          alt={user?.user?.name}
          src={user?.user?.image}
          width={32}
          height={32}
        />
      </PopoverTrigger>
      <PopoverContent className="rounded-xl border-none shadow-2xl space-y-4 px-0">
        {/* user */}
        <div className="flex w-full items-center space-x-5 px-5">
          <Image
            className="rounded-full"
            alt={user?.user?.name}
            src={user?.user?.image}
            width={37}
            height={37}
          />

          <div>
            <p>{user?.user?.name}</p>
            <h1 className="text-sm text-blue-600">View your chanel</h1>
          </div>
        </div>

        <Separator />

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="space-x-5 w-full flex justify-start py-5"
              >
                <AppearanceIcon />
                <span>Appearence</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            onClick={() => signOut()}
            variant="ghost"
            className="space-x-5 w-full flex justify-start py-5"
          >
            <Image src={logout} alt={"logout"} />
            <span>Logout</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserToggle;
