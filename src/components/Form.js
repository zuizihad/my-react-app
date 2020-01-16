import React, { Component } from 'react';
import ReactDOM from 'react-dom'
class Form extends Component {

    constructor(){
        super()
        this.state ={
            fname: " ",
            lname: " ",
            email: " ",
            phone: " "
        }
    }

    changeHandler = (event) => {
        let info = event.target.name
        let infoValue = event.target.value
        this.setState({[info]: infoValue})
    }


    render() {
        return (
            <div className="container">
                <form className="input-field col s4">
                <p>{this.state.fname}</p>
                <p>{this.state.lname}</p>
                <p>{this.state.email}</p>
                <p>{this.state.phone}</p>
                <input onChange ={this.changeHandler} type="text" name="fname" placeholder="your first name" ></input>
                <input onChange ={this.changeHandler} type="text" name="lname" placeholder="your last name" ></input>
                <input onChange ={this.changeHandler} type="email" name="email" placeholder="your email" ></input>
                <input onChange ={this.changeHandler} type="number" name="phone" placeholder="your phone no" ></input>

                <input class="waves-effect waves-light btn" type="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default Form;