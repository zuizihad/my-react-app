import React, {Component} from 'react'

class FormClass extends Component {

     doNow =()=> alert("now")

    render() {
        return(
        <div>
            <button onClick ={this.doNow} >submit</button>
            <h1>from {this.props.name}</h1>
        </div>
        ) 
    }
}

export default FormClass