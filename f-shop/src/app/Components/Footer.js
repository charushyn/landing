'use client'

import { Link } from "react-scroll"

export default function Footer(){
    return(
        <footer class='mobile-s:flex mobile-s:flex-col bg-black text-white py-4 items-center mobile-s:gap-2'>
            <a class='flex flex-row mobile-s:gap-2'>
                <span class='underline'>Політика конфіденційності</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                </a>
            <a class=' underline'>Повернення та обмін</a>
            <Link to="greeting" class='flex flex-row mobile-s:gap-2'>
                <span>Повернутись нагору</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </Link>
        </footer>
    )
}