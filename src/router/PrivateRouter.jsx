import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const [first, setfirst] = useState();
  useEffect(() => {
    const isActive = localStorage.getItem("isActive");
    setfirst(isActive);
  }, []);

  return <div>{first ? <Outlet /> : <Navigate to="/login" />}</div>;
  // const { token } = useSelector((state) => state.auth);
  // return <div>{token ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
