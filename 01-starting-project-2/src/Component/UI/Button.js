
function Button(props){
    return(
        <button  onClick={props.onClick} className={props.className} type={props.type}>{props.children}</button>
    )

}

export default Button