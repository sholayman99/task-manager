import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {errorMsg, isEmail, isEmpty} from "../../helpers/FormHelper.js";
import {loginRequest} from "../../apiRequest/apiRequest.js";

const Login = () => {

    let emailRef,passRef = useRef();
    const navigate = useNavigate();
    const loginSubmit = async () => {
          let email = emailRef.value;
          let pass = passRef.value;
          if(!isEmail(email)){
              errorMsg("Invalid email!");
          }
          else if(isEmpty(pass)){
              errorMsg("Password required!")
          }
          else{
              let res = await loginRequest(email,pass);
              if(res === true){
               window.location.href = "/";
              }
              else {
                 navigate('/registration');
              }
          }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4>SIGN IN</h4>
                                <br/>
                                <input ref={( input)=> emailRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input  ref={(input)=> passRef = input}  placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={loginSubmit} className="btn w-100 animated fadeInUp float-end btn-primary">Login</button>
                                <hr/>
                                <div className="mt-3 text-end">
                                    <span>
                                        <Link className="text-center h6 ms-3 animated fadeInUp" to="/registration">Sign Up </Link>
                                        <span className="ms-1">|</span>
                                        <Link className="text-center h6 ms-3 animated fadeInUp" to="/send-otp">Forget Password</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;