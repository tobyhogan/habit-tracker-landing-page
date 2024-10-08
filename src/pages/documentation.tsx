import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'






const DocumentationPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <Header />
      <main className="pt-20 pb-40">
        <h1 className="text-3xl mt-8">Documentation</h1>
        <h2 className="text-xl mt-4">Main App</h2>
        <p>More coming soon...</p>
      </main>
      <Footer />

    </div>
  )
}

export default DocumentationPage

export const Head: HeadFC = () => <title>Documentation</title>
