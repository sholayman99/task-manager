import React, {useEffect} from 'react';
import {AiOutlineCalendar, AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import {Container} from "react-bootstrap";
import {taskRequest} from "../../apiRequest/apiRequest.js";
import {useSelector} from "react-redux";
import {deleteTodo} from "../../helpers/DeleteAlert.js";
import {updateTask} from "../../helpers/UpdateAlert.js";

const Completed = () => {

    useEffect(() => {
        (async ()=>{
            await taskRequest("Completed")
        })()
    }, []);

    const completedList = useSelector((state)=>state.task.completed);

    const deleteItem = async (id)=>{
        let res = await deleteTodo(id);
        if(res === true){
            await taskRequest("Completed");
        }
    }

    const updateTaskStatus = async (id,status) => {
        let res =await updateTask(id,status);
        if(res === true){
            await taskRequest("Completed")
        }
    }

    return (
        <Container fluid={true} className="content-body">
            <div className="row p-0 m-0">
                <div className="col-12 col-md-6 col-lg-8 px-3">
                    <h5>Task Completed</h5>
                </div>
                <div className="col-12 float-end col-md-6 col-lg-4 px-2">
                    <div className="row">
                        <div className="col-8">
                            <input className="form-control w-100"/>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary w-100">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-0 m-0">
                {
                    completedList.map((item,i)=>{
                        return (
                            <div key={i} className="col-12 col-lg-4 col-sm-6 col-md-4 p-2">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h6 className="animated fadeInUp">{item['title']}</h6>
                                        <p className="animated fadeInUp">{item['description']}</p>
                                        <p className="m-0 animated fadeInUp p-0">
                                            <AiOutlineCalendar/>{item['createdDate']}
                                            <a onClick={()=>updateTaskStatus(item['_id'],item['status'])} className="icon-nav text-primary mx-1"><AiOutlineEdit/></a>
                                            <a onClick={()=>deleteItem(item['_id'])} className="icon-nav text-danger mx-1"><AiOutlineDelete/></a>
                                            <a className="badge float-end bg-success">{item['status']}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Container>
    );
};

export default Completed;