import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'



const PrivacyPolicy: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-20 pb-40">
        <h1 className="text-3xl mt-8">Privacy Policy</h1>
        <h2 className="text-xl mt-4">Test</h2>
      </main>
      <Footer />

    </div>
  )
}

export default PrivacyPolicy

export const Head: HeadFC = () => <title>Privacy Policy</title>
