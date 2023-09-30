"use client";
import React from "react";
import withAuth from "../component/withAuth";

const Ambassador1 = () => {
  return <div>This page is protected route on client side HOC</div>;
};

export default withAuth(Ambassador1);
