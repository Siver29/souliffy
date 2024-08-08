import React from 'react';
import './Article.css'

const Article = ({ img, title, text }) => {
  return (
    <div className="article-card shadow-lg">
      <img src={img} className="article-img img-fluid" alt="Depression Illustration" />
      <div className="card-body text-center">
        <h5 className="card-title text-end m-3 fs-6">{title}</h5>
        <p className="card-text text-end m-3 fs-6">
        {text}
        </p>
      </div>
    </div>
  );
}

export default Article;
