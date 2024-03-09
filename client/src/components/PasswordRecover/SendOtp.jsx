import React, {useRef} from 'react';
import {errorMsg, isEmail} from "../../helpers/FormHelper.js";
import {useNavigate} from "react-router-dom";
import {verifyEmailRequest} from "../../apiRequest/apiRequest.js";

const SendOtp = () => {

    let emailRef = useRef();
    const navigate = useNavigate();

    const verifyEmail = async () => {
        let email = emailRef.value;
        if(!isEmail(email)){
            errorMsg("Valid email required!")
        }
        else {
            let res = await verifyEmailRequest(email);
            if(res === true){
                navigate('/verify-otp');
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
                                <h4>EMAIL ADDRESS</h4>
                                <br/>
                                <label>Your email address</label>
                                <input ref={(input)=>emailRef = input}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <button onClick={verifyEmail} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SendOtp;