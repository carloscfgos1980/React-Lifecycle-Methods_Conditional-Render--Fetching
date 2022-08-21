import React from "react"

function Conditional(props) {
    return <h1>Some cool stuff about conditional rendering</h1>
}

export default Conditional

/*
function Conditional(props) {
     // condition ? statement if true : statement if false. Ex:
    props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>

    *** Same as above
    if(props.isLoading === true) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <h1>Some cool stuff about conditional rendering</h1>
    )    
}

*/
