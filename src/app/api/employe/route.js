  import empDatabase from "@/database/empDtabase";
 import { NextResponse } from "next/server";
 export const GET= async()=>{
    const data= empDatabase;
    return NextResponse.json(data,{status:200})
 }