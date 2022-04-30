import  Card from '../toDoCard/cardComponent'

function Done(props) {
  
 
  return (
    <div className="Table">
    <table className='card_table'>
      <thead className='card_head'>
        <th>Done List</th>
        </thead>
        <tbody className='card_body'>
          <Card CARD_ID="0" CARD_CONTENT="Hello" CARD_DEADLINE={Date.now()} >

          </Card>
          <Card></Card>
          <Card></Card>
         
        </tbody>
      
    </table>
    </div>
  );
}

export default Done;