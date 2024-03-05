'use client'

import Link from "next/link"

export default function Header(){
    return(
        <header class='flex mobile-s:justify-between mobile-s:h-[60px] border-b-[1.5px] items-center mobile-s:px-[12px] fixed bg-white w-full z-20 tablet-m:h-[90px] tablet-m:px-[24px] tablet-l:h-[120px] desktop:h-[70px]'>
            <div class=" bg-logo bg-contain bg-center mobile-s:w-10 mobile-s:h-10 tablet-m:w-[50px] tablet-m:h-[50px] tablet-l:h-[80px] tablet-l:w-[80px] desktop:h-[60px] desktop:w-[60px]"></div>
            <Link href={'/basket'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 tablet-m:w-[50px] tablet-m:h-[50px] tablet-l:h-[80px] tablet-l:w-[80px] desktop:h-[40px] desktop:w-[40px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </Link>
        </header>
    )
}