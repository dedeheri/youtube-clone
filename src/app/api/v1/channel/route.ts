import { prisma } from "@/lib/prisma.db";
import { response } from "@/lib/response";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    await prisma.channel.createMany({
      data: data,
    });

    console.log(data);

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
