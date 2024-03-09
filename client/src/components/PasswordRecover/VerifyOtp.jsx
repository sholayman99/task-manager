import React, {useRef, useState} from 'react';
import ReactCodeInput from "react-code-input";
import {useNavigate} from "react-router-dom";
import {errorMsg, isEmail, isEmpty} from "../../helpers/FormHelper.js";
import {verifyEmailRequest, verifyOtpRequest} from "../../apiRequest/apiRequest.js";

const VerifyOtp = () => {

    let  defaultInputStyle= {
        fontFamily: "monospace",
        MozAppearance: "textfield",
        margin: "4px",
        paddingLeft: "8px",
        width: "45px",
        borderRadius: '3px',
        height: "45px",
        fontSize: "32px",
        border: '1px solid lightskyblue',
        boxSizing: "border-box",
        color: "black",
        backgroundColor: "white",
        borderColor: "lightgrey"
    }

    const [otp,setOtp] = useState("");
    const navigate = useNavigate();

    const verifyOtp = async () => {
        console.log(otp)

        if(otp.length !== 6){
            errorMsg("6 digit number required!")
        }
        else {
            let res = await verifyOtpRequest(otp);
            if(res === true){
                navigate('/create-password');
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
                                <h4>OTP VERIFICATION </h4>
                                <p>A 6 Digit verification code has been sent to your email address. </p>
                                <ReactCodeInput onChange={(value)=>setOtp(value)} inputStyle={defaultInputStyle}  fields={6} inputMode={"numeric"} name={"otp"} />
                                <br/> <br/>
                                <button onClick={verifyOtp} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyOtp;