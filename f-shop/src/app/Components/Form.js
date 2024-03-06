'use client'

import React from "react";

import FormInput from "../UI/FormInput";
import Button from "../UI/Button";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

let bot = {
    TOKEN: '6415873297:AAEdCF0TIYxXUIaiBeXCWQ_0KAB12PtP0nE',
    chatID: '-4152068386'
}

const url = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${JSON.stringify()}`

export default function Form(){
    const [values, setValues] = React.useState({
        name: "",
        surname: "",
        number: "",
        town: "",
        adress: "",
    })

    const basket = useSelector((state) => state.basketReducer.items)


    const inputs = [
        {
            id: 0,
            name: "name",
            type: "text",
            placeholder: "Ваше ім‎я",
            label: 'Ваше ім‎я',
            errorMessage: 'Імя занадто коротке або довге! 2-16 Символів.',
            required: true,
            pattern: "^[а-яА-ЯІі]{2,16}$",
        },
        {
            id: 1,
            name: "surname",
            type: "text",
            placeholder: "Ваше призвіще",
            label: 'Наприклад: Мельник',
            errorMessage: 'Призвіще занадто коротке або довге! 2-16 Символів.',
            required: true,
            pattern: "^[а-яА-ЯІі]{2,16}$",
        },
        {
            id: 2,
            name: "number",
            type: "tel",
            placeholder: "00-000-00-00",
            label: 'Введіть номер телефону',
            errorMessage: 'Введіть повний номер телефону.',
            pattern: "[0-9]{9}",
            static: '+38 0',
            required: true,
        },
        {
            id: 3,
            name: "town",
            type: "text",
            placeholder: "Наприклад: м.Київ",
            label: 'Населенний пункт',
            errorMessage: 'Населенний пункт має як мінімум 3-16 символів',
            required: true,
            patterrn: "^[а-яА-ЯІі]{3,16}$",
        },
        {
            id: 4,
            name: "adress",
            type: "number",
            placeholder: "Наприклад: 27",
            label: 'Відділення Нової Пошти',
            errorMessage: 'Введіть номер відділення',
            required: true,
            pattern: "^[0-9]{1,3}$",
        },
    ]
    const router = useRouter()


    function onChange(e){
        setValues( { ...values, [e.target.name]: e.target.value})
    }

    function sendData(event){
        event.preventDefault()

        
        let message = `${values.name}\n${values.surname}\n+38${values.number}\n${values.town}НП:${values.adress}\n${basket.map((item) => { return `${item.id} - ${item.count}шт`})}`

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message}`)
        
        router.push('/basket/form/success')
    }

    console.log(values)


    return(
        <form class='mobile-s:flex mobile-s:flex-col mobile-s:gap-3 tablet-l:mt-[80px]' onSubmit={sendData}>
            {inputs.map((input) => {
                return(
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}></FormInput>
                )
            })}
            <div class='mobile-s:my-4'>
                <button class='bg-purple-600 text-white uppercase mobile-s:px-4 mobile-s:py-3 mobile-l:text-xl mobile-l:px-6 mobile-l:py-3 tablet-m:text-3xl tablet-m:py-7 desktop:py-3 desktop:text-xl' type='submit'>Надіслати</button>
                
            </div>
        </form>
    )
}