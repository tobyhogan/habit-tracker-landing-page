import React, { useEffect, useState } from "react";

import { Link } from "gatsby";

import { MdMenu, MdOutlineDarkMode, MdLightMode, MdLight, MdDarkMode } from "react-icons/md";

import '../styles/global.css'
import '../styles/index.css'



function Header() {

  const [navOpen, setNavOpen] = useState(false)

  const [isDark, setIsDark] = useState(false)



  document.body.classList.add('dark')



  useEffect(() => {


    if (!localStorage.getItem("theme")) {

      
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

        localStorage.setItem("theme", "dark")
        document.body.classList.add('dark')
  
        setIsDark(true)
          

      } else {

        localStorage.setItem("theme", "dark")
        document.body.classList.add('dark')
  
        setIsDark(true)

      }


    } else if (localStorage.getItem("theme") == "light") {

      
      
      document.body.classList.add('light');

      setIsDark(false)



    } else if (localStorage.getItem("theme") == "dark") {

      
      
      document.body.classList.add('dark');

      setIsDark(true)

    }


  }, [])


  function handleToggleTheme() {


    if (localStorage.getItem("theme") == "light") {


      localStorage.setItem("theme", "dark")

      
      document.body.classList.add('dark');
      document.body.classList.remove('light');

      setIsDark(true)
      

    } else if (localStorage.getItem("theme") == "dark") {

      localStorage.setItem("theme", "light")

      document.body.classList.add('light');
      document.body.classList.remove('dark');

      setIsDark(false)

    } 


  }





  const navList = 
    <>
    
      <Link to="https://habit-tracker-indol-ten.vercel.app/" className="Link1 hover:underline">Log In / Sign Up</Link>
      <Link to="/" className="Link1 hover:underline">Home</Link>
      <Link to="/about" className="Link1 hover:underline">About</Link>
      <Link to="/documentation" className="Link1 hover:underline">Docs</Link>
      <Link to="/submit-feedback" className="Link1 hover:underline">Submit Feedback</Link>

    </>


  return (

    <header className="NavBar flex justify-between">
      <Link to='/' className='Link1 text-[35px] ml-14 py-3'>Habitazen</Link>

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
      
      { 
      /*
      <div className="ThemeToggler">

        { isDark ? (<button onClick={handleToggleTheme}><MdOutlineDarkMode size={28} className="text-black dark:text-white"/></button>)
          : (<button onClick={handleToggleTheme}><MdLightMode size={28} className="text-black dark:text-white"/></button>) }

      </div>

      */ }
        
    </header>

  )

}

export default Header
