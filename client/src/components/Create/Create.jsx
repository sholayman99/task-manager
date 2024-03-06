import React, {useRef} from 'react';
import {Container, Row} from "react-bootstrap";
import {errorMsg, isEmpty} from "../../helpers/FormHelper.js";
import {createTaskRequest} from "../../apiRequest/apiRequest.js";
import {useNavigate} from "react-router-dom";

const Create =  () => {

    let titleRef,desRef = useRef();
    const navigate = useNavigate();
    const submitCreate =async () => {
      let title = titleRef.value;
      let des = desRef.value;

      if(isEmpty(title)){
          errorMsg("Title required!")
      }
      else if(isEmpty(des)){
          errorMsg("Description required!")
      }
      else{
          let res = await createTaskRequest(title,des);
          if(res === true){
           navigate('/new');
          }
      }

    }

    return (
        <Container fluid={true} className="content-body">
            <Row className="d-flex justify-content-center">
                <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 >Create New</h4>
                            <br/>
                            <input ref={(input)=>titleRef=input}  placeholder="Task Name" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <textarea ref={(input)=>desRef=input}  rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <button onClick={submitCreate} className="btn float-end btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Create;