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
}

export const {setToken,getToken,setUserDetails,removeSession,getUserDetails} = new sessionHelper();