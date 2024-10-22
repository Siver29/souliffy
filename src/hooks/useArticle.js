import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';

export const useArticle = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));
  return article;
};
