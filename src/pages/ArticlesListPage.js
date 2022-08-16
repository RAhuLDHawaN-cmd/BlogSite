import React from 'react';
import articledata from './article-content';
import ArticleMainList from '../components/ArticleMainList';

const ArticlesListPage = () => {
    return (
    <div>
     <h1>All Articles</h1>
     <ArticleMainList alldata={articledata}/>
    </div>
    )
};

export default ArticlesListPage;