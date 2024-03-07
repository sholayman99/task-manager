import React, {useEffect} from 'react';
import {taskCountRequest} from "../../apiRequest/apiRequest.js";
import {useSelector} from "react-redux";

const Dashboard = () => {

    useEffect(() => {
        (async ()=>{
            await taskCountRequest();
        })()
    }, []);

    let taskList = useSelector((state)=>state.summary.value);

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        taskList.map((item,i)=>{
                            return (
                                <div key={i} className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="animated fadeInUp">{item['_id']}</h5>
                                            <h6 className="text-secondary animated fadeInUp">{item['sum']}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Dashboard;