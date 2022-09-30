import React, { useEffect, useState } from 'react'

const PodcastManager =() => {
    const [podcastListVariable, setPodcastListVariable] = useState([])

    const  fetchPodcasts = async () => { 
        const response= await fetch("http://localhost:5000/podcast/getall");
        const data=await response.json()
        console.log(data);
        setPodcastListVariable(data)
        console.log(podcastListVariable)
     }
  
   
    useEffect(() => {
      fetchPodcasts();   
    }, [])
    


const showPodcast = () => {
    return (
        <table className="table table-white table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              {/* <th>Title</th> */}
              <th>CreatedBy</th>
              <th>CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {podcastListVariable.map((podcast, index) => (
              <tr key={index}>
                <td>{podcast.title}</td>
                <td>{podcast.description}</td>
                {/* <td>{podcast.createdby}</td>
                <td>{podcast.createdat}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      );
}





  return (
    <>
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          'url("https://burrelles.com/wp-content/uploads/2021/11/what-you-need-to-know-about-podcast.jpg")',
        height: 400
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Podcast Sharing Webapp</h1>
            <h4 className="mb-3">Know Your Voice</h4>
            <a className="btn btn-outline-light btn-lg" href="AddPodcast" role="button">
              Create Your First Podcast
            </a>
          </div>
        </div>
      </div>
    </div> 
    <div className="container">
    <h1 className="text-center">Podcast Manager</h1>
    <div className="row">
      <div className="col-md">{showPodcast()}</div>
    </div>
  </div>
  </>
  )
}

export default PodcastManager