import Link from "next/link";
import getApidata from "../../../fetchapi/page"

const Sitegeneration = async () => {
    const data=getApidata();
    const user= await data;
    return(
        <div className="relative top-20 ms-5 -z-10">
            <h1 className="text-2xl">Static Site Generation</h1>
            
             {
    user.map((user,i)=>
    (
             <Link className="" key={i} href={`/staticsite/${user.id}`}>{user.id}) {user.username} </Link>
)
      
    )
        
             }
        </div>

    )

}

export default Sitegeneration