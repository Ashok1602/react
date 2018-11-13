import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React,{ Component } from 'react';
import Header from './header';
import Footer from './footer';

class Registration extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            FirstName:'',
            LastName:'',
            EmailId:'',
            Password:''
        }
        console.log("registraion page");    
    }
    
    render()
    {
        return(
            <div>
                <center>
                    <MuiThemeProvider>
                        <Header/>
                            <div>
                            
                               <TextField hintText="enter the Firstname"
                               floatingLabelText="firstname"
                               onChange={(event,newvalue)=>this.setState({FirstName:newvalue})}
                               />
                               <br/>
                               <TextField hintText="enter the Lastname"
                               floatingLabelText="lastname"
                               onChange={(event,newvalue)=>this.setState({LastName:newvalue})}
                               />
                               <br/>
                               <TextField hintText="enter the email-id"
                               floatingLabelText="emailid"
                               onChange={(event,newvalue)=>this.setState({EmailId:newvalue})}
                               />
                               <br/>
                               <TextField hintText="enter the password"
                               floatingLabelText="password"
                               onChange={(event,newvalue)=>this.setState({Password:newvalue})}
                               />
                               <br/>
                               <RaisedButton label="register" primary={true} 
                               onClick={(event)=>this.handleClick(event)}
                               />
                            </div>
                            <br/>
                        <Footer/>
                    </MuiThemeProvider>
                    
                </center>
            </div>
        )
    }

}
export default Registration;