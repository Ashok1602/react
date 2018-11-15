import React,{Component} from 'react';
import './Table.css';
class Table extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
    }
    
    printTableRow = (arrayOfRows) => {
        const l1 = [1,2,3,4,5,6,7,8,9,10];
        const blueColor = {background:"blue"};
        const redColor = {background:"red"};
      return arrayOfRows.map((row , key) => {
           return (
              <div>
                  { row%2 !== 0 &&  <tr key={key} style={blueColor}>
                       
                       {this.printTableRowData(row,l1)}
                    </tr>
                }
                { row%2 === 0 &&  <tr key={key} style={redColor}>
                       
                       {this.printTableRowData(row,l1)}
                    </tr>
                }
              </div>
           )

      });
    }

    printTableRowData = (row,tableData) =>{
       return  tableData.map((data,key)=>{
            return (
                <td key ={key}>
                   {row*data} 
                </td>
            )
        });
        
    }
    render() {  
        const l = [1,2,3,4,5,6,7,8,9,10];
       
        return(

            <div>
                <table className="table">
                
                    {this.printTableRow(l)}
                    </table>
            </div>
        );
    }
    
};
export default Table;