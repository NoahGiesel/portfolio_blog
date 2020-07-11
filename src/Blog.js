import React, {useState, useEffect } from 'react';  
import {Link} from "react-router-dom";
import jsonFile from "./blog_post_files.json"


function Blog() {

    useEffect(() => { 
        fetchItems();
    },[]);

    const [items, setItems ] = useState([])

    const fetchItems = async () => {
        let fetArr=[]
        for (let i = 0; i < jsonFile.length; i++) { 
            fetArr.push(jsonFile[i])  
        }
        setItems(fetArr)  
         
    }

  return (
    <div className="blog"> 
        {items.map(item => ( 
            <React.Fragment key={item.id} >
                <h1 className="blog_h1">
                    <Link to={`/blog/${item.id}`}>{item.name}</Link>
                </h1>  
                <p className="blog_p">
                    <Link to={`/blog/${item.id}`}> {item.short_description}</Link>
                </p>
                <h4></h4>
            </React.Fragment>
        ))}
    </div>
  );
}

export default Blog;
