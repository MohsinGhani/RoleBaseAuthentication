"use client";

import React from "react";
import { sessionStatus } from "../utils/session";
import { redirect } from "next/navigation";
import { auth } from "../../../firebase";
import { useAuthContext } from "../layout";
import withAuth from "../component/withAuth";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => {
          router.push("/user1");
        }}
        className="mt-[10px] ml-[10px]"
        type="primary"
      >
        route to user 1
      </Button>
      <h1>This is a server component</h1>
    </div>
  );
};

export default withAuth(page);
