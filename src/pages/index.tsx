import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import {NavBar} from '../components/navbar'

import habtiazen_screenshot from "../assets/habitazen.png"


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
      <main className="">
        <img src={habtiazen_screenshot} className="w-96 border-2 mt-16 mb-10"></img>
        <h1 className="text-2xl text-center mb-12">Habitazen: Your New Favourite Habit Tracker</h1>
        <div className="mx-auto w-fit">
          <a href="https://habit-tracker-indol-ten.vercel.app/"><button className='rounded-md py-2 px-3 mb-16 text-white bg-slate-450 hover:bg-slate-500'>Sign Up Now!</button></a>
        </div>
        <h1 className="text-center text-xl mt-7">Features:</h1>
        <ul className="mx-auto w-fit mt-3 pl-8">
          <li>- Shows you habit week view</li>
          <li>- Dark Mode</li>
          <li>- Allows habit archiving</li>
        </ul>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
