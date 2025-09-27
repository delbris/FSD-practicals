function Demo(props){
    return (
        <div>
            <h1>Bruh - {props.dept} & {props.inst}</h1>
            {props.children}
        </div>
    )
}

export default Demo