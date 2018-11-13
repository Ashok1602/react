import AppBar from 'material-ui/AppBar';
import React,{ Component } from 'react';
class Header extends Component
{
    
        constructor(props){
            super(props);
        }
  render()
  {
      return(
          <div>
              <AppBar title="Registraion page"
              />
          </div>
      )
  }
}
export default Header;