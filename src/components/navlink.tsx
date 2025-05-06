import React from "react";
import { Link, navigate } from "gatsby";

import '../styles/global.css'
import '../styles/index.css'


function NavLink({text, to, setNavOpen}: any) {

  return (
    <button
      className="Link3 hover:underline"
      onClick={() => {

        navigate(to)
        setNavOpen(false)

    }}>
      {text}
    </button>

  )

}

export default NavLink