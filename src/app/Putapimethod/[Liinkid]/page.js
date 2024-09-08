"use client";
import { useState } from "react";
import style from "../style.css";
import { useEffect } from "react";
const Form = ({ params }) => {
  let employId = params.Liinkid;
  const [Id, setId] = useState("");
  const [name, setname] = useState("");
  const [salary, setsalary] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    const showdata = async () => {
      let data = await fetch(`http://localhost:3000/api/employe/${employId}`);
      data = await data.json();
      setId(data.result.empId);
      setname(data.result.empName);
      setsalary(data.result.empSalary);
      setemail(data.result.empEmail);
    };
    showdata();
  }, [employId]);
  const showDta = async () => {
    let data = await fetch(`http://localhost:3000/api/employe/${employId}`, {
      method: "PUT",
      body: JSON.stringify({ Id, name, salary, email }),
    });
    data = await data.json();
    setId(data.result.empId);
    setname(data.result.empName);
    setsalary(data.result.empSalary);
    setemail(data.result.empEmail);
    if (data.success) {
      alert("Employee Updated");
    } else {
      alert("Failed");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center top-20 ms-5">
      <div>
        <h2 className="text-2xl">Update Employee Details</h2>
        <br />
        <label>Employee ID: </label>
        <input
          type="number"
          value={Id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <br />
        <br />
        <label>Employee Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
        <br />
        <br />
        <label>Employee Salary: </label>
        <input
          type="text"
          value={salary}
          onChange={(e) => setsalary(e.target.value)}
        ></input>
        <br />
        <br />
        <label>Employee Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <br />
        <br />
      </div>
      <button onClick={showDta}>Update</button>
    </div>
  );
};

export default Form;
