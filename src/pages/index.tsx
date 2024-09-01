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
      <main className="pt-16 pb-10">
        <div className="mx-6">
          <img src={tablescreenshot} className="w-[550px] border-[1px] mt-12"></img>
        </div>
        <div className="px-[5vw]">
          <h1 className="text-2xl mt-8">Habitazen: An Unreasonably Effective Habit Tracker</h1>
          <div className="flex flex-col mx-auto w-fit mt-8">

            <a href="https://habit-tracker-indol-ten.vercel.app/" className="Link1 rounded-md text-lg py-1.5 px-6 bg-gradient-to-tr from-green-500 to-blue-700 hover:from-green-600 hover:to-blue-800">
              Sign Up Now!
            </a>

            <Link to="https://habit-tracker-indol-ten.vercel.app/" className="Link2 mt-4 mx-auto">Or Log In</Link>

          </div>

          <h2 className="mt-8">What does it do?</h2>
          <h3 className="mt-3">Ever struggle to stick to good habits consistently? - That's what the tracker's for!</h3>
          <h3 className="mt-3"> We've found that seeing your overall progress, and building up a streak is massively helpful in motivating you to keep up
          with good habits. </h3>
          
          <h2 className="mt-8">Core Features:</h2>
          <ul className="mx-auto w-fit mt-3 pl-14">
            <li>- Shows habit week view</li>
            <li>- Allows habits to be archived</li>
            <li>- Dark or light theme</li>
            <li>- Habit metrics: total and current streak</li>
          </ul>

          <h2 className="mt-6">Platforms:</h2>
          <ul className="mt-3 w-fit mx-auto [&>h3]:text-left pl-12">
            <h3>- Web App (in browser)</h3>
            <h3>- Mobile App (add from browser)</h3>
            <h3>- Desktop (add from browser)</h3>
            <h3>- Android App (install apk from below)</h3>
          </ul>


          <h2 className="mt-6">More Information</h2>
          <h3 className="mt-2">With the tracker, you can also log other habits: neutral ones(for observation) or negative ones(for prevention)</h3>


          <h2 className="text-xl mt-10">Download App</h2>
          <h3 className="mt-3 text-lg">Android:</h3>

          <div className="mx-auto w-fit">
            <Link to="https://drive.google.com/file/d/1rep6FARskJUY_Jtzs57yacXZqxA3EHIS/view?usp=drive_link" className="Link2 underline mt-3">Download APK File</Link>
          </div>


        </div>
        
      </main>
      <Footer />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Habitazen Habit Tracker</title>
