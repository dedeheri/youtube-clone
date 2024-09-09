import { prisma } from "@/lib/prisma.db";
import { response } from "@/lib/response";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);

    const v = searchParams.get("v") as string;

    const result = await prisma.video.findFirst({
      where: {
        videoUrl: v,
      },
      include: {
        channel: true,
        comment: true,
      },
    });

    if (!result) {
      return response({
        success: false,
        message: "error",
        error: "This video isn't available anymore",
        status: 404,
      });
    }

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
    });
  }
};
