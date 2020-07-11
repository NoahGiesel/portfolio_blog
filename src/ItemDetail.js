import React, {useState, useEffect } from 'react';  
import jsonFile from "./blog_post_files.json"




function ItemDetail({ match }) {

  const [position, setPosition ] = useState(0)

    useEffect(() => { 
      fetchItems();
  },[]);

 
  const fetchItems = async () => { 
      for (let i = 0; i < jsonFile.length; i++) {  
          if( jsonFile[i].id == match.params.id) { 
            setPosition(i)
          }  
      } 
      
  }
  return (
    <div className="itemDetail">
        <h1>{jsonFile[position].name}</h1>
        <h5>{jsonFile[position].description}</h5>
    </div>
  );
}

export default ItemDetail;
