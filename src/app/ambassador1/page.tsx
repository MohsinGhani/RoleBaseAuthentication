"use client";
import React from "react";
import withAuth from "../component/withAuth";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const Ambassador1 = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => {
          router.push("/ambassador2");
        }}
        className="mt-[10px] ml-[10px]"
        type="primary"
      >
        route to Ambassador 2
      </Button>
      <h1>This is a Ambassador 2 component</h1>
    </div>
  );
};

export default withAuth(Ambassador1);
