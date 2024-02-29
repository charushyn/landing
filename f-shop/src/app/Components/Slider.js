'use client'

import photoes from "../data/photoes"
import React from "react"

export default function Slider(props){
    const [count, useCount] = React.useState(0)

    function nextPhoto(currentCount){
        currentCount == photoes.length - 1 ? useCount(0) : useCount(currentCount + 1)
    }

    function previousPhoto(currentCount){
        currentCount == 0 ? useCount(photoes.length - 1) : useCount(currentCount - 1)
    }

    return(
        <div class='flex flex-col gap-2'>
            <div class='flex flex-row items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7  bg-white border-[1px] border-black rounded-lg" onClick={() => previousPhoto(count)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                {<img class='mobile-s:w-[230px] mobile-s:h-[400px] object-contain' src={photoes[count]}></img>}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7  bg-white border-black border-[1px] rounded-lg" onClick={() => nextPhoto(count)}>
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div class='flex flex-row flex-wrap justify-center gap-2'>
                {photoes.map((item) => {
                    if(item == photoes[count]){
                        return(<img src={item} class='mobile-s:w-12 mobile-s:h-12 border-red-500 border-2'></img>)
                    } else {
                        return(<img src={item} class='mobile-s:w-10 mobile-s:h-10 border-black border-2' onClick={() => {
                            useCount(photoes.findIndex((photo) => photo == item))
                        }}></img>)
                    }
                })}
            </div>
        </div>
    )
}