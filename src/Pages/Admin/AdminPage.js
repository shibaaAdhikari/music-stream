import React from "react";
import AdminSidebar from "./AdminSIdebar";
import { Outlet } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";



const AdminPage = () => {
  return (
    <>
    <AdminNavBar/>
      <div className="d-flex ">
        <div className="sidebar-section bg-white">
          <AdminSidebar/>
        </div>
        <div
          className="content-section "
          style={{
            width: "100%",
            marginLeft: "13%",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
