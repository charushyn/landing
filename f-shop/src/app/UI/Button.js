export default function Button(props){
    return(
        <button class='bg-purple-600 text-white uppercase mobile-s:px-4 mobile-s:py-3' onClick={props.onClick} type={props.type}>{props.text}</button>
    )
}