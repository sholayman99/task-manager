import {toast} from "react-hot-toast";
let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class formHelper {

    isEmpty(value){
        return value.length === 0 ;
    }

    isEmail(value){
       return  EmailRegx.test(value);
    }

    isMobile(value){
        return MobileRegx.test(value);
    }

    errorMsg(msg){
        toast.error(msg);
    }

    successMsg(msg){
        toast.success(msg);
    }

    getBase64(file){
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
}

export const {isEmail,isEmpty,isMobile,errorMsg,successMsg,getBase64} = new formHelper();