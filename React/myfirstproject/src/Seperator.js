function Seperator(props){
    let temp = "";

    for(let i=0;i<props.count ;i++){
        temp+= props.by;
    }
    return(
        <>
            {props.isDisabled=="true" && "Component is disabled"}
            {props.isDisabled=="false" && <h1>{ temp }</h1>}
        </>
    );
}

export default Seperator;