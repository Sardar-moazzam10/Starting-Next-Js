import DeleteButton from "@/components/deletebutton";
import Link from "next/link";
const getdata = async () => {
  let data = await fetch("http://localhost:3000/api/employe");
  data = await data.json();
  return data;
};
const getEmpdata  = async () => {
  let data = await getdata();
  return (
    <div className="relative top-20 ms-5 -">
      <h1 className="text-3xl">Employee Details</h1>
      {
      data.map((item, i) => (
        <div key={i}>
          <h2>{item.empName}</h2>
          <DeleteButton id={item.empId} name={item.empName}/>
          {/* <Link href={`/DelteUi/${item.empId}/update`}>Edit</Link> */}
        </div>
      ))
      }
    </div>
  );
};

export default getEmpdata;
