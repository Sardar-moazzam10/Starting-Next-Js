"use client"
import style from './style.css'
const DeleteButton = ({name}) => {
  const delbtnfun= async()=>{
    let data= await fetch(`http://localhost:3000/api/employe/${name}`,{
      method:"DELETE"
    })
    data=await data.json();
    if (data.success){
      alert("Employee Deleted")
  }
  else {
      alert("Failed")
  }
  }
  return (
    <div>
        <button onClick={delbtnfun}>Delete</button>
    </div>  )
}
export default DeleteButton