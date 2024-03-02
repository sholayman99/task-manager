import axios from "axios";
import {errorMsg, successMsg} from "../helpers/FormHelper.js";

export async function regiRequest(email,firstName,lastName,mobile,password,photo){
    let postBody ={email:email, password:password, mobile:mobile, firstName:password,
        lastName:lastName,
        photo:photo}
    try {
       let res = await axios.post('/registration' ,postBody);
         if(res.data['status'] === 'success'){
            return true;
         }
       }
    catch (e) {
       if(e.response.data['data']['keyPattern']['email']===1){
            errorMsg("Email already exists!")
           return false;
        }
       else{
           errorMsg("Something went wrong!");
           return false;
       }
    }
}