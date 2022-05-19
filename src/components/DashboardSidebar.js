import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = ({ children }) => {
  return (
    <div className="drawer drawer-mobile mt-16 bg-accent">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-5">
        {/* <!-- Page content here --> */}
        {children} 
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/add-admin">Add admin</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user">User</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-service">Add Service</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
