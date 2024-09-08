import mongoose from "mongoose"

const databaseSchema=new mongoose.Schema({
    empName:String,
    empEmail:String,
    empSalary:String
})
export const Employee=mongoose.models.employees||mongoose.model('employees',databaseSchema)