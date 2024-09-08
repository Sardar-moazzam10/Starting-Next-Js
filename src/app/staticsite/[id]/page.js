import getApidata from "../../../../fetchapi/page"
console.log(process.env);

const Userdetail = async(props) => {
    const data=getApidata();
    const user=await data;
    const userid= props.params.id;
    const userinfo=user[userid-1];
  return (
    <div className="relative text-bold top-20 ms-5">
    <h2>USERDETAIL</h2>
    <h3>USERID:{userinfo.id}</h3> 
    <h3>USERNAME:{userinfo.username}</h3>  
    <h3>USEREMAIL:{userinfo.email}</h3>       
    </div>
  )
}

export default Userdetail
// export const generateStaticParams= async()=>{
//   const data=getApidata();
//   const user=await data;
//   return user.map(user=>{
//       id:user.id.toString();
//   }
     
//   )    
// }