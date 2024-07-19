import React from "react";
import Activeuser from "../activeuser/activeuser";
import "./orders.scss";
import bagiconcolored from "../../Assets/bagiconcolored.svg";
import Statuscontainer from "../../statuscontainer/statuscontainer";
import buyicon from "../../Assets/buyicon.svg";
import Datatable from "./datatable";

const Orders = () => {
  const orderStatusOne = {
    image: bagiconcolored,
    name_price: [
      { text: "All Orders", num: "450", percentage: "" },
      { text: "Pending", num: "5", percentage: "" },
      { text: "Completed", num: "320", percentage: "" },
    ],
  };

  const orderStatusTwo = {
    image: bagiconcolored,
    name_price: [
      { text: "Canceled", num: "30", percentage: "-20%", loss: "loss" },
      { text: "Returned", num: "20", percentage: "" },
      { text: "Damaged", num: "5", percentage: "" },
    ],
  };

  const saleStat = {
    image: buyicon,
    name_price: [
      {
        text: "Abandoned Cart",
        num: "20%",
        percentage: "+0.00%",
        color: "red",
      },
      { text: "Customers", num: "30", percentage: "" },
    ],
  };
  return (
    <div className="Orderspage">
      <div className="head">
        <p className="headname">Orders</p>
        <Activeuser />
      </div>
      <div className="dashboardcontainer">
        <div className="subhead-wrapper">
          <h4 className="subhead">Orders Summary</h4>
          <button className="create">+ Create a New Order</button>
        </div>
        <div className="stscontainer">
          <Statuscontainer message={orderStatusOne} />
          <Statuscontainer message={orderStatusTwo} />
          <Statuscontainer message={saleStat} />
        </div>
        <div className="datatable">
        <Datatable />
        </div>
      </div>
    </div>
  );
};

export default Orders;
