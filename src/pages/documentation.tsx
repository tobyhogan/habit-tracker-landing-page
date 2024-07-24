import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import {Footer} from '../components/footer'






const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Header />
      <main>
        <h1 className="text-3xl mt-8">Documentation</h1>
        <h2 className="text-xl mt-4">Main App</h2>
      </main>
      <Footer />

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Landing Page</title>
