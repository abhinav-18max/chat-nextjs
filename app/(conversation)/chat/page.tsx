"use client";
import Sidebar from "@/app/(conversation)/chat/sidebar";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import {useEffect} from "react";
import axios from "axios";

export default function Chat() {

    const user = useSession({

        required: true, onUnauthenticated() {
            redirect('/signin')
        }
    })
    useEffect(() => {
            axios.get(`${process.env.NEXT_PUBLIC_API_ROUTE}/auth/profile`, {withCredentials: true}).then(res => console.log(res.data)).catch(e => console.log(e))
    })

    return (<>

        <div className="flex flex-row h-screen bg-[#374151]">
            <Sidebar/>
            nlknlkn

        </div>


    </>)

}