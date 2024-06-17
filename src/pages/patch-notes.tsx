import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { NavBar } from "../components/navbar"

import '../styles/global.css'
import '../styles/index.css'


export const PatchNotes: React.FC<PageProps> = () => {
  return (
    <main>
      <NavBar></NavBar>
      <h1>hi</h1>
    </main>
  )
}

export default PatchNotes

