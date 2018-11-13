import AppBar from 'material-ui/AppBar';
import React,{ Component } from 'react';
class Dashheader extends Component
{
    
        constructor(props){
            super(props);
        }
  render()
  {
      return(
          <div>
              <AppBar title="WELCOME TO DASHBOARD"
              />
          </div>
      )
  }
}
export default Dashheader;