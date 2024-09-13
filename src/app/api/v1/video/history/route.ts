import { prisma } from "@/lib/prisma.db";
import { response } from "@/lib/response";
import { session } from "@/lib/user-session";

export const GET = async (req: Request) => {
  try {
    const userSession = await session();

    const history = await prisma.history.findMany({
      where: { userId: userSession?.user?.id as string },
      include: { video: { include: { channel: true } } },
    });

    if (history?.length === 0) {
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
        data: history,
        status: 200,
      });
    }
  } catch (error) {
    return response({
      success: false,
      message: "error",
      error: "Something went wrong",
      status: 500,
      data: [],
    });
  }
};
