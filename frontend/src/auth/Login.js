import React from "react";
import "../App.css";
import bg_img from ".././assets/images/login-bg.png";
import login_img from ".././assets/images/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper">
      <div id="main-bg">
        <img src={bg_img} alt="Main Bg" />
      </div>
      <div className="inner">
        <form>
          <h3 style={{ marginBottom: "0px", textAlign: "left" }}>
            Welcome Back 🖐
          </h3>
          <p style={{ marginTop: "0px", marginBottom: "2vw" }}>
            Experience the power of seamless caregiving at your fingertips! Log
            in today and discover how our platform can revolutionize your
            approach to senior care.
          </p>

          <div className="form-wrapper">
            <input
              type="text"
              placeholder="Email Address"
              className="form-control"
            />
            <i className="zmdi zmdi-email"></i>
          </div>

          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />
            <i className="zmdi zmdi-lock"></i>
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label for="remember"> Remember me</label>
            </div>
            <div className="forgot">
              <Link to="/reset">Forgot password?</Link>
            </div>
          </div>

          <button>
            Sign in
            <i className="zmdi zmdi-arrow-right"></i>
          </button>

          <div id="hr">OR</div>

          <div>
            <a href="">
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://i.ibb.co/ydLySMx/google.png"
                  />
                </div>
                <p className="btn-text">Sign up with Google</p>
              </div>
            </a>

            <br />

            <a className="btn-fb" href="">
              <div className="fb-content">
                <div className="logo">
                  <img
                    src="https://i.ibb.co/pnpDRC6/facebook.png"
                    alt=""
                    width="32px"
                    height="32px"
                  />
                </div>
                <p>Sign up with Facebook</p>
              </div>
            </a>
          </div>

          <div id="sign-in">
            <span>
              Don't have an account?
              <Link to="/register"> Sign up</Link>
            </span>
          </div>
        </form>
        <div className="image-holder">
          <div id="mini-box">
            <p style={{padding: "1vw"}}>
              Log in now to discover <br />
              personalized features <br />
              tailored to your<br />
              loved one's <br />
              needs!
            </p>
            <img src={login_img} alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
