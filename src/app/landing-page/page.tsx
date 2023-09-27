"use client";
import { Button, Card, Col } from "antd";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { useAuthContext } from "../layout";

const Page = () => {
  const router = useRouter();
  const { user }: { user: any } = useAuthContext();
  console.log("🚀 ~ file: page.tsx ~ line 1 ~ Page ~ user", user?.role);
  return (
    <div className="mx-auto  relative  items-center flex flex-col ">
      <div className=" w-full justify-center flex flex-col max-sm:justify-center">
        <div className="mx-auto relative pl-[10px]  pr-[10px] items-center flex flex-row">
          <Button
            onClick={() => {
              router.push("/sign-in");
            }}
            className="rounded-[10px]  max-w-[300px] mt-[20px] w-full  h-[40px] login text-white text-[18px] bg-[#165188] font-[500] font-poppins"
          >
            Login
          </Button>
          <Button
            onClick={() => {
              router.push("/signup");
            }}
            className="rounded-[10px]  max-w-[300px] mt-[20px] w-full  h-[40px] login text-white text-[18px] bg-[#165188] font-[500] font-poppins"
          >
            SignUp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
