class sessionHelper{

    setToken(token){
      localStorage.setItem("token",token);
    }

    getToken(){
        return localStorage.getItem("token");
    }

    setUserDetails(det){
        localStorage.setItem(JSON.stringify("userDetails"),det);
    }

    getUserDetails(){
        return JSON.parse(localStorage.getItem("userDetails"));
    }

}

export const {setToken,getToken,setUserDetails,getUserDetails} = new sessionHelper();