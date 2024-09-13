import { prisma } from "@/lib/prisma.db";
import { response } from "@/lib/response";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    await prisma.video.createMany({
      data: data,
      skipDuplicates: true,
    });

    return response({ message: "Success", status: 200 });
  } catch (error) {
    return response({
      message: "error",
      error: "Something went wrong",
      status: 500,
    });
  }
};

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);

    const filter = searchParams.get("filter") as string;

    const video = await prisma.video.findMany({
      where: {
        channel: {
          name: {
            contains: filter === "All" ? "" : filter,
            mode: "insensitive",
          },
        },
      },

      include: {
        channel: true,
      },
    });

    if (video.length === 0) {
      return response({
        success: false,
        message: "error",
        error: "This list has no videos.",
        status: 404,
      });
    } else {
      return response({
        message: "Success",
        success: true,
        data: video,
        status: 200,
      });
    }
  } catch (error) {
    return response({
      success: false,
      message: "error",
      error: "Something went wrong",
      status: 500,
    });
  }
};
