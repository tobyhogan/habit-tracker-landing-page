import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import {NavBar} from '../components/navbar'

import tablescreenshot from '../images/habitazen.png'


const widgetsRowStyles = {
  margin: "auto",
  display: "flex",
  justifyContent: "space-between",

}

const projectWidgetStyles = {
  border: "2px solid black",
  borderRadius: "8px",
  width: "28%",
  margin: "1%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",

}



const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <NavBar/>
      <main className="pb-20">
        <img src={tablescreenshot} className="w-96 border-2 mt-8"></img>
        <h1 className="text-2xl mt-8">Habitazen: Your New Favourite Habit Tracker</h1>
        <div className="flex flex-col mx-auto w-fit mt-8">
          <a href="https://habit-tracker-indol-ten.vercel.app/">
            <button className='rounded-md py-2 px-3 text-white bg-slate-450 hover:bg-slate-500'>Sign Up Now!</button>
          </a>
          <a href="https://habit-tracker-indol-ten.vercel.app/" className="mt-4 underline text-blue-400 mx-auto">Or Log In</a>
        </div>
        <h2 className="text-xl mt-8">Features:</h2>
        <ul className="mx-auto w-fit mt-3 pl-8">
          <li>- Shows you habit week view</li>
          <li>- Dark Mode</li>
          <li>- Allows habit archiving</li>
        </ul>
        <h2 className="text-xl mt-10">Download App</h2>
        <a href="" className="">Link</a>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Landing Page</title>
