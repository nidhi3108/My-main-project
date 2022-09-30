import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // const [userState, setUserState] = useState(JSON.parse(sessionStorage.getItem('user')));

  let userState = sessionStorage.getItem("user");

  const signOut = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };
  const login = () => {
    navigate("/login");
  };

  return (
    <header>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/register">
                  Register
                </NavLink>
              </li>
              {/* <li className="nav-item">
            <NavLink className="nav-link text-light" to="/login">
              Login
            </NavLink>
          </li> */}
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/addpodcast">
                  Addpodcast
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link text-light" to="/podcastmanager">
                  PodcastManager
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link text-light" to="/podcastcard">
                  PodcastCard
                </NavLink>
              </li>
            </ul>
          </div>
          <div class="d-flex align-items-center">
            {userState === null ? (
              <button
                type="button"
                onClick={login}
                className="btn btn-info me-3"
              >
                SignIn
              </button>
            ) : (
              <button
                type="button"
                onClick={signOut}
                class="btn btn-danger me-3"
              >
                Sign out
              </button>
            )}

            <a
              class="btn btn-dark px-3"
              href="https://github.com/nidhi3108"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
            {/* <NavLink className="btn btn-dark px-3" to="https://github.com/nidhi3108">
         <i class="fab fa-github"></i>
            </NavLink> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

{
  /* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-link px-3 me-2">
          Login
        </button>
        <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
        <a
          class="btn btn-dark px-3"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
</nav> */
}
