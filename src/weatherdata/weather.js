import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import React,{ Component } from 'react';
import axios from 'axios';
import WeatherHeader from './header';
import WeatherFooter from './footer';
class Weather extends Component
{
    constructor(props)
    {
        super(props);
    }

    handleClick= event =>
    {
      event.preventDefault();
     const  headers = {"Content-Type": "application/json","Access-Control-Allow-Headers": "*" }
      axios.get('https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=7945a91cc1497c5ae85783bf3ce56751',headers
      )
      .then (response => 
        {
            console.log(response);
        })
    }
    render()
    {
        return(
            <div>
                <MuiThemeProvider>
                    <center>
                <WeatherHeader />
                <RaisedButton label="Feacth data" primary={true} style={{margin:15}}
                    onClick={(event)=>this.handleClick(event)}
                />
                <WeatherFooter />
                </center>
                </MuiThemeProvider>             
            </div>
        )
    }
}
//7945a91cc1497c5ae85783bf3ce56751
export default Weather;