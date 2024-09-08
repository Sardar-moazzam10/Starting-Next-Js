import empDatabase from "@/database/empdAtabase";
import { NextResponse } from "next/server";
export const GET= async(request,value)=>{
    const users= empDatabase;//get api data
    const userData=users.filter((items)=>items.empId==value.params.empID)//value.params.userID return id ,1,2,3,4
    const result=userData.length==0?{result:'Employee Info Not Found'}:{result:userData}
    return NextResponse.json(result,{status:200})//status:200=>ok
}

// export const GET= async(request,value)=>{
//     const users= empDatabase;//get api data
//     const userData=users.filter((items)=>items.empId==value.params.empID)//value.params.userID return id ,1,2,3,4
//     const result=userData.length==0?{result:'Employee Info Not Found'}:{result:userData}
//     return NextResponse.json(result,{status:200})//status:200=>ok
// }
