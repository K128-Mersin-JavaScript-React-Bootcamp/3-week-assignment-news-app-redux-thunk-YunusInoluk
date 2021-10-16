import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getNews } from "../actions";
import { useHistory } from "react-router-dom";

const NewsListPage = (props) => {
  let params = useParams();

  useEffect(() => {
    props.getNews(params.id);
  }, []);
  return (
    <div>
      {props.news.status === "ok" && (
        <ul>
          {props.news.articles.map((item) => (
            <li key={item.urlToImage}>
              <Link
                style={{ display: "flex" }}
                to={`/details/${item.urlToImage}`}
                // onClick={() => {
                //   history.push("/", {
                //     newsDetail: item,
                //   });
                // }}
              >
                <div>
                  <img src={item.urlToImage} alt={item.title} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <div>
                    <span>{item.author}</span>
                    <span>{item.publishedAt}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};
export default connect(mapStateToProps, { getNews })(NewsListPage);
