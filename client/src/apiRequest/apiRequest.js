import axios from "axios";
import {errorMsg, successMsg} from "../helpers/FormHelper.js";
import store from "../redux/store/store.js";
import {hideLoader, showLoader} from "../redux/state-slices/settings-slice.js";


export async function loginRequest(email,pass){
    store.dispatch(showLoader());
    let postBody ={email:email,password:pass};

    try {
       let res = await axios.post('/login',postBody);
       if(res.data['status'] === 'success'){
           store.dispatch(hideLoader());

       }
    }
    catch (e) {

    }

}
export async function regiRequest(email,firstName,lastName,mobile,password,photo){
    store.dispatch(showLoader());
    let postBody ={email:email, password:password, mobile:mobile, firstName:password, lastName:lastName, photo:photo};

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