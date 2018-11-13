
import React, {Component} from 'react';
import Dashheader from './dashheader';
import Dashfooter from './dashfooter';
class Dashboard extends Component
{
   render()
   {
       return(
           <div>
               <Dashheader />
                  <h2> Thanks for visiting your Dashboard. </h2>
               <Dashfooter />               
           </div>
          
        )
   }
}
export default Dashboard;