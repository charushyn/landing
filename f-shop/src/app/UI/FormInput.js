'use client'

import React from "react"

export default function FormInput(props){
    const [focused, setFocused] = React.useState(false)

    const {label, onChange, errorMessage, id, ...inputProps} = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    return(
        <div class='flex flex-col gap-1'>
            <label class='mobile-l:text-2xl tablet-m:text-3xl desktop:text-2xl'>{label}</label>
            <input class={props.static ? `mobile-s:w-full mobile-s:h-[50px] border-[1.5px] border-gray-400 bg-white mobile-s:pl-[52px] relative mobile-l:text-xl mobile-l:py-6 mobile-l:pl-[63px] desktop:pl-[58px] desktop:w-[400px]` : ` mobile-s:w-full mobile-s:h-[50px] border-[1.5px] border-gray-400 bg-white mobile-s:pl-2 relative mobile-l:text-xl mobile-l:py-6 mobile-l:pl-3 tablet-m:text-3xl tablet-m:pl-2 tablet-m:py-7 desktop:text-2xl desktop:w-[400px]`} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} {...inputProps}></input>
            {props.static ? <span class='relative mobile-s: bottom-[40.5px] left-2 w-fit mobile-l:text-xl mobile-l:bottom-[43px]'>{props.static}</span> : ''}
            <span class='error'>{errorMessage}</span>
        </div>
    )
}