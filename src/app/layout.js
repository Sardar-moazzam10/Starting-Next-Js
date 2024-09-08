import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}

      <header className="fixed top-0 flex items-center justify-start h-20 text-2xl text-white header bg-slate-900 ps-5">
          <h1>Blog Wbesite</h1>
          <div className="fixed right-0 flex flex-wrap items-center justify-around text-2xl text-white divlink ">
            <Link href="/redirection">Redirect</Link>
            <Link href={`/Putapimethod`}>PutMetod</Link>
            <Link href={`/Postapimethod`}>PostMetod</Link>
            <Link href={`/DelteUi`}>DeleteMetod</Link>
            {/* <Link href="/staticsite">Ssg</Link> */}
            <Link href="/blog">Blog</Link>
            <Link href="/styling"></Link>
            <Link href="/clientsideapi"></Link>
            <Link href="/serversideapi"></Link>
            
  
          </div>
        </header>
        <footer className="fixed bottom-0 flex items-center justify-between text-white ps-3 pe-5 footer h-14 bg-slate-900">
          <p>Powered By Sardar Moazzam,@ All rights reserved</p>{" "}
          <p>Privacy Policy Treams of Service</p>
        </footer>
      </body>
    </html>
  );
}
