export default function Greeting(props){
    return(
        <div className="greeting text-center gap-5 relative" >
            <p class='uppercase text-red-600'>vse vsim shop</p>
            <div class='flex flex-col'>
                <p class='text-white text-2xl'>Створи атмосферу космосу прямо в своєму домі: разом з проектором</p>
                <p class='text-red-600 text-2xl'>Mini Printer Cat!</p>
            </div>
            <div class='absolute bottom-0 flex flex-col items-center text-white opacity-60'>
                <p>Безкоштовна доставка від 2х одиниць</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="chevron-down w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    )
}