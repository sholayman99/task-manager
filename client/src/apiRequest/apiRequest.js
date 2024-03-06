import axios from "axios";
import {errorMsg, successMsg} from "../helpers/FormHelper.js";
import store from "../redux/store/store.js";
import {hideLoader, showLoader} from "../redux/state-slices/settings-slice.js";

export async function regiRequest(email,firstName,lastName,mobile,password,photo){

    let postBody ={email:email, password:password, mobile:mobile, firstName:password, lastName:lastName, photo:photo};

    try {
        store.dispatch(showLoader());
       let res = await axios.post('/registration' ,postBody);
         if(res.data['status'] === 'success'){
            store.dispatch(hideLoader());
            return true;
         }
       }
    catch (e) {
       if(e.response.data['data']['keyPattern']['email']===1){
            errorMsg("Email already exists!");
            store.dispatch(hideLoader());
            return false;
        }
       else{
           errorMsg("Something went wrong!");
           store.dispatch(hideLoader());
           return false;
       }
    }
}