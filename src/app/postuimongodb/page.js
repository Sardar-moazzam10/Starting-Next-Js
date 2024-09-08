"use client"
import { useState } from 'react'
import style from './style.css'
import jsxRuntime from 'react/jsx-runtime';

const PostuiMongodb = () => {
    const [empName, setname] = useState("");
    const [empEmail, setemail] = useState("");
    const [empSalary, setsalary] = useState("");
    const inputdata = async () => {
        let data = await fetch('http://localhost:3000/api/empdb', {
            method: 'POST',
            body: JSON.stringify({ empName, empEmail, empSalary })
        })
        data = await data.json()
        if (data.success) {
            alert('Data Added To MongoDB Successfully')
            setname("")
            setemail("")
            setsalary("")
        }
        else {
            alert('Try Again || Logical Error ')
        }
    }
    return (
        <div className="relative flex flex-col items-center justify-center top-20 ">
            <h1 className="text-2xl">Intergrate Post Method With MongoDB</h1><br /><br />
            <input type="text" placeholder="Enter Your Name" value={empName} onChange={(e) => setname(e.target.value)} /><br /><br />
            <input type="email" placeholder="Enter Your Email" value={empEmail} onChange={(e) => setemail(e.target.value)}></input><br /><br />
            <input type="text" placeholder="Enter Your Salary" value={empSalary} onChange={(e) => setsalary(e.target.value)}></input><br /><br />
            <button onClick={inputdata}>Click me</button>
        </div>
    )
}

export default PostuiMongodb