import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import {NavBar} from '../components/navbar'


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
      <h1 className="text-center text-2xl mt-7">Features:</h1>
      <ul className="mx-auto w-fit mt-3 pl-8">
        <li>- Extremely good habit tracker</li>
        <li>- Good aesthetics</li>
      </ul>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
