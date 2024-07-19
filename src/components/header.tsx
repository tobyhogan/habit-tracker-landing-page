import React from "react";

import '../styles/global.css'
import '../styles/index.css'


export const Header = ({}) =>
    <nav className="NavBar flex justify-between bg-slate-100 text-slate-600">
        <a href='/' className='text-[35px] ml-10 py-3'>Habitazen</a>
        <ul className="flex my-auto">
            <li><a href="https://habit-tracker-indol-ten.vercel.app/">Log In / Sign Up</a></li>
            <li><a href="/habit-tracker-landing-page">Home</a></li>
            <li><a href="/submit-feedback">Submit Feedback</a></li>
        </ul>
    </nav>