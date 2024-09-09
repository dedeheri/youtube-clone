import { prisma } from "@/lib/prisma.db";
import { response } from "@/lib/response";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    await prisma.filter.createMany({
      data: body,
      skipDuplicates: true,
    });

    return response({ message: "success", error: "", status: 200 });
  } catch (error) {
    return response({
      message: "error",
      error: "Something went wrong",
      status: 500,
    });
  }
};

export const GET = async () => {
  try {
    const result = await prisma.filter.findMany();

    if (!result) {
      return response({
        success: true,
        message: "Filter not found",
        status: 404,
        data: [],
      });
    }

    return response({
      success: true,
      message: "Success",
      status: 200,
      data: result,
    });
  } catch (error) {
    return response({
      success: false,
      message: "Something went wrong",
      error: JSON.stringify((error as any)?.name),
      status: 500,
    });
  }
};
