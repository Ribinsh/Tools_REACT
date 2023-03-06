import React from "react";
import Dashboard from "../../Components/admin/home/DashBoard";
import AdminNav from "../../Components/admin/home/AdminNav";
import Reports from "../../Components/admin/home/Reports";
import Graph from "../../Components/admin/home/Graph";
import Chart from "../../Components/admin/home/Chart";
import SalesReport from "../../Components/admin/home/SalesReport";
import DownloadButton from "../../Components/admin/home/DownloadButton";

function AdminDashboard() {
  return (
    <div className="flex">
      <Dashboard button="dashboard" />
      <div className=" w-full">
        <AdminNav />
        <Reports />
        <div className="flex  ">
          <Graph />
          <Chart />
        </div>
        <SalesReport />
        <DownloadButton />
      </div>
    </div>
  );
}

export default AdminDashboard;
