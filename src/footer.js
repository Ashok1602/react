import React,{ Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
class Footer extends Component
{
 constructor(props){
     super(props);
 }
  render()
  {
      return(
          <div>
              <strong>
                 if you already have an account! please click below button. 
              </strong>
              <br/>
              <RaisedButton label="login now" primary={true} style={{marginTop:15}}
              />
          </div>
      )
  }
}
export default Footer;