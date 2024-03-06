import axios from "axios";
import {errorMsg, successMsg} from "../helpers/FormHelper.js";
import store from "../redux/store/store.js";
import {hideLoader, showLoader} from "../redux/state-slices/settings-slice.js";
import {getToken, setToken, setUserDetails} from "../helpers/SessionHelper.js";
import {setCanceled, setCompleted, setNew, setProgress} from "../redux/state-slices/task-slice.js";

let axiosHeader = {headers:{'token':getToken()}};

export async function createTaskRequest(title,des){
    store.dispatch(showLoader());
    let postBody={title:title,description:des,status:"New"};

    try {
     let res = await axios.post('/createTask',postBody,axiosHeader);
        store.dispatch(hideLoader());
     if(res.data['status'] === 'success'){
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
    store.dispatch(showLoader());
    let postBody ={email:email,password:pass};

    try {
       let res = await axios.post('/login',postBody);
        store.dispatch(hideLoader());
       if(res.data['status'] === 'success'){
           setToken(res.data['token']);
           setUserDetails(res.data['data']);
           successMsg("Login successfully");
           return true;
       }
       else{
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
        store.dispatch(hideLoader());
         if(res.data['status'] === 'success'){
            successMsg("Created account successfully!")
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

export async function taskRequest(status){

    store.dispatch(showLoader());

    try {
        let res = await axios.get(`/listByTaskStatus/${status}`,axiosHeader);

        store.dispatch(hideLoader());
        if(res.data['status']==='success'){
            if(status==="New"){
                store.dispatch(setNew(res.data['data']));
            }
            else if(status==="Progress"){
                store.dispatch(setProgress(res.data['data']));
            }
            else if(status==="Completed"){
                store.dispatch(setCompleted(res.data['data']));
            }
            else{
                store.dispatch(setCanceled(res.data['data']));
            }
        }
    }
    catch (e) {
        store.dispatch(hideLoader());
        errorMsg("Something went wrong!");
    }
}