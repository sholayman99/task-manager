import React, {useRef} from 'react';
import {useSelector} from "react-redux";

const Profile = () => {
    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef,userImgRef,userImgView=useRef();
    const profileData = useSelector((state)=>state.profile.value);


    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <img ref={(input) => userImgView = input} className="icon-nav-img-lg"
                                     src={profileData['photo']} alt=""/>
                                <hr/>
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <label>Profile Picture</label>
                                        <input  ref={(input) => userImgRef = input}
                                               placeholder="User Email" className="form-control animated fadeInUp"
                                               type="file"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Email Address</label>
                                        <input key={Date.now()} defaultValue={profileData['email']} readOnly={true}
                                               ref={(input) => emailRef = input} placeholder="User Email"
                                               className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>First Name</label>
                                        <input key={Date.now()} defaultValue={profileData['firstName']}
                                               ref={(input) => firstNameRef = input} placeholder="First Name"
                                               className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Last Name</label>
                                        <input key={Date.now()} defaultValue={profileData['lastName']}
                                               ref={(input) => lastNameRef = input} placeholder="Last Name"
                                               className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Mobile</label>
                                        <input key={Date.now()} defaultValue={profileData['mobile']}
                                               ref={(input) => mobileRef = input} placeholder="Mobile"
                                               className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Password</label>
                                        <input key={Date.now()} defaultValue={profileData['password']}
                                               ref={(input) => passwordRef = input} placeholder="User Password"
                                               className="form-control animated fadeInUp" type="password"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <button
                                                className="btn w-100 float-end btn-primary animated fadeInUp">Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;