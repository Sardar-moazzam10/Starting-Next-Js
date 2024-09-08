import { connectionString } from "@/lib/database/db-connection"
import { Employee } from "@/lib/database/model/employee"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET = async () => {
    await mongoose.connect(connectionString)
    const Empdata = await Employee.find();
    return NextResponse.json({ result: Empdata })
}

//pc to mongodb
// export const POST=async()=>{
//     await mongoose.connect(connectionString)
//     let Empdata=new Employee({
//         empName:"Kashif",
//         empEmail:"kashif@hotmail.com",
//         empSalary:"44K"
//     })
//     const responce=await Empdata.save();
//     return NextResponse.json({result:responce})
// }
//postamn to mongodb
export const POST = async (req) => {
    let requesT = await req.json()
    await mongoose.connect(connectionString)
    let empDta = new Employee(requesT)
    let responce = await empDta.save();
    return NextResponse.json({ result: responce, success: true })
}