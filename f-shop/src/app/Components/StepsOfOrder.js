export default function StepsOrder(){
    return(
        <div class='px-[16px] mt-6 flex flex-col gap-8'>
            <p class='mobile-s:text-2xl text-center tablet-m:text-6xl desktop:text-3xl'>Як замовити?</p>
            <ul class='border-l-2 border-gray-400 flex flex-col gap-4 tablet-m:gap-8 tablet-m:mx-[24px]'>
                <li class="relative flex flex-col pl-6 tablet-l:gap-2">
                    <span class='mobile-s:w-3 mobile-s:h-3 rounded-xl bg-black absolute left-[-6px] top-0 tablet-m:w-[20px] tablet-m:h-[20px] tablet-m:left-[-10px]'></span>
                    <span class='mobile-s:text-2xl  tablet-m:text-4xl desktop:text-2xl'>Заявка на сайті</span>
                    <span class='font-thin text-xl  tablet-m:text-3xl desktop:text-2xl text-gray-400'>Залишіть ваш номер телефоному на нашому сайт</span>
                </li>
                <li class="relative flex flex-col pl-6 tablet-l:gap-2">
                    <span class='mobile-s:w-3 mobile-s:h-3 rounded-xl bg-black absolute left-[-6px] top-2 tablet-m:w-[20px] tablet-m:h-[20px] tablet-m:left-[-10px]'></span>
                    <span class='text-2xl  tablet-m:text-4xl desktop:text-2xl'>Дзвінок</span>
                    <span class='font-thin text-xl  tablet-m:text-3xl desktop:text-2xl text-gray-400'>Наш менеджер зв'язується з вами та уточнить деталі замовлення.</span>
                </li>
                <li class="relative flex flex-col pl-6 tablet-l:gap-2">
                    <span class='mobile-s:w-3 mobile-s:h-3 rounded-xl bg-black absolute left-[-6px] top-2 tablet-m:w-[20px] tablet-m:h-[20px] tablet-m:left-[-10px]'></span>
                    <span class='text-2xl tablet-m:text-4xl desktop:text-2xl'>Доставка</span>
                    <span class='font-thin text-xl tablet-m:text-3xl desktop:text-2xl text-gray-400'>Доставляємо ваше замовлення Новою Поштою протягом 1-3 днів по всій Україні. Отримуєте посилку на відділенні Нової Пошти. Оплачуєте після огляду</span>
                </li>
                <li class="relative flex flex-col pl-6 tablet-l:gap-2">
                    <span class='mobile-s:w-3 mobile-s:h-3 rounded-xl bg-green-700 absolute left-[-6px] top-4 tablet-m:w-[20px] tablet-m:h-[20px] tablet-m:left-[-10px]'></span>
                    <span class='text-2xl  tablet-m:text-4xl desktop:text-2xl'>Готово!</span>
                </li>
            </ul>
        </div>
    )
}