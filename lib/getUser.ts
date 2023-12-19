import axios  from 'axios'
const API_URL=process.env.NEXT_PUBLIC_API_ROUTE;

export type user={
    email: string,
    name: string,
}

export default async function getUser(){
    try{
        const response=await axios.get<user>(`${API_URL}/auth/status`,{withCredentials:true});
        console.log(response)
        const res= response.data;
        // await(5000)
        console.log(res);
        return res;

    }
    catch (err){
        console.log(err)
        return null;
    }
    return null;


}