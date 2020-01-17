import React, { Component } from 'react';
import axios from 'axios'
class Country extends Component {
 
    constructor(){
        super()
        this.state ={
            countryData: []
        }
    }

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(Response =>{
            this.setState({countryData: Response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }


    render() {

        const countryList = this.state.countryData
        const countyrName = countryList.map(countryList =>{
            return <li>{countryList.name}</li>
        })

        return (
            <div>
                {countyrName}
            </div>
        );
    }
}
export default Country;
