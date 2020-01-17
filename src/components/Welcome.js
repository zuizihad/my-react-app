import  React from 'react'
function Welcome(props){

function DoThis(){
    alert("button clicked")
}
const DoIt = (msg) => alert(msg+ " you did it")

    return (
        <div>
              <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>
            <select>
                <option>dhaka</option>
                <option>khulna</option>
                <option>ctg</option>
            </select>
            
            <ul className="dropdown-content">
                <li>dhaka</li>
                <li>ctg</li>
            </ul>
        </div>

    )
    
}

export default Welcome