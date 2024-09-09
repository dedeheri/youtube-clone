import { prisma } from "@/lib/prisma.db";
import { response } from "@/lib/response";

export const POST = async (req: Request) => {
  try {
    const { like, dislike, userId, videoId } = await req.json();

    const video = await prisma.video.findFirst({
      where: { id: videoId },
    });

    if (video) {
      await prisma?.like?.create({
        data: {
          like,
          dislike,
          userId,
          videoId,
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
