import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { IconDotsVertical } from "@tabler/icons-react";
import {
  DontRecommendChannelIcon,
  DownloadIcon,
  NotInsterestedIcon,
  ReportIcon,
  SaveToPlaylistIcon,
  ShareIcon,
  WatchLaterIcon,
} from "./icons";

const DropdownVideo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="rounded-full size-9 p-1">
          <IconDotsVertical className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[18rem] py-4 px-0 rounded-xl shadow-2xl border-none">
        <DropdownMenuItem>
          <div className="p-2 flex space-x-5 h-6 items-center">
            <WatchLaterIcon />
            <span>Save to Watch later</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <div className="p-2 flex space-x-5 h-6 items-center">
            <SaveToPlaylistIcon />
            <span>Save to Playlist</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <div className="p-2 flex space-x-5 h-6 items-center">
            <DownloadIcon />
            <span>Download</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <div className="p-2 flex space-x-5 h-6 items-center">
            <ShareIcon />
            <span>Share</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <div className="p-2 flex space-x-5 h-6 items-center">
            <NotInsterestedIcon />
            <span>Not interested</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <div className="p-2 flex space-x-5 h-6 items-center">
            <DontRecommendChannelIcon />
            <span>Don't Recommend channel</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <div className="p-2 flex space-x-5 h-6 items-center">
            <ReportIcon />
            <span>Report</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownVideo;
