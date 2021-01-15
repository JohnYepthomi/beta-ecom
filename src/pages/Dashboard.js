import "./dashboard.css";
import React, { useState } from "react";
import Appheader from "../component/Appheader.js";
import Sidebar from "../component/sidebar";
import circlesvg from "../resources/circle.svg";
import chartsvg from "../resources/chart.svg";
import productreturnsvg from "../resources/productreturn.svg";
import productsoldsvg from "../resources/productsold.svg";

function Dashboard() {
  return (
    <>
      <Appheader />
      <div className="main_window">
        <Sidebar />
        <div className="body_content">
          <div className="active_menu_container">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-house-door-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
              <path
                fill-rule="evenodd"
                d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
            </svg>
            <p className="active_menu_display"> Dashboard</p>
          </div>
          <div className="top_cards_container">
            <div className="card sales_card">
              <div className="innercard_container">
                <img className="circle-svg" src={circlesvg} />
                <p className="weekly_sales">Weekly sales</p>
                <img className="chart-svg" src={chartsvg} />
                <p className="weekly_dollar">$150.00</p>
                <p></p>
              </div>
            </div>
            <div className="card returns_card">
              <div className="innercard_container">
                <img className="circle-svg" src={circlesvg} />
                <p className="weekly_sales">Products Sold</p>
                <img className="chart-svg" src={productsoldsvg} />
                <p className="weekly_dollar">$150.00</p>
                <p></p>
              </div>
            </div>
            <div className="card revenue_card">
              <div className="innercard_container">
                <img className="circle-svg" src={circlesvg} />
                <p className="weekly_sales">Products Returned</p>
                <img className="chart-svg" src={productreturnsvg} />
                <p className="weekly_dollar">$150.00</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
