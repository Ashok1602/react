import AppBar from 'material-ui/AppBar';
import React ,{Component} from 'react';
class WeatherHeader extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <div>
                <AppBar title="Weather Info"
                />
                <strong>
                    please use below button to featch data..
                </strong>
            </div>
        )
    }
}
export default WeatherHeader; 