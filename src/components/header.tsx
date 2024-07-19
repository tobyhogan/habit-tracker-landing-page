import React, { useState } from "react";

import { MdMenu } from "react-icons/md";

import '../styles/global.css'
import '../styles/index.css'



function Header() {

  const [navOpen, setNavOpen] = useState(false)

  const navList = 
    <>
    
      <a href="/" className="hover:underline">Page 1</a>
      <a href="/" className="hover:underline">Page 2</a>
      <a href="/" className="hover:underline">Page 3</a>

    </>


  return (

    <nav className="NavBar flex justify-between bg-slate-100 text-slate-600">
      <a href='/' className='text-[35px] ml-14 py-3'>Project Title</a>

      <div className="FullNav">

        <ul className="flex mt-6 mr-8">
          {navList}
        </ul>

      </div>
      
      <div className="ToggleNav">

        <button onClick={() => {setNavOpen(navOpen => !navOpen)}}>
          <MdMenu className="ml-4 mr-8 mt-6" size={30}/>
        </button>

        {navOpen ?

          <div className="border-1 border-slate-300 border-2 pt-4 pb-3 pl-2 pr-4 -ml-16 absolute rounded-md bg-white">
            <ul className="flex flex-col text-start ml-3 [&>a]:mb-1">
              {navList}
            </ul>
          </div>

        : null }

      </div>
        
    </nav>

  )

}

export default Header
