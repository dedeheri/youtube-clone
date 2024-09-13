import { prisma } from "@/lib/prisma.db";
import { response } from "@/lib/response";
import { session } from "@/lib/user-session";

export const POST = async (req: Request) => {
  try {
    const userSession = await session();
    const { like, videoId } = await req.json();

    const video = await prisma.video.findFirst({
      where: { id: videoId },
    });

    if (video) {
      const likeResult = await prisma?.like?.create({
        data: {
          like,
          userId: userSession?.user?.id,
          videoId,
        },
      });

      await prisma.video.update({
        where: { id: videoId },
        data: {
          likeId: likeResult?.id,
        },
      });
    }

    return response({
      message: "Success",
      success: true,
      data: [],
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

export const GET = async (req: Request) => {
  try {
    const userSession = await session();

    const { searchParams } = new URL(req.url);
    const videoId = searchParams.get("videoId") as string;

    const like = await prisma.like.findMany({
      where: { videoId, like: true },
    });

    let likes = {
      totalLike: like.length,
      userLike: false,
    };

    like?.find((find) => {
      return find?.userId === userSession?.user?.id
        ? (likes.userLike = true)
        : (likes.userLike = false);
    });

    return response({
      message: "Success",
      success: true,
      data: likes,
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
