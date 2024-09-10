import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./prisma.db";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = token.access_token;
      }
      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          name: token.name,
        },
      };
    },

    async signIn({ profile, user }): Promise<any> {
      try {
        const users = await prisma.user.findUnique({
          where: { email: profile?.email },
        });

        if (!users) {
          await prisma.user.create({
            data: {
              name: user?.name as string,
              email: user?.email as string,
              image: user?.image as string,
            },
          });
        }
        return true;
      } catch (error) {
        return false;
      }
    },
  },
  secret: "thisissecret",
};
