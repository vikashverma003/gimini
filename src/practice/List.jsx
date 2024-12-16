import React from 'react'

/* Here is a simple React component that renders a list of items:

 */

function ItemList() {
    const items = ['Banana','apple','orange'];

 return(<div> <ul> 
    <li>asdasdasd</li>
    {items.map((data,key)=>(
        <li>{data}</li>
    ))}
    
    
    
    </ul></div>);
}

export default ItemList;