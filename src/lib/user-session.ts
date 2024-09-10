import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export const session = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
