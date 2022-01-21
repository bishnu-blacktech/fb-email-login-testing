import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        "530820882611-43f7pdmcplr2jo00c77ktk271nua4u0q.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // FacebookProvider({
    //   clientId: `${process.env.FACEBOOK_CLIENT_ID}`,
    //   clientSecret: `${process.env.FACEBOOK_CLIENT_SECRET}`,
    // }),
  ],

  // pages: {
  //   signIn: "/auth/signin",
  // },
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true;
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return baseUrl;
  //   },
  //   async session({ session, user, token }) {
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     return token;
  //   },
  // },
});
