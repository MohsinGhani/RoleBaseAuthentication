"use client";
import React from "react";
import withAuth from "../component/withAuth";

const Ambassador1 = () => {
  return <div>This page is route ambassador 2 </div>;
};

export default withAuth(Ambassador1);
