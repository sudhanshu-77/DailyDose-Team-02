import React from 'react';
import '../App.css';
import bg_img from '.././assets/images/login-bg.png';
import login_img from '.././assets/images/login.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="wrapper">
      <div id="main-bg">
        <img src={bg_img} alt="Main Bg" />
      </div>
      <div className="inner">
        <form >
          <h3>Register Now!</h3>
          <div className="form-group">
            <input type="text" placeholder="First Name" className="form-control" />
            <input type="text" placeholder="Last Name" className="form-control" />
          </div>
          <div className="form-wrapper">
            <input
              type="text"
              placeholder="Email Address"
              className="form-control" />
            <i className="zmdi zmdi-email"></i>
          </div>
          <div className="form-wrapper">
            <select name="" id="" className="form-control">
              <option value="" disabled selected>Gender</option>
              <option value="male">Male</option>
              <option value="femal">Female</option>
              <option value="other">Other</option>
            </select>
            <i className="zmdi zmdi-caret-down" style={{fontSize: "17px"}}></i>
          </div>
          <div className="form-wrapper">
            <input type="number" placeholder="Age" className="form-control" />
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="form-control" />
            <i className="zmdi zmdi-lock"></i>
          </div>

          <button>
            Sign Up
            <i className="zmdi zmdi-arrow-right"></i>
          </button>

          <div id="hr">OR</div>

          <div>
            <a href="">
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://i.ibb.co/ydLySMx/google.png" />
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
                    height="32px" />
                </div>
                <p>Sign in with Facebook</p>
              </div>
            </a>
          </div>

          <div id='sign-in'>
              <span>
                Already have an account?
                <Link to="/"> Login</Link>
              </span>
            </div>
        </form>
        <div className="image-holder">
          <div id="mini-box">
            <p>
Just one step<br />
away from your<br />
caretaker
            </p>
            <img src={login_img} alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register