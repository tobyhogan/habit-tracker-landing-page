import React, { useEffect, useRef, useState } from "react";

import { Link } from "gatsby";

import { MdMenu, MdOutlineDarkMode, MdLightMode, MdLight, MdDarkMode } from "react-icons/md";

import NavLink from "./navlink";

import '../styles/global.css'
import '../styles/index.css'


function Header() {

  const [navOpen, setNavOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useOutsideTrigger(menuRef, buttonRef);

  const navList = 
    <>
      <NavLink to="https://app.habitbeacon.com/" text="Log In" setNavOpen={setNavOpen} />
      <NavLink to="/" text="Home" setNavOpen={setNavOpen} />
      <NavLink to="/about" text="About" setNavOpen={setNavOpen} />
      <NavLink to="/documentation" text="Docs" setNavOpen={setNavOpen} />
      <NavLink to="/privacy-policy" text="Privacy" setNavOpen={setNavOpen} />
      <NavLink to="/contact" text="Contact" setNavOpen={setNavOpen} />
    </>


  useEffect(() => {

    document.body.classList.add('dark')

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



  function useOutsideTrigger (ref1: any, ref2: any) {

    useEffect(() => {
      function handleClickOutside(event: any) {

        if (ref1.current && !ref1.current.contains(event.target) && !ref2.current.contains(event.target)) {
          
          setNavOpen(false)

        }}

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
      
    }, [ref1, ref2]);

  }


  return (

    <header className="NavBar flex justify-between fixed w-full">
      <Link to='/' className='Link1 text-[32px] ml-[4vw] py-2.5'>HabitBeacon</Link>
      <div className="flex flex-row">
        <a href="https://app.habitbeacon.com/" className="Link1 whitespace-nowrap rounded-md text-md my-auto mr-[1vw] py-1.5 px-[3vw] h-fit bg-gradient-to-tr from-green-500 to-blue-700 hover:from-green-600 hover:to-blue-800">
          Sign&nbsp;Up&nbsp;Now!
        </a>



      <div className="FullNav ml-4 mr-5">

        <ul className="flex mt-6 [&>*]:mr-3">
          {navList}
        </ul>

      </div>
      
      <div className="ToggleNav">

        <button onClick={() => {setNavOpen(navOpen => !navOpen)}} ref={buttonRef}>
          <MdMenu className="ml-4 mr-[3vw] mt-6 text-black dark:text-white" size={30} />
        </button>

        {navOpen ?

          <div ref={menuRef} className="border-1 border-slate-300 border-2 pt-4 pb-3 pl-2 pr-4 -ml-24 w-50 absolute rounded-md bg-white dark:bg-[#333333]">
            <ul className="flex flex-col [&>*]:text-start ml-3">
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
      </div>
    </header>

  )

}

export default Header
