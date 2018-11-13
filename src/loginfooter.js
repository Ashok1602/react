import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class LoginFooter extends Component
{
  constructor(props)
  {
      super(props);
  }
  render()
  {
      return(
          <div>
              <strong>
                  Are you forgot register here! Hoo don't worry.please click below button       
              </strong>
              <br/>
              <RaisedButton label="register now" primary={true} style={{marginTop:15}}
              />
          </div>
      )
  }
}
export default LoginFooter;