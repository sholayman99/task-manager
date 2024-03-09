import React, {useRef} from 'react';
import {getEmail} from "../../helpers/SessionHelper.js";
import {errorMsg, isEmpty} from "../../helpers/FormHelper.js";
import {useNavigate} from "react-router-dom";
import {setPasswordRequest} from "../../apiRequest/apiRequest.js";

const CreatePassword = () => {
    const navigate = useNavigate();
    let email = getEmail();
    let passRef,confirmPassRef = useRef();

    const setPassword = async () => {
      let password = passRef.value;
      let confirmPass = confirmPassRef.value;
      if(isEmpty(password)){
          errorMsg("Password required!");
      }
      else if(isEmpty(confirmPass)){
          errorMsg("Confirm password required!");
      }
      else if(password !== confirmPass){
          errorMsg("Password didn't match!");
      }
      else{
            let res = await setPasswordRequest(password);
            if(res === true){
                navigate('/login');
            }
      }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90 p-4">
                            <div className="card-body">
                                <h4>SET NEW PASSWORD</h4>
                                <br/>
                                <label>Your email address</label>
                                <input readOnly={true}  placeholder="User Email" key={Date.now()}
                                     defaultValue={email}   className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <label>New Password</label>
                                <input  placeholder="New Password" ref={(input)=>passRef=input}
                                       className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <label>Confirm Password</label>
                                <input  placeholder="Confirm Password" ref={(input)=>confirmPassRef=input}
                                       className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={setPassword} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePassword;