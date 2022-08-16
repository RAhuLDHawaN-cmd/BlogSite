import React from "react";
import { Link } from 'react-router-dom';


const ArticleMainList=({alldata})=>{
    return(
        <>
        <ul>{alldata.map((itx,key)=><li key={key}><h3><Link to={`article/${itx.name}`}>{itx.name}</Link>
     <p>
        {itx.content[0].substring(0,150)}...
     </p>
     
     </h3></li>
    )}</ul>
        </>
    )
}

export default ArticleMainList;