export default function Header(){
    return(
        <header class='flex mobile-s:justify-between mobile-s:h-[60px] border-b-[1.5px] items-center mobile-s:px-[12px] fixed bg-white w-full z-20'>
            <img src="https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww" class='mobile-s:w-10 mobile-s:h-10'></img>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mobile-s:w-10 mobile-s:h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </header>
    )
}