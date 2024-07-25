import React, { useState } from "react";

import { Link } from "gatsby";

import { MdMenu } from "react-icons/md";

import '../styles/global.css'
import '../styles/index.css'



function Header() {

  const [navOpen, setNavOpen] = useState(false)

  const navList = 
    <>
    
      <a href="https://habit-tracker-indol-ten.vercel.app/" className="hover:underline">Log In / Sign Up</a>
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/documentation" className="hover:underline">Docs</Link>
      <Link to="/submit-feedback" className="hover:underline">Submit Feedback</Link>

    </>


  return (

    <nav className="NavBar flex justify-between bg-slate-100 text-slate-600">
      <Link to='/' className='text-[35px] ml-14 py-3'>Habitazen</Link>

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

          <div className="border-1 border-slate-300 border-2 pt-4 pb-3 pl-2 pr-4 -ml-24 w-50 absolute rounded-md bg-white">
            <ul className="flex flex-col text-start ml-3">
              {navList}
            </ul>
          </div>

        : null }

      </div>
        
    </nav>

  )

}

export default Header
