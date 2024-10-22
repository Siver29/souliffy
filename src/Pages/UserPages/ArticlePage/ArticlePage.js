import React from 'react';
import { useArticle } from '../../../hooks/useArticle';
import '../ArticlePage/ArticlePage.css'

const ArticlePage = () => {
  const article = useArticle();

  if (!article) return <p>Article not found</p>;

  return (
    <div className="container">
      <div style={{ backgroundColor: 'var(--secondary-bg-color)' }} className='shadow'>
        <h2 className="text-center py-4">{article.title}</h2>
        <div className="d-flex justify-content-center py-4">
          <img src={article.img} alt="img" className="img-fluid w-50" />
        </div>
      </div>
      <div className="bg-white p-4 shadow text-end">{article.content}</div>
    </div>
  );
};

export default ArticlePage;
