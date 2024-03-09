class sessionHelper{

    setToken(token){
      localStorage.setItem("token",token);
    }

    getToken(){
        return localStorage.getItem("token");
    }

    setUserDetails(details){
        localStorage.setItem("userDetails",JSON.stringify(details));
    }

    getUserDetails(){
        return JSON.parse(localStorage.getItem("userDetails"));
    }

    removeSession(){
        localStorage.clear();
        window.location.href = "/login"
    }

    setEmail(email){
        sessionStorage.setItem("email",email);
    }

    getEmail(){
        return sessionStorage.getItem("email");
    }

    setOtp(otp){
        sessionStorage.setItem("otp",otp);
    }

    getOtp(){
        return sessionStorage.getItem("otp");
    }
}

export const {setToken,getToken,setUserDetails,removeSession,getUserDetails,
    setEmail,getEmail,setOtp,getOtp} = new sessionHelper();