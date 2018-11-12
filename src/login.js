import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React,{ Component } from 'react';
import axios from 'axios';

class Login extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    handleClick = event =>
    {
        var url="https://api-d.klasbord.com/auth/login";
        var payload={
            "username":this.state.username,
            "password":this.state.password
        }
        axios.post(url,payload,
            {
                headers:{"Content-Type": "application/json" ,"Accept-Language":"fr-FR, en-US;q=0.9"},
                data:JSON.stringify(payload),
                datatype:"json"
            })
        .then(response =>
        {
          console.log(response);
        })

    }

    render()
    {
        return(
            <div>
                <center>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                        title="Login"
                        />
                        <TextField
                        hintText="enter username"
                        floatingLabelText="username"
                        onChange = {(event,newvalue) => this.setState({username:newvalue})}
                        />
                        <br/>
                        <TextField
                        hintText="enter password"
                        floatingLabelText="password"
                        onChange ={ (event,newvalue) => this.setState({password:newvalue})}
                        />
                        <br/>
                        <RaisedButton label="submit" primary={true} style={{margin:15}}
                        onClick={(event)=>this.handleClick(event)}
                        />
                    </div>
                </MuiThemeProvider>
                </center>
            </div>
        )
    }
}
    
export default Login;