import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"


import Header from "../components/header"
import Footer from "../components/footer"

import '../styles/global.css'
import '../styles/index.css'


const SubmitFeedback: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <main className="pt-20 pb-20">
        <h1 className="text-3xl mt-8">Submit Feedback</h1>
        <h2 className="text-xl mt-4"></h2>
      </main>
      <Footer />

    </>
  )
}

export default SubmitFeedback

