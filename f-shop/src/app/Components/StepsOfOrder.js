export default function StepsOrder(){
    return(
        <div class='px-[16px] mt-6 flex flex-col gap-8'>
            <p class='mobile-s:text-4xl text-center'>Як замовити?</p>
            <ul class='border-l-2 border-gray-400 flex flex-col gap-4'>
                <li class="relative flex flex-col pl-6">
                    <span class='mobile-s:w-3 mobile-s:h-3 rounded-xl bg-black absolute left-[-6px] top-0'></span>
                    <span class='text-xl'>Заявка на сайті</span>
                    <span class='font-thin text-xl'>Залишіть ваш номер телефоному на нашому сайт</span>
                </li>
                <li class="relative flex flex-col pl-6">
                    <span class='mobile-s:w-3 mobile-s:h-3 rounded-xl bg-black absolute left-[-6px] top-2'></span>
                    <span class='text-xl'>Дзвінок</span>
                    <span class='font-thin text-xl'>Наш менеджер зв'язується з вами та уточнить деталі замовлення.</span>
                </li>
                <li class="relative flex flex-col pl-6">
                    <span class='mobile-s:w-3 mobile-s:h-3 rounded-xl bg-black absolute left-[-6px] top-2'></span>
                    <span class='text-xl'>Доставка</span>
                    <span class='font-thin text-xl'>Доставляємо ваше замовлення Новою Поштою протягом 1-3 днів по всій Україні. Отримуєте посилку на відділенні Нової Пошти. Оплачуєте після огляду</span>
                </li>
                <li class="relative flex flex-col pl-6">
                    <span class='mobile-s:w-3 mobile-s:h-3 rounded-xl bg-green-700 absolute left-[-6px] top-4'></span>
                    <span class='text-xl'>Готово!</span>
                </li>
            </ul>
        </div>
    )
}