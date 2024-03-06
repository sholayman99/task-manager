import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {errorMsg, isEmail, isEmpty} from "../../helpers/FormHelper.js";

const Login = () => {

    let emailRef,passRef = useRef();

    const loginSubmit = () => {
          let email = emailRef.value;
          let pass = passRef.password;
          if(!isEmail(email)){
              errorMsg("Invalid email!");
          }
          else if(isEmpty(pass)){
              errorMsg("Password required!")
          }
          else{

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
                                <div className="mt-3">
                                    <span>
                                        <Link className="text-center ms-3 animated fadeInUp" to="/registration">Sign Up </Link>
                                        <span className="ms-1">|</span>
                                        <Link className="text-center ms-3 animated fadeInUp" to="/forget-pass">Forget Password</Link>
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