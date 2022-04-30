
import React, {Component} from 'react';

class Card  extends Component{
  
render()
  {
    return(
      <table key={this.props.CARD_ID} className="card" >
            <thead></thead>
      <tbody>
        <tr className="CARD_CONTENT">
              <td>{this.props.CARD_CONTENT}</td>
            
            </tr>
            <tr className="CARD_DEADLINE">
             
              <td>Due:{this.props.CARD_DEADLINE}</td>
            </tr>
      </tbody>
            </table>
  
    )
  }
}
export default Card

