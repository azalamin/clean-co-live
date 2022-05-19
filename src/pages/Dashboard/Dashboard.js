import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/DashboardSidebar";

const Dashboard = () => {
  return (
    <DashboardSidebar>
        <h1 className="text-3xl text-center text-purple-500 ">Welcome to Dashboard</h1>
      <Outlet />
    </DashboardSidebar>
  );
};

export default Dashboard;
