'use client'

import photoes from "../data/photoes"
import React from "react"

export default function Slider(props){
    const [count, setCount] = React.useState(0)

    function nextPhoto(currentCount){
        currentCount == photoes.length - 1 ? setCount(0) : setCount(currentCount + 1)
    }

    function previousPhoto(currentCount){
        currentCount == 0 ? setCount(photoes.length - 1) : setCount(currentCount - 1)
    }

    return(
        <div class='flex flex-col gap-2 items-center tablet-m:gap-5 tablet-l:mt-5'>
            <div class='flex flex-row items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  bg-white border-[1px] border-black rounded-lg mobile-m:w-7 mobile-m:h-7 tablet-m:w-[70px] tablet-m:h-[50px] desktop:w-[50px] desktop:h-[40px] animate-pulse" onClick={() => previousPhoto(count)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                {<img class='mobile-s:w-[200px] mobile-s:h-[300px] object-contain tablet-m:w-full tablet-m:h-[600px] tablet-l:h-[800px] desktop:h-[500px] desktop:w-[400px]' src={photoes[count]}></img>}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5  bg-white border-black border-[1px] rounded-lg mobile-m:w-7 mobile-m:h-7 tablet-m:w-[70px] tablet-m:h-[50px] desktop:w-[50px] desktop:h-[40px] animate-pulse" onClick={() => nextPhoto(count)}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div class=' mobile-s:gap-1 flex flex-row flex-wrap justify-center tablet-m:gap-3'>
                {photoes.map((item) => {
                    if(item == photoes[count]){
                        return(<img key={''} src={item} class='mobile-s:w-[40px] mobile-s:h-[40px] border-red-500 border-2 tablet-m:w-[100px] tablet-m:h-[100px] desktop:w-[70px] desktop:h-[70px]'></img>)
                    } else {
                        return(<img src={item} key='' class='mobile-s:w-[35px] mobile-s:h-[35px] border-black border-2 tablet-m:w-[90px] tablet-m:h-[90px] desktop:w-[65px] desktop:h-[65px]' onClick={() => {
                            setCount(photoes.findIndex((photo) => photo == item))
                        }}></img>)
                    }
                })}
            </div>
        </div>
    )
}