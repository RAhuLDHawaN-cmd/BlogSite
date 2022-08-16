import React from 'react';
import articledata from './article-content';
import ArticleMainList from '../components/ArticleMainList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({match}) =>{

    const data=articledata.find(itx=>itx.name===match.params.Name)

    const filterdata=articledata.filter(itx=>itx.name!==match.params.Name)

    if(!data)
        return (<NotFoundPage/>)
    else{
        return (
            <>
                <h1>The {
                match.params.name} Article</h1>
                {data.content.map((itx,key)=>
                <p key={key}>{itx}</p>    
                )}


                <ArticleMainList alldata={filterdata}/>    


            </>
        )}
};

export default ArticlePage;