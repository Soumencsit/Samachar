import React, { useEffect, useState, useContext } from "react";
import "./NewsCard.css";
import UserContext from "../../context/UserContext";
function NewsCard(props) {
  const [propsvar, setPropsvar] = useState(props.newstype);

  const { user } = useContext(UserContext);
  //   console.log("hii");
  //   console.log(user.inputValue);

  let newsType;
  if (user == null) {
    newsType = props.newstype;
  } else {
    newsType = user.inputValue;
  }

  const [myNews, setMyNews] = useState([]);
  const fetchData = async () => {
    await fetch(
      `https://newsapi.org/v2/everything?q=${newsType}&apiKey=84e6ce66d225489cb208a36573b115f1`
    )
      // a1996706e34940ef8646fbfb28ce8bad
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyNews(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });

    // if (propsvar != props.newstype) {
    //   setPropsvar(props.newstype);
    //   user.inputValue = "";
    // }
  };

  useEffect(() => {
    fetchData();
  }, [newsType]);
  //   useEffect(() => {
  //     fetchData();
  //   }, [user.inputValue]);

  return (
    <div className="card-main">
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
