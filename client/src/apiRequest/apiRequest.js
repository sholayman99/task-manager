import axios from "axios";
import {errorMsg, successMsg} from "../helpers/FormHelper.js";
import store from "../redux/store/store.js";
import {hideLoader, showLoader} from "../redux/state-slices/settings-slice.js";
import {getToken, setToken, setUserDetails} from "../helpers/SessionHelper.js";

let axiosHeader = {headers:{'token':getToken()}};

export async function createTaskRequest(title,des){
    let postBody={title:title,description:des,status:"New"};
    try {
     store.dispatch(showLoader());
     let res = await axios.post('/createTask',postBody,axiosHeader);
     if(res.data['status'] === 'success'){
         store.dispatch(hideLoader());
         successMsg("New task created")
         return true;
     }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!")
        return false;
    }
}

export async function loginRequest(email,pass){

    let postBody ={email:email,password:pass};

    try {
       store.dispatch(showLoader());
       let res = await axios.post('/login',postBody);
       if(res.data['status'] === 'success'){
           store.dispatch(hideLoader());
           setToken(res.data['token']);
           setUserDetails(res.data['data']);
           successMsg("Login successfully");
           return true;
       }
       else{
         store.dispatch(hideLoader());
         errorMsg("Invalid email & password!");
         return false;
       }
    }
    catch (e) {
          store.dispatch(hideLoader());
          errorMsg("Something went wrong!");
          return false;
    }

}
export async function regiRequest(email,firstName,lastName,mobile,password,photo){
    store.dispatch(showLoader());
    let postBody ={email:email, password:password, mobile:mobile, firstName:firstName, lastName:lastName, photo:photo};

    try {

       let res = await axios.post('/registration' ,postBody);
         if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            return true;
         }
       }
    catch (e) {
       store.dispatch(hideLoader());
       if(e.response.data['data']['keyPattern']['email']===1){
            errorMsg("Email already exists!");
            return false;
        }
       else{
           errorMsg("Something went wrong!");
           return false;
       }
    }
}