let ErrorMsg = (props)=>{

// console.log(props.bool);
if(props.bool === true){
    setTimeout(()=> !props.bool )

}
    return ( <div className={props.bool ? "basket hide":"baset"}>
        <h1>Please select a pizza </h1>

    </div> )
}


export default ErrorMsg