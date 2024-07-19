import React from "react";
import errorimage from "../../Assets/depositphotos_273220330-stock-illustration-sorry-page-found-404-error.jpg"
import './404.scss'

const PageNotFound = () => {
  return (
    <div className="errorcontainer">
      <img src={errorimage} />
    </div>
  );
};

export default PageNotFound;
