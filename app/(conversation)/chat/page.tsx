"use client";
import Sidebar from "@/app/(conversation)/chat/sidebar";
import {useSession} from "next-auth/react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {redirect} from "next/navigation";

export default function Chat() {
    const API = process.env.NEXT_PUBLIC_API_ROUTE;
    const {data: session, status} = useSession();
    //console.log(session);

    const {data: conversations, isLoading, isError} = useQuery({
        queryKey: ["conversations"],
        queryFn: async () => {
            const res = await fetch(`${API}/conversation`,{credentials:"include"});
            return res.json();
        }
    });
    if (status === "loading")
        return (
            <div className="flex flex-row justify-center items-center h-screen text-3xl font-extrabold">
                Loading ...{" "}
            </div>
        );
    if (status === "unauthenticated") redirect("/signin");
    // @ts-ignore

    if (isLoading)
        return (
            <div className="flex flex-row justify-center items-center h-screen text-3xl font-extrabold">
                Loading .................
            </div>
        );


    return (<>

        <div className="flex flex-row h-screen bg-[#374151]">
            <Sidebar conversions={conversations}/>


        </div>


    </>)

}