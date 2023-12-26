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
    console.log(user?.data?.user)


    return (<>

        <div className="flex flex-row h-screen bg-[#374151]">
            <Sidebar/>
            {user?.data?.user?.email}



        </div>


    </>)

}