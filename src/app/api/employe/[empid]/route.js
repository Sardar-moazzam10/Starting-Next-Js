import empDatabase from "@/database/empDtabase";
import { NextResponse } from "next/server";
//GET API METHOD GET API DATA
export const GET = async (req, value) => {
  //get method to show in jason format
  let empData = empDatabase;
  let get = empData.filter((item) => item.empId == value.params.empid);
  let result =
    get.length == 0
      ? { result: "Employee Info Not Found" }
      : { result: get[0] };
  return NextResponse.json(result, { status: 200 });
};
//POST API METHOD SEND API DATA
//test with postman api software
export const POST = async (request, responce) => {
  const data = await request.json();
  console.log(data);
  //   return NextResponse.json({id:1,Name:"Moazzam",Class:12})
  if (data.empId || data.empName) {
    return NextResponse.json(
      { result: "error or bad request" },
      { status: 400 }
    ); //to show responce //status :400 show not ok
  } else {
    return NextResponse.json(
      { result: "Success or valid request" },
      { status: 200 }
    ); //status :200 show ok
  }
  //return NextResponse.json({id:1,name:"Anas",class:"7th"})
};
//DELETE API METHOD
export const DELETE = () => {
  //delete data
  let data = empDatabase;
  if (data) {
    return NextResponse.json(
      { result: "Employee Data Deleted Successfully", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Sorry We Are Unable To Find Employee Data", success: false },
      { status: 400 }
    );
  }
};
//PUT API METHOD UPDATE DATA
export const PUT = async (req, value) => {
  let updatedata = await req.json();
  updatedata.empId = value.params.empid;
  console.log(updatedata);
  if (updatedata.empId && updatedata.name) {
    return NextResponse.json({
      result: "Data Update Successfully",
      success: true,
    });
  } else {
    return NextResponse.json({ result: "Data not found", success: false });
  }
};
