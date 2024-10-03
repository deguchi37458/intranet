import { prisma } from "@/lib/prisma";
import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

type ClientType = {
  clientId: string;
  clientSecret: string;
};
declare module "next-auth" {
  interface User {
    username: string;
  }
  interface Session extends DefaultSession {
    user: {
      id: number;
      username: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    username: string;
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as ClientType),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      const user = await prisma.user.findUnique({
        where: { email: session?.user?.email || "" },
      });

      if (user) {
        session.user.id = user.id;
        session.user.username = user.username;
      }
      return session;
    },
    async redirect() {
      return `/welcome`;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
