import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <header>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* Default height for small devices */\n    #intro-example {\n      height: 400px;\n    }\n\n    /* Height for devices larger than 992px */\n    @media (min-width: 992px) {\n      #intro-example {\n        height: 600px;\n      }\n    }\n  "
    }}
  />
  <div
    id="intro-example"
    className="p-5 text-center bg-image"
    style={{
        height:'100vh',
      backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")'
    }}
  >
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h3 className="mb-3">A podcast is a collection or series of digital audio files that are made</h3> <h3>available for downloading or listening via the Internet.</h3>
          <h5 className="mb-4">
            Best &amp; free platform to publish your podcast
          </h5>
          <NavLink
            className="btn btn-outline-light btn-lg m-2"
            to="/register"
            role="button"
            rel="nofollow"
            target="_blank"
          >
            Register
          </NavLink>
          <NavLink
            className="btn btn-outline-light btn-lg m-2"
            to="/login"
            target="_blank"
            role="button"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Home