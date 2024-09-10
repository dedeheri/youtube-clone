import { prisma } from "@/lib/prisma.db";
import { response } from "@/lib/response";
import { session } from "@/lib/user-session";

export const GET = async (req: Request) => {
  try {
    const userSession = await session();

    const user = await prisma.user.findFirst({
      where: { email: userSession?.user?.email as string },
    });

    const [history, channel] = await prisma.$transaction([
      prisma.history.findMany({
        where: { userId: user?.id },
        include: { video: true },
      }),
      prisma.channel.findMany(),
    ]);

    const result: any = [];

    history.map(async (history: any) => {
      const fil = channel.find((fi) => fi.id === history?.video?.channelId);

      result.push({
        id: history?.id,
        video: {
          id: history?.video?.id,
          title: history?.video?.title,
          description: history?.video?.description,
          thumbnail: history?.video?.thumbnail,
          videoUrl: history?.video?.videoUrl,
          viewCount: history?.video?.viewCount,
        },

        channel: {
          ...fil,
        },
      });
    });

    return response({
      message: "Success",
      success: true,
      data: result,
      status: 200,
    });
  } catch (error) {
    console.log(error);

    return response({
      success: false,
      message: "error",
      error: "Something went wrong",
      status: 500,
      data: [],
    });
  }
};
