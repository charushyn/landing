import product from "../data/product"
import Image from "next/image"

export default function BlockWithInfo(){
    return(
        <div class='mobile-s:flex mobile-s:flex-col mobile-s:gap-2 mobile-s:px-[16px] mb-4'>
            {product.descriptionForBlocks.map((item) => {
                return(
                    <div class='flex flex-col gap-4 border border-gray-300 p-4 bg-white' key={item}>
                        <Image src={item.srcImg} class='mobile-s:w-full mobile-s:h-[250px] object-contain'></Image>
                        <p class='font-bold text-xl'>{item.title}</p>
                        <p class=''>{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}