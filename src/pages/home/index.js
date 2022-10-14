
import React, { useState } from "react";
import { HorizontalChart } from "../../components/charts/horizontalChart";
import LineChart  from "../../components/charts/lineChart";
import PiChart from "../../components/charts/piChar";
import Header from "../../components/header";
import NotiList from "../../components/list/notiList";
import OrderList from "../../components/list/orderList";



const Dashboard=()=>{
    
    
    return(
        <div className="dashboard">
             <Header page="dashboard"/>
            <div className="header-wrapper">
           
            <p className="welcome">Welcome Back, Admin</p>
            <div className="upper">
            <LineChart />
            <HorizontalChart />
            </div>
            <div className="middle">
            <PiChart />
            <NotiList />
            </div>
            <OrderList />
            </div>
            
          
        </div>
    )
}

export default Dashboard;