import "next-auth";

declare module "next-auth" {
  interface signIn {
    name: string;
  }
}
