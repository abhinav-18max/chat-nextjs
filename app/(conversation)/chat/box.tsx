import {useSession} from "next-auth/react";

export default function Box(conversation:any){
    const {data: session, status} = useSession();
   const data = conversation.conversion;

   // console.log(data);
   console.log(session);
   const getdisplayName= (data:any) => {
         console.log(data);
         return data.sender.id === session?.user?.id ? data.receiver : data.sender;
   }
    return (<>
        <div className=" w-full h-16 bg-gray-900">
            <div className="flex flex-row justify-center items-center text-white ">
                {/*<img src={getdisplayName(data).image} alt="profile" className="h-10 w-10 rounded-full"/>*/}
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-white font-bold">{getdisplayName(data).user.name}</h1>
                    <h1 className="text-white ">Sample Message</h1>
                </div>
            </div>

        </div>

    </>)
}