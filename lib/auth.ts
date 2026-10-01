import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../lib/generated/prisma/client";
import { nextCookies } from "better-auth/next-js";

const prisma = new PrismaClient()

export const auth = betterAuth({
  database: prismaAdapter(prisma, {provider: "postgresql"}),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false  // Stop automatic signIn
  },
  socialProviders: {
    github: {
      clientId: "",
      clientSecret: "",
    },
    google: {
      clientId: "",
      clientSecret: "",
    },
  },
  plugins: [nextCookies()], //Must be the last plugin to pass. If there are any other plugins, they must be listed before nextCookies
})

