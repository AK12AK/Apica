import React from "react";
import "./activeuser.scss";
import notificationicon from "../../Assets/Notification.svg";
import profileicon from "../../Assets/profile 1.svg"

const activeuser = () => {
  return (
    <div className="activeusercontainer">
      <div className="selectfield">
        <select>
          <option value="Nanny’s Shop">Nanny’s Shop</option>
          <option value="Alabama">Apica</option>
        </select>
      </div>
      <img src={notificationicon} />
      <img src={profileicon} />
    </div>
  );
};

export default activeuser;
