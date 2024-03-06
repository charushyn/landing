export default function Button(props){
    return(
        <button class='bg-purple-600 text-white uppercase mobile-s:px-4 mobile-s:py-3 mobile-l:text-xl mobile-l:px-6 mobile-l:py-3 tablet-m:text-3xl tablet-m:py-7 desktop:py-3 desktop:text-xl' onClick={props.onClick} onSubmit={props.onSubmit} type={props.type}>{props.text}</button>
    )
}