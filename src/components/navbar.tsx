import React from "react";

import '../styles/global.css'
import '../styles/index.css'


export const NavBar = ({}) =>
    <nav className="flex justify-between bg-slate-100 text-slate-600">
        <a href='/' className='text-[35px] ml-10 py-3'>Habitazen</a>
        <ul className="flex my-auto">
            <li><a href="https://habit-tracker-indol-ten.vercel.app/">Log In / Sign Up</a></li>
            <li><a href="/">Landing</a></li>
            <li><a href="/submit-feedback">Submit Feedback</a></li>
            <li><a href="/patch-notes">Patch Notes</a></li>
        </ul>
    </nav>