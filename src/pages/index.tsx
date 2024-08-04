import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'

//@ts-ignore
import tablescreenshot from '../images/habitazen.png'



const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main className="pb-10">
        <img src={tablescreenshot} className="w-96 border-2 mt-8"></img>
        <h1 className="text-2xl mt-8">Habitazen: An Unreasonably Effective Habit Tracker</h1>
        <div className="flex flex-col mx-auto w-fit mt-8">

          <Link to="https://habit-tracker-indol-ten.vercel.app/" className="rounded-md py-2 px-3 bg-gradient-to-tr from-red-500 to-blue-700 hover:bg-slate-500">
            Sign Up Now!
          </Link>


          <Link to="https://habit-tracker-indol-ten.vercel.app/" className="mt-4 underline text-blue-400 mx-auto">Or Log In</Link>
        </div>
        <h2 className="text-xl mt-8">Features:</h2>
        <ul className="mx-auto w-fit mt-3 pl-8">
          <li>- Shows you habit week view</li>
          <li>- Dark Mode</li>
          <li>- Allows habit archiving</li>
        </ul>
        <h2 className="text-xl mt-10">Download App</h2>
        <h3 className="mt-3 text-lg">Android:</h3>
        <div className="LinkContainer mx-auto w-fit">
          <a href="https://drive.google.com/file/d/1rep6FARskJUY_Jtzs57yacXZqxA3EHIS/view?usp=drive_link" className="">Download APK File</a>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Landing Page</title>
