import React from "react";
import AdminCard from "./AdminCard/AdminCard";

const Admin = () => {
  return (
    <div>
      <div className="container">
        <div className="text-white h-[100vh] flex justify-center items-center bg-cover">
          <AdminCard />
        </div>
      </div>
    </div>
  );
};

export default Admin;
