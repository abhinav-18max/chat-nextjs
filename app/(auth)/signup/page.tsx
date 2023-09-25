"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import colors from "tailwindcss/colors";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Minimum password must be at least 2 characters.",
    }),
    cpassword: z.string().min(2, {
        message:"Minimum password must be at least 2 characters.",
    })

}).refine((data) =>data.password === data.cpassword,{
    message: "Password must match",
    path:["cpassword"],

})
export default function Auth(){
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            cpassword: "",

        },
        });

    const onSubmit = async (values:any) => {
        alert(JSON.stringify(values))
    }
    return(
        <>

                <Form {...form}  >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 bg-white h-1/2 flex flex-col justify-center items-center rounded-2xl">
                        <h2 className="text-black text-5xl font-extrabold underline-offset-2">
                            REGISTER
                        </h2>

                        <FormField
                            control={form.control}
                            name="username"

                            render={({ field }) => (
                                <FormItem className="text-black text-4xl w-1/2">
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="username@gmail.com"  {...field} className="rounded-xl border-neutral-200"/>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"

                            render={({ field }) => (
                                <FormItem className="text-black text-4xl w-1/2">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="1321243"  {...field} className="rounded-xl border-neutral-200"/>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cpassword"

                            render={({ field }) => (
                                <FormItem className="text-black text-4xl w-1/2">
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="1321243"  {...field} className="rounded-xl border-neutral-200"/>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="bg-black mt-6 hover:bg-black rounded-2xl w-1/4">Login</Button>
                    </form>
                </Form>

        </>
    )
}

