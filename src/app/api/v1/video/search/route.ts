import { prisma } from "@/lib/prisma.db";
import { response } from "@/lib/response";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);

    const searchQuery = searchParams.get("search_query") as string;

    const [video, channel] = await prisma.$transaction([
      prisma.video.findMany({
        where: {
          title: { contains: searchQuery, mode: "insensitive" },
        },
        include: { channel: true },
      }),

      prisma.channel.findMany({
        where: {
          name: { contains: searchQuery, mode: "insensitive" },
        },
      }),
    ]);

    const result = {
      channel: channel,
      video: video,
    };

    if (video.length === 0 && channel.length === 0) {
      return response({
        message: `Search ${searchQuery} not found`,
        success: false,
        data: [],
        status: 404,
      });
    } else {
      return response({
        message: "Success",
        success: true,
        data: result,
        status: 200,
      });
    }
  } catch (error) {
    return response({
      message: "error",
      error: "Something went wrong",
      status: 500,
    });
  }
};
