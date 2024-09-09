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
    console.log(error);
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

    const result = await prisma.video.findMany({
      include: {
        channel: true,
      },
    });

    if (filter === "All") {
      return response({
        message: "Success",
        success: true,
        data: result,
        status: 200,
      });
    } else {
      const filterResult = result.filter((data) => {
        return data?.channel?.name
          ?.toLowerCase()
          .includes(filter?.toLowerCase() || "");
      });

      return response({
        message: "Success",
        success: true,
        data: filterResult,
        status: 200,
      });
    }
  } catch (error) {
    console.log(error);
    return response({
      message: "error",
      error: "Something went wrong",
      status: 500,
    });
  }
};
