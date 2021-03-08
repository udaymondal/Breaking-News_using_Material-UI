import './App.css';
import Button from '@material-ui/core/Button'
import News from './Components/News/News';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=da9c6e7854264429a4937e49dcc37a97';
    fetch(url)
    .then(res => res.json())
    .then (data => {
      console.log(data);
      setArticles(data.articles);
    })
  },[])
  return (
    <div>
      <h2>Material UI</h2>
      <h3>Headlines: {articles.length}</h3>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
