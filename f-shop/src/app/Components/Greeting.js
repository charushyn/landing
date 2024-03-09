export default function Greeting(props){
    return(
        <div className="greeting text-center gap-5 relative" >
            <p class='uppercase text-red-600 mobile-l:text-xl tablet-m:text-3xl tablet-l:text-4xl desktop:text-3xl'>vse vsim shop</p>
            <div class='flex flex-col'>
                <p class='text-white text-2xl mobile-m:text-3xl mobile-m:px-5 tablet-m:text-5xl tablet-m:px-10 tablet-l:text-7xl tablet-l:px-[60px] desktop:text-5xl'>Дитячий портативний термопринтер для фотографій з Вашого життя та нотаток!</p>
                <p class='text-red-600 text-2xl mobile-m:text-4xl tablet-m:text-7xl tablet-m:mt-[16px] tablet-l:text-8xl desktop:text-6xl'>Mini Printer Cat</p>
            </div>
            <div class='absolute bottom-0 flex flex-col items-center text-white opacity-60 justify-center mx-auto right-0 left-0 mobile-s:gap-2'>
                <p class=' mobile-s:px-4 mobile-l:text-xl tablet-m:text-4xl desktop:text-2xl'>Безкоштовна доставка від 2х одиниць</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="chevron-down w-8 h-8 tablet-m:w-[65px] tablet-m:h-[65px] desktop:w-10 desktop:h-10 animate-bounce">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    )
}