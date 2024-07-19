import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { NavBar } from "../components/header"

import '../styles/global.css'
import '../styles/index.css'


const SubmitFeedback: React.FC<PageProps> = () => {
  return (
    <main>
      <NavBar></NavBar>
      <h1>hi</h1>
    </main>
  )
}

export default SubmitFeedback


