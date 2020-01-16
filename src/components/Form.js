import React, { Component } from 'react';
import ReactDOM from 'react-dom'
class Form extends Component {

    constructor(){
        super()
        this.state ={
            fname: "",
            lname: "",
            email: "",
            phone: ""
        }
    }

    changeHandler = (event) => {
        let info = event.target.name
        let infoValue = event.target.value
        this.setState({[info]: infoValue})

        if(info === 'fname'){
            let namePattern =/^([a-zA-Z]){2,30}$/
            if(!namePattern.test(infoValue)){
                this.setState({fname: 'first nae is not valid'})
            }
        }
        if(info === 'lname'){
            let namePattern = /^([a-zA-Z]){2,30}$/
            if(!namePattern.test(infoValue)){
                this.setState({lname: 'last nae is not valid'})
            }
            
        }
        if(info === 'email'){
            //let emailPattern =/\s+@\s+\.\s+/;
            let emailPattern =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if(!emailPattern.test(infoValue)){
                this.setState({email: 'email is not valid'})
            }
        }
        if(info === 'phone'){ 
            if(!Number(infoValue)){
                this.setState({phone: 'phone number is not valid'})
            }
        }
    }


    render() {
        return (
            <div className="container">
                <form className="input-field col s4">
                <p>first name: {this.state.fname}</p>
                <p>last name: {this.state.lname}</p>
                <p>email: {this.state.email}</p>
                <p>phone: {this.state.phone}</p>
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