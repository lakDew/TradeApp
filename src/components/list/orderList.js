import React from "react";
import { projectData } from "../../constatnts";

const OrderList=()=>{

    return(
        <div className="o-list-wrapper">
          <p>Orders List</p>
           <div className="o-list-heading">
            <div>ORDER NO.</div>
            <div>STATUS</div>
            <div>OPERATORS</div>
            <div>LOCATION</div>
            <div>DISTANCE</div>
            <div>START DATE</div>
            <div>EST DELIVERY DUE</div>
           </div>
        
           {
            projectData.dasbhoardPage.orders.map((i)=>{
                return(
                    <div className="o-list">
            <div>{i.orderNo}</div>
            <div><span className={i.status}></span><span>{i.status}</span></div>
            <div>{i.operators}</div>
            <div>{i.location}</div>
            <div>{i.distance}</div>
            <div>{i.startDate}</div>
            <div>{i.deliveryDate}</div>
           </div>
                )
            })
           }
           
        </div>
    )
}
export default OrderList