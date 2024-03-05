import photoes from "../data/photoes"
import React from "react"
import Slider from "./Slider"
import product from "../data/product"
import Button from "../UI/Button"

export default function SecondBlock(props){
    return(
        <div class='px-[16px] mobile-s:flex mobile-s:flex-col desktop:flex-row desktop:gap-5'>
            <Slider></Slider>
            <div class='flex flex-col mobile-s:my-4'>
                <h1 class='mobile-s:text-2xl mobile-m:text-3xl tablet-m:text-5xl tablet-l:text-6xl desktop:text-5xl'>{product.name}</h1>
                <p class='mobile-s:text-xl mobile-m:text-2xl text-red-600 mt-2 tablet-m:text-5xl desktop:text-4xl'>{product.currentPrice}{product.currency}</p>
                <p class='mobile-s:text-xl mobile-m:text-2xl tablet-m:text-4xl text-gray-500 line-through'>{product.previousPrice}{product.currency}</p>
                <div class='mobile-s:mt-3 flex flex-col gap-2 mb-6 desktop:mb-2'>
                    {product.description.map((item) => {
                        return(
                            <div class='flex flex-row' key={item}>
                                <p class='font-bold mobile-m:text-xl tablet-m:text-4xl tablet-l:text-4xl desktop:text-2xl'>{item.title}</p>
                                <p class='tablet-m:text-3xl mobile-m:text-xl tablet-l:text-4xl desktop:text-2xl'>:</p>
                                <p class=' pl-2 mobile-m:text-xl  tablet-m:text-3xl tablet-m:mt-1 tablet-l:text-4xl desktop:text-2xl'>{item.text}</p>
                            </div>
                        )
                        })}
                </div>
                <div class='flex flex-row w-fit gap-[1px] mb-6 desktop:mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400  mobile-m:w-7 mobile-m:h-7 tablet-m:w-10 tablet-m:h-10 desktop:w-7">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400  mobile-m:w-7 mobile-m:h-7 tablet-m:w-10 tablet-m:h-10 desktop:w-7">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400  mobile-m:w-7 mobile-m:h-7 tablet-m:w-10 tablet-m:h-10 desktop:w-7">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400  mobile-m:w-7 mobile-m:h-7 tablet-m:w-10 tablet-m:h-10 desktop:w-7">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400  mobile-m:w-7 mobile-m:h-7  tablet-m:w-10 tablet-m:h-10 desktop:w-7">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                    <p class=' pl-2 mobile-m:text-xl tablet-m:text-3xl desktop:text-xl desktop:mt-2'>(99+)</p>
                </div>
                <Button text={'Оформити замовлення'}></Button>
            </div>
        </div>
    )
}