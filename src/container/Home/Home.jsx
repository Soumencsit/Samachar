import React, { useEffect, useState } from "react";
import "./Home.css";
function NewsCard(props) {
  // console.log(props);
  const [myNews, setMyNews] = useState([]);
  const fetchData = async () => {
    await fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=84e6ce66d225489cb208a36573b115f1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyNews(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [props]);

  return (
    <div className="card__main">
      {myNews.map((element) => {
        return (
          <>
            <div className="card__container">
              <div className="card__header">
                <p>{element.title}</p>
              </div>

              <div className="card__image">
                <img
                  src={
                    element.urlToImage === null
                      ? "https://i.blogs.es/e3da04/joe/840_560.jpeg"
                      : element.urlToImage
                  }
                  alt=""
                />
              </div>
              <div className="description">
                <p>{element.description}</p>
              </div>
              <a
                className="learnmore"
                href={element.url}
                title="Learn More"
                target="_blank"
              >
                Read More...
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default NewsCard;
