import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

const PodcastCard = () => {
  const userDetail = sessionStorage.getItem("user");
  console.log(JSON.parse(userDetail));
  const [backendData, setBackendData] = useState([]);
  const url = "http://localhost:5000/";

  const showCard = async () => {
    const response = await fetch("http://localhost:5000/podcast/getall");
    console.log(response.status);
    const data = await response.json();
    console.log(data);
    setBackendData(data);
    console.log(backendData.length);
  };

  const showAllCard = () => {
    return backendData.map((data) => (
      <div className="col-md-3">
        <div className="card">
          <img
            src={url+data.thumbnail}
            className="card-img-top"
            alt="Fissure in Sandstone"
          />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">
              {data.description}
            </p>
            <Link to={"/player/"+data._id} className="btn btn-primary">
              View
            </Link>
          </div>
        </div>
      </div>
    ));
  };
  useEffect(() => {
    showCard();
  }, []);
  return (
    <div className="container">
      <h1 className="text-center"> All Podcast</h1>
      <div className="row">{showAllCard()}</div>
    </div>
  );
};

export default PodcastCard;
