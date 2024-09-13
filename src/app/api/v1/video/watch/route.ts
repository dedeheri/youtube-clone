import { prisma } from "@/lib/prisma.db";
import { response } from "@/lib/response";
import { session } from "@/lib/user-session";

export const GET = async (req: Request) => {
  const userSession = await session();

  try {
    const { searchParams } = new URL(req.url);
    const v = searchParams.get("v") as string;

    const [user, video] = await prisma.$transaction([
      prisma.user.findFirst({
        where: { email: userSession?.user?.email as string },
      }),

      prisma.video.findFirst({
        where: {
          videoUrl: v,
        },
        include: {
          channel: true,
          comment: true,
          Like: true,
        },
      }),
    ]);

    //   where: { email: userSession?.user?.email as string },
    // });

    // const video = await prisma.video.findFirst({
    //   where: {
    //     videoUrl: v,
    //   },
    //   include: {
    //     channel: true,
    //     comment: true,
    //     Like: true,
    //   },
    // });

    const like = await prisma.like.findMany({
      where: { videoId: video?.id },
    });

    const history = await prisma.history.findFirst({
      where: { userId: user?.id, videoId: video?.id },
    });

    if (!video) {
      return response({
        success: false,
        message: "error",
        error: "This video isn't available anymore",
        status: 404,
      });
    }

    if (!history) {
      await prisma.history.create({
        data: {
          userId: user?.id,
          videoId: video?.id,
        },
      });
    }

    // push view count
    await prisma.video.update({
      where: { id: video?.id },
      data: { viewCount: (video?.viewCount as number) + 1 },
    });

    const finalResult = {
      ...video,
      likeCount: like.length,
    };

    return response({
      message: "Success",
      success: true,
      data: finalResult,
      status: 200,
    });
  } catch (error) {
    return response({
      success: false,
      message: "error",
      error: "Something went wrong",
      status: 500,
    });
  }
};
