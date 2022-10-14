import React from "react";
import { projectData } from "../../constatnts";

const NotiList = () => {
    console.log(projectData.dasbhoardPage.notifications)
  return (
    <div className="noti-list">
        <p className="noti-head">Notification List</p>
      {projectData.dasbhoardPage.notifications.map((i) => {
        return (
          <div className="cards">
            <div>
              <img src={i.pic} />
            </div>
            <div>
                <p>{i.message}</p>
              <p>{i.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NotiList;