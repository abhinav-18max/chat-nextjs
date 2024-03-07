
import {TbEdit} from "react-icons/tb";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import React, {useRef} from "react";
import {useSession} from "next-auth/react";
import Box from "@/app/(conversation)/chat/box";



export default function Sidebar(conversions:any){
    const receipent= useRef<HTMLInputElement | undefined>()
    const msg=useRef<HTMLTextAreaElement | undefined>();

    const {data: session, status} = useSession();
    const submitdata=(e:any)=>{
        e.preventDefault();
        const rece= receipent.current?.value
        const msgs=msg.current?.value
        alert(JSON.stringify({rece,msgs}))

    }
    const data=conversions.conversions;
    return(<>
        <div className="bg-black h-screen w-1/5">
            <div className="flex flex-row justify-evenly items-center mt-3.5 rounded-lg shadow-lg shadow-emerald-150">
                <h1 className="text-white text-xl font-bold">Conversation</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <TbEdit size={40} className="stroke-white"/>
                    </DialogTrigger>
                    <DialogContent className="w-1/3 h-1/3 rounded-2xl bg-blend-darken rounded-3xl">
                        <DialogHeader className="font-extrabold text-4xl">
                            Create Conversation
                        </DialogHeader>
                        <div>

                                <Label className="mb-1"> Receipents </Label>
                                <Input className="mt-0 border-0 rounded-2xl shadow-3xl bg-gray-800" name="receipent" ref={receipent}/>
                                <Label className="mb-1"> Message </Label>
                                <Textarea className="border-0 rounded-2xl shadow-3xl bg-gray-800" name="msgs" ref={msg}/>
                               <DialogFooter>
                                   <DialogClose asChild>
                                       <Button variant={"outline"} className="float-right mt-3.5 rounded-2xl bg-white text-black" type="button" onClick={submitdata}>Send</Button>
                                   </DialogClose>
                               </DialogFooter>



                      </div>



                    </DialogContent>
                </Dialog>


            </div>
            <div className="h-5/6 flex flex-col justify-start items-center text-white">

                {data.map((convo:any)=>{
                    // eslint-disable-next-line react/jsx-key
                    return <Box conversion={convo} />
                    })
                }
            </div>

        </div>


    </>)
}