import React, { useState, useEffect } from "react";
import Activeuser from "../activeuser/activeuser";
import "./dashboard.scss";
import Statuscontainer from "../../statuscontainer/statuscontainer";
import graphicon from "../../Assets/icon.svg";
import personicon from "../../Assets/person.svg";
import bagiconcolored from "../../Assets/bagiconcolored.svg";
import recentOrders from "../../RecentOrders/recentOrders.json";
import fileicon from "../../Assets/fileicon.svg";
import buyicon from "../../Assets/buyicon.svg";
import Chart from "./chart";
import Barchart from "./barchart"

const Dashboard = () => {
  const sale = {
    image: graphicon,
    name_price: [
      { text: "sale", num: "₦4,000,000.00", percentage: "" },
      { text: "Volume", num: "450", percentage: "+20.00%" },
    ],
  };

  const customer = {
    image: personicon,
    name_price: [
      { text: "Customers", num: "1,250", percentage: "+15.80%" },
      { text: "Active", num: "1,180", percentage: "85%" },
    ],
  };

  const orderStatus = {
    image: bagiconcolored,
    name_price: [
      { text: "All Orders", num: "450", percentage: "" },
      { text: "Pending", num: "5", percentage: "" },
      { text: "Completed", num: "445", percentage: "" },
    ],
  };

  const productQuantity = {
    image: fileicon,
    name_price: [
      { text: "All Products", num: "45", percentage: "" },
      { text: "Active", num: "32", percentage: "+24%" },
    ],
    background: "blue",
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
    <div className="dashboardpage">
      <div className="head">
        <p className="headname">Dashboard</p>
        <Activeuser />
      </div>
      <div className="dashboardcontainer">
        <div className="subone sub">
          <Statuscontainer message={sale} />
          <Statuscontainer message={customer} />
          <Statuscontainer message={orderStatus} />
        </div>
        <div className="subtwo sub">
          <div className="stat">
            <div className="marketingchart-status">
              <div className="marketing">
                <div className="marketing-head">
                  <p className="heading">Marketting</p>
                  <select>
                    <option value="This Week">This Week</option>
                  </select>
                </div>
                <Chart />
              </div>
              <div>
                <Statuscontainer message={productQuantity} />
                <Statuscontainer message={saleStat} />
              </div>
            </div>
            <div className="summary">
              <div className="head-wrapper">
                <h4 className="heading">Summary</h4>
                <select className="salesselect">
                  <option value="sales">Sales</option>
                </select>
                <select className="daysselect">
                  <option value="sales">Last 7 Days</option>
                </select>
              </div>
              <Barchart />
            </div>
          </div>
          <div className="recentorders">
            <h4 className="heading">Recent Orders</h4>
            <div className="recentorder-lists">
              {recentOrders.map((item, index) => (
                <div className="orderlist-wrapper" key={index}>
                  <img src={item.image} alt="sd" />
                  <div className="img-details">
                    <div className="name-price">
                      <p className="model">{item.name_price.model}</p>
                      <p className="price">{item.name_price.price}</p>
                    </div>
                    <div className="date-status">
                      <p className="date">{item.date_status.date}</p>
                      <p
                        className={`status ${
                          item.date_status.orderStatus === "Pending"
                            ? "red"
                            : ""
                        }`}
                      >
                        {item.date_status.orderStatus}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
