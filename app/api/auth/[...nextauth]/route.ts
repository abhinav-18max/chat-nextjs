import NextAuth, { Awaitable, RequestInternal, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// @ts-ignore
// @ts-ignore
  export const Options = {
    providers: [CredentialsProvider({
        name: "Credentials", credentials: {
            email: {label: "email", type: "email", placeholder: "jsmith"},
            password: {label: "Password", type: "password"}
        },
        authorize: async function (credentials: Record<"username" | "password", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Awaitable<User | null> {

            const res= await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/auth/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(credentials)
            })
            const user_= await res.json();
            const user= user_?.user;
            if (res.status===201 && user){
                console.log(user);
                return user;
            }
            else{
             return null;
            }

        },

    })],
    pages:{
        signIn: "/signin",
        error: "/signin",
    },
    callbacks: {
        onError: async (error:any) => {
            if (error.message === "Invalid credentials") {
                setTimeout(() => {
                  console.log("hiiiii eroor incorrect")
                }, 5000)
                return false;
            }
        }
    }
}
const handler= NextAuth(Options);
export  {handler as GET, handler as POST}