import Link from "next/link";
import style from "./style.css";
import DeleteButton from "@/components/deletebutton";

const getdata = async () => {
  let data = await fetch("http://localhost:3000/api/employe");
  data = await data.json();
  return data;
};
const getEmpdata = async () => {
  let data = await getdata();
  return (
    <div className="relative top-20 ms-5 -">
      <h1 className="text-3xl">Update Employee Details</h1>
      {data.map((item, i) => (
        <div key={i}>
          <h2>{item.empName}</h2>
          {/* <DeleteButton id={item.empId} /> */}
          <br />
          <h2 className="w-24 h-10 pt-1 text-white bg-black link ps-4">
            <Link
              href={`http://localhost:3000/Putapimethod/${item.empId}`}
            >
              Update
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default getEmpdata;
