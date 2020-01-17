import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import App from './App';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom'
import * as serviceWorker from './serviceWorker';

const myRouting = (
   <Router>
       
        <div>
        <nav>
        <div className="nav-wrapper">
        <ul className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
        </div>
        </nav>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio" component={Portfolio}/>

    </div>
   
   </Router>
)



ReactDOM.render(myRouting, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
