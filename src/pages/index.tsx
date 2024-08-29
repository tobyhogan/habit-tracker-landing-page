import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'

//@ts-ignore
import tablescreenshot from '../assets/habitazen-dark.png'



const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main className="pb-10">
        <div className="mx-6">
          <img src={tablescreenshot} className="w-[550px] border-[1px] mt-12"></img>
        </div>
        <h1 className="text-2xl mt-8">Habitazen: An Unreasonably Effective Habit Tracker</h1>
        <div className="flex flex-col mx-auto w-fit mt-8">

          <Link to="https://habit-tracker-indol-ten.vercel.app/" className="Link1 rounded-md text-lg py-1.5 px-6 bg-gradient-to-tr from-green-500 to-blue-700 hover:from-green-600 hover:to-blue-800">
            Sign Up Now!
          </Link>

          <Link to="https://habit-tracker-indol-ten.vercel.app/" className="Link2 mt-4 mx-auto">Or Log In</Link>

        </div>
        <h2 className="text-xl mt-8">Core Features:</h2>
        <ul className="mx-auto w-fit mt-3 pl-8">
          <li>- Shows you habit week view</li>
          <li>- Dark Mode</li>
          <li>- Allows habit archiving</li>
        </ul>


        <h2 className="text-xl mt-10">Download App</h2>
        <h3 className="mt-3 text-lg">Android:</h3>

        <div className="mx-auto w-fit">
          <Link to="https://drive.google.com/file/d/1rep6FARskJUY_Jtzs57yacXZqxA3EHIS/view?usp=drive_link" className="Link2 underline mt-3">Download APK File</Link>
        </div>

      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Habitazen Habit Tracker</title>
