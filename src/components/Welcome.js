import  React from 'react'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'
function Welcome(props){

function DoThis(){
    alert("button clicked")
}
const DoIt = (msg) => alert(msg+ " you did it")

    return (
        <div>
            <button className="waves-effect waves-light btn" onClick = {DoIt.bind(this, "congratulations")}>click me</button>
            <h1>name: {props.name} and age: {props.age}</h1>
        </div>

    )
}

export default Welcome