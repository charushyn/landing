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
            <label>{label}</label>
            <input class={props.static ? `mobile-s:w-full mobile-s:h-[50px] border-[1.5px] border-gray-400 bg-white mobile-s:pl-[52px] relative` : ` mobile-s:w-full mobile-s:h-[50px] border-[1.5px] border-gray-400 bg-white mobile-s:pl-2 relative`} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} {...inputProps}></input>
            {props.static ? <span class='relative mobile-s: bottom-[40.5px] left-2 w-fit'>{props.static}</span> : ''}
            <span class='error'>{errorMessage}</span>
        </div>
    )
}