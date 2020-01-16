import React, {Component} from 'react'

class FormClass extends Component {

    constructor(){
        super()
        this.refreshNow = this.refreshNow.bind(this)
        this.state ={
            name: 'zihad',
            age: '22',
            job: 'student',
            email: {
                firstEmail: 'ahmedxihad@gmail.com',
                secondEmail: 'zihad@gmail.com',
                thirdEmail: [1,2,3,4,5,6,7,8,9]
            }
        }
    }

    refreshNow(){
        this.forceUpdate()
    }

    changeName(a){
        this.setState({name:a})
    }
     doNow =()=> alert("now")

    render() {
        return(
        <div>
            <h1>{Math.random()}</h1>
            <button onClick = {this.refreshNow}>refresh now</button><br/><br/>
            <button onClick ={this.changeName.bind(this, "zihadul islam")} >change name</button>
            <h1>from {this.props.name}</h1>
        <h1>my name is {this.state.name} and i am {this.state.age}
         years old.My Email is: {this.state.email.thirdEmail[3]}</h1>
        </div>
        ) 
    }
}

export default FormClass