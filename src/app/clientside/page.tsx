"use client";
import React, { useEffect } from "react";

import withAuth from "../component/withAuth";

import { useRouter } from "next/navigation";
import { Button } from "antd";

const ClientSide = () => {
  const router = useRouter();

  return (
    <div>
      <Button
        onClick={() => {
          router.push("/ambassador1");
        }}
        className="mt-[10px] ml-[10px]"
        type="primary"
      >
        route to Ambassador1
      </Button>
      <h1>This is a Ambassador 1 component</h1>
    </div>
  );
};

export default withAuth(ClientSide);
