import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import {Footer} from '../components/footer'






const AboutPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Header />
      <main>
        <h1 className="text-3xl mt-8">About</h1>
        <h2 className="text-xl mt-4">Development</h2>
        <h3 className="text-xl mt-4">Developed by Toby Hogan - tobyhogan.space as part of Kazen Projects </h3>

      </main>
      <Footer />

    </div>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Page</title>
