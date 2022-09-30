import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PodcastPlayer = () => {
  const url = "http://localhost:5000/";
  const [podcastDetails, setPodcastDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // console.log(id);

  const fetchPodcasts = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/podcast/getbyid/" + id);
    const data = await response.json();
    console.log(data);
    setLoading(false);
    setPodcastDetails(data);
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const showDetails = () => {
    if (!loading) {
      return (
        <div className="row">
          <div className="col-md-8">
          <img src={url+ podcastDetails.thumbnail} className="img-fluid mt-3" style={{}}/>;
          </div>
          <div className="col-md-4">
            <div className="mt-3">
              
              <h2>{podcastDetails.title}</h2>
              <p>Uploaded By : {podcastDetails.createdBy.username}</p>
              <p>{new Date(podcastDetails.createdAt).toLocaleDateString()}</p>
              {podcastPlayer()}
            </div>
            
          </div>
        </div>
      );
    }
  };

  const podcastPlayer = () => {
    if (!loading) {
      return <audio src={url + "/" + podcastDetails.file} controls style={{width:"66%",Color:"red"}}></audio>;
    }
  };

  return (
    <div>

{showDetails()}

      
    </div>
  );
};

export default PodcastPlayer;
