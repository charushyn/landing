'use client'

import QA from "../data/faq"
import React from "react"

export default function FAQ(){
    const a = {...QA}

    const [value, setValue] = React.useState(a)
    console.log(value)

    return(
        <div>
            {QA.map((item) => {
                <></>
            })}
        </div>
    )
}