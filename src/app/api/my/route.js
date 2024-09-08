import { NextResponse } from "next/server"
import empDatabase from "@/database/empdAtabase"
export const GET= async()=>{
    const data=  empDatabase;
    return NextResponse.json(data,{status:200})
}
