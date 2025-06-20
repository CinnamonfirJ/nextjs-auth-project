import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const email = "test@admin.com";
        const password = "secret123";

        if (
          credentials?.email === email &&
          credentials?.password === password
        ) {
          return { email, password };
        } else {
          throw new Error("Invalid credentials.");
        }
      },
      //  authorize: async (credentials) => {
      //   const validatedCredentials = schema.parse(credentials);

      //   const user = await db.user.findFirst({
      //     where: {
      //       email: validatedCredentials.email,
      //       password: validatedCredentials.password,
      //     },
      //   });

      //   if (!user) {
      //     throw new Error("Invalid credentials.");
      //   }

      //   return user;
      // },
    }),
  ],
});
