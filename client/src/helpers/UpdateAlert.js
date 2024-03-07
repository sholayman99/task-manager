import Swal from "sweetalert2";
import {itemUpdateRequest} from "../apiRequest/apiRequest.js";

export function updateTask(id,status){
    return Swal.fire({
      title:"Update Status",
      input:"select",
      inputOptions:{New:"New" , Progress:"Progress",Completed:"Completed",Canceled:"Canceled"},
      inputValue:status
    }).then((result)=>{
        return itemUpdateRequest(id,result.value).then((res)=>{
            return res ;
        })
    })
}