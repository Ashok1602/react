import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Registration  from './registraion';
import * as serviceWorker from './serviceWorker';
import {  BrowserRouter as Router, Route, Switch , IndexRoute, hashHistory, browserHistory } from 'react-router-dom';
import indexrouter from './indexroute';

//ReactDOM.render(<App />, document.getElementById('root'));

    




ReactDOM.render( 
    <Router>
    <Switch>
        {
         indexrouter.map((props,key)=>{
             return(
           <Route path={props.path} key={key} component={props.component}/>
             );  
        })}
    </Switch>
    </Router>,
     document.getElementById('root')
     );
 








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
