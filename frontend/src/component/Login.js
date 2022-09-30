import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata);


    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Logedin",
      });
      const data = await response.json();
      sessionStorage.setItem('user', JSON.stringify(data));
      resetForm();
      navigate('../podcastcard');

    } else if (response.status === 401) {
      console.log("Login failed");
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Login failed!",
      });
      navigate('register');
    } else {
      console.log("unknown error ocuured");
    }
  };

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
    <div>
      <section className="vh-100" style={{ backgroundColor: "#301847" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-6 d-none d-md-block">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFljiBBGyHaMFMLN_DFzIa7-_QvfGlchizDGzC3OJkLSKLalc1XwYKt3Z5wuZTV30abw&usqp=CAU"
                      alt="login form"
                      className="img-fluid "
                      style={{ borderRadius: "1rem 0 0 1rem",backgroundSize:"cover",width:650,height:650}}
                    />
                  </div>
                  <div className="col-md-6 col-lg-6 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <Formik
                        initialValues={{
                          // username: "",
                          email: "",
                          password: "",
                        }}
                        onSubmit={loginSubmit}
                      >
                        {({ values, handleChange, handleSubmit }) => {
                          return (
                            <form onSubmit={handleSubmit}>
                              <div className="d-flex align-items-center mb-3 pb-1">
                                <i
                                  className="fas fa-sign-in-alt fa-2x me-3"
                                  style={{ color: "#ff6219" }} 
                                />
                                <span className="h1 fw-bold mb-0">Login</span>
                              </div>
                              <h5
                                className="fw-normal mb-3 pb-3"
                                style={{ letterSpacing: 1 }}
                              >
                                Sign into your account
                              </h5>
                              <div className=" mb-4">
                              <label
                                  className="form-label"
                                  htmlFor="form2Example17"
                                >
                                  Email address
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  className="form-control form-control-lg"
                                />
                                
                              </div>
                              <div className=" mb-4">
                              <label
                                  className="form-label"
                                  htmlFor="form2Example27"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  id="password"
                                  value={values.password}
                                  className="form-control form-control-lg"
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="pt-1 mb-4">
                                <button
                                  className="btn btn-dark btn-lg btn-block"
                                  type="submit"
                                >
                                  Login
                                </button>
                              </div>
                              <a className="small text-muted" href="#!">
                                Forgot password?
                              </a>
                              <p
                                className="mb-5 pb-lg-2"
                                style={{ color: "#393f81" }}
                              >
                                Don't have an account?{" "}
                                
                                <NavLink
                                  to="/register"
                                  style={{ color: "#393f81" }}
                                >
                                  Register here
                                </NavLink>
                              </p>
                              <NavLink to="#!" className="small text-muted">
                                Terms of use.
                              </NavLink>
                              <NavLink to="#!" className="small text-muted">
                                Privacy policy
                              </NavLink>
                            </form>
                          );
                        }}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Login;
