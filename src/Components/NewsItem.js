// import React, { Component } from "react";
import React from "react";
import BreakingNews from "./BreakingNews.jpg";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imageUrl ? imageUrl : BreakingNews}
          className="card-img-top"
          alt="Your connection is not private"
        />
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: 1, left: "50%" }}
        >
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              by {author ? author : "Unknown"} on {new Date(date).toUTCString()}{" "}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};
export default NewsItem;
