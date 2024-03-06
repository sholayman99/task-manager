import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {errorMsg, isEmail, isEmpty, isMobile, successMsg} from "../../helpers/FormHelper.js";
import {regiRequest} from "../../apiRequest/apiRequest.js";

const Registration = () => {

    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef = useRef();
    const navigate = useNavigate();

    const onRegistration = async () => {
      let  email     =  emailRef.value;
      let  firstName =  firstNameRef.value;
      let  lastName  =  lastNameRef.value;
      let  mobile    =  mobileRef.value;
      let  password  =  passwordRef.value;

       if(!isEmail(email)){
           errorMsg("Valid email required!")
       }
       else if(isEmpty(firstName)){
           errorMsg("Valid first name required!")
       }
       else if(isEmpty(lastName)){
           errorMsg("Valid last Name required!")
       }
       else if(!isMobile(mobile)){
           errorMsg("Valid mobile no required!")
       }
       else if(isEmpty(password)){
           errorMsg("Valid password required!")
       }
       else{
             let res = await regiRequest(email,firstName,lastName,mobile,password);
             if(res === true){
                 navigate('/login');
             }
       }
    }

    return (
        <>
            <div className="container">
                <div className="row  justify-content-center">
                    <div className="col-md-10 col-lg-10 center-screen">
                        <div className="card animated fadeIn w-100 p-3">
                            <div className="card-body">
                                <h4>Sign Up</h4>
                                <hr/>
                                <div className="container-fluid m-0 p-0">
                                    <div className="row m-0 p-0">
                                        <div className="col-md-4 p-2">
                                            <label>Email Address</label>
                                            <input ref={( input)=> emailRef = input } placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>First Name</label>
                                            <input ref={ ( input)=> firstNameRef = input } placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Last Name</label>
                                            <input ref={( input)=> lastNameRef = input } placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Mobile Number</label>
                                            <input ref={ ( input)=> mobileRef = input } placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Password</label>
                                            <input ref={ ( input)=> passwordRef = input } placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                        </div>

                                    </div>
                                    <div className="row mt-2 p-0">
                                        <div className="col-md-4 p-2">
                                            <button onClick={onRegistration} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Next</button>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                    <span>
                                        <Link className="text-center ms-3 animated fadeInUp" to="/login">Sign In </Link>
                                        <span className="ms-1">|</span>
                                        <Link className="text-center ms-3  animated fadeInUp" to="/forget-pass">Forget Password</Link>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;