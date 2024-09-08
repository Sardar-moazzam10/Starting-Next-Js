import Link from "next/link"

const Blog = () => {
  return (
    <div className="relative ms-5 top-20">
        <h1 className='text-2xl'>Blog Page</h1>
       <ul>
        <li><Link href="/blog/moazzam">Moazzam</Link></li>
        <li><Link href="/blog/kamran">Kamran</Link></li>
        <li><Link href="/blog/farzeen">Farzeen</Link></li>
        <li><Link href="/blog/saqlain">Saqlain</Link></li>
        <li><Link href="/blog/faisal">Faisal</Link></li>
       </ul>
       
    </div>
  )
}

export default Blog