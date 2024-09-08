import { NextResponse } from "next/server"
//test with postman api software
export const POST=async (request,responce)=>{

     const data=await request.json()
     console.log(data);
   //   return NextResponse.json({id:1,Name:"Moazzam",Class:12})
     if(data.empId||data.empName){
        return NextResponse.json({result:"error or bad request"},{status:400})//to show responce //status :400 show not ok
     }
     else{
        return NextResponse.json({result:"Success or valid request"},{status:200})//status :200 show ok
     }
    //return NextResponse.json({id:1,name:"Anas",class:"7th"})
}