"use client"
import React from 'react'
import { useState } from 'react'
import style from "./style.css"

const postApi = () => {

  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const regierfun = async () => {
    let data = await fetch("http://localhost:3000/api/postapimethod", {
      method: 'Post',
      body: JSON.stringify({ name, age })
    })
    data = await data.json()
    console.log(data);


  }
  return (
    <div className="relative flex flex-col items-center justify-center top-20 ms-5">
      <br /><br />
      <h1 className="text-2xl font-bold">Register You</h1><br /><br />
      <input type="text" placeholder="Enter Youe Name" value={name} onChange={(e) => setname(e.target.value)} /><br /><br />
      <input type="text" placeholder="Enter Youe Name" value={age} onChange={(e) => setage(e.target.value)} /><br /><br />
      <button onClick={regierfun}>Register</button>
    </div>
  )
}

export default postApi























// "use client"
// import style from "./style.css"
// import { useState } from "react";
// const uIwithapi = () => {
//   const [name,setname]=useState("");
//   const [age,setage]=useState("");
//   const registeryou = async()=>{
//     console.log(name,age);
//      let data=await fetch("http://localhost:3001/api/postapimethod",{
//        method:'Post',
//       body:JSON.stringify({name,age})
//    })
//      data=await data.json()
//    console.log(data)
//   };
//     return (
//     <div className="relative flex flex-col items-center justify-center top-20" >
//       <br/>
//            <h1 className="text-2xl font-bold">Registraction With Api</h1><br/>
//            <input onChange={(e)=>setname(e.target.value)} type="text" value={name}  placeholder=" Enter Your Name" ></input><br/><br/>
//            <input onChange={(e)=>setage(e.target.value)} type="number" value={age}  placeholder=" Enter Your Age" ></input><br/><br/>
//            <button onclick={registeryou}>Register</button>
//     </div>
//   )
// }

// export default uIwithapi