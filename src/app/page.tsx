"use client";

import React, { useEffect, useState } from "react";
import SignIn from "./sign-in/page";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import SuccessPage from "./success-page/page";
import { useAuthContext } from "./layout";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <main className="mx-auto  relative  items-center flex flex-col">
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
    </main>
  );
  // const { user }: { user: any } = useAuthContext();

  // if (!user?.Auth) {
  //   if (user?.emailVerified === true && user.role === "Ambassador") {
  //     return <AmbassadorPage1 />;
  //   }

  //   if (user?.emailVerified === true && user.role === "Ambassador") {
  //     return <AmbassadorPage1 />;
  //   }
  //   if (user?.emailVerified === true && user.role === "user") {
  //     return <UserPage1 />;
  //   }
  //   return <SuccessPage />;
  // } else {
  //   return <SignIn />;
  // }
};

export default Page;
