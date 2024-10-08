import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'






const AboutPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-24 mb-36">
        <h1 className="text-3xl mt-8">About</h1>
        <h2 className="text-xl mt-4">Development</h2>
        <h3 className="text-lg mt-4">
          Developed by Toby Hogan
          (<a href="https://tobyhogan.space" className="underline" target="_blank">tobyhogan.space</a>) 
          as a <a href="https://tobyhogan.github.io/kazen-projects-landing-page/" target="_blank" className="underline">Kazen Projects</a> Project.</h3>

      </main>
      <Footer />

    </div>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Page</title>
