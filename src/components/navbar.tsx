import React from "react";


export const NavBar = ({}) =>
    <nav className="flex justify-between border-b-black border-2 bg-gray-250">
        <a className='text-[35px] ml-10 py-3' href="">Habitazen</a>
        <ul className="flex my-auto">
            <li><a href="https://habit-tracker-indol-ten.vercel.app/">Log In / Sign Up</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/submit-feedback">Submit Feedback</a></li>
            <li><a href="/patch-notes">Patch Notes</a></li>
        </ul>
    </nav>