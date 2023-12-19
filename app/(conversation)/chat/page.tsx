"use client";
import Sidebar from "@/app/(conversation)/chat/sidebar";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";
export default function Chat(){
    const user=useSession({
        required:true,
        onUnauthenticated(){
            redirect('/signin')
        }
    })
    return(<>

        <div className="flex flex-row h-screen bg-[#374151]">
            <Sidebar/>
            nlknlkn

        </div>



        </>)

}