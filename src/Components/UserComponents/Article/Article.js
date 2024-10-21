import React from 'react';
import './Article.css';
import { Link } from 'react-router-dom';

const Article = ({ img, title, id, brief }) => {
  return (
    <Link to={`/article/${id}`}>
      <div className="shadow-lg article-card">
        <img src={img} className="img-fluid" alt="Article Illustration" />
        <div className="text-center">
          <h5 className="text-end m-3 fs-6">{title}</h5>
          {/* <p className='text-end m-3 fs-6'>{brief}</p> */}
        </div>
      </div>
    </Link>
  );
}

export default Article;
