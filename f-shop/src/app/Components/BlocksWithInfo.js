import product from "../data/product"
import Image from "next/image"

export default function BlockWithInfo(){
    return(
        <div class='mobile-s:flex mobile-s:flex-col mobile-s:gap-2 mobile-s:px-[16px] mb-4 tablet-m:flex-row tablet-m:flex-wrap tablet-m:justify-center'>
            {product.descriptionForBlocks.map((item) => {
                return(
                    <div class='flex flex-col gap-4 border border-gray-300 p-4 bg-white tablet-m:w-[360px] tablet-m:p-6 tablet-l:w-[450px] tablet-l:gap-6 desktop:w-[32%]' key={item}>
                        <Image src={item.srcImg} alt="" class='mobile-s:w-full mobile-s:h-[250px] mobile-l:h-[300px] object-contain tablet-l:h-[420px] desktop:h-[300px]'></Image>
                        <p class='font-bold text-xl tablet-m:text-4xl desktop:text-2xl'>{item.title}</p>
                        <p class=' tablet-m:text-3xl desktop:text-xl'>{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}