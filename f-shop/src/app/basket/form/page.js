import Form from "@/app/Components/Form"
import Link from "next/link"

export default function Page(){
    return(
        <div class='mobile-s:px-[16px] min-h-svh bg-gray-100 font-productSans tablet-l:flex tablet-l:flex-col tablet-l:items-center tablet-l:relative'>
                <Link href={'/basket'} class=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 tablet-l:w-[50px] tablet-l:h-[50px] tablet-l:absolute tablet-l:left-2 tablet-l:top-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </Link>
                <Form></Form>
        </div>
    )
}