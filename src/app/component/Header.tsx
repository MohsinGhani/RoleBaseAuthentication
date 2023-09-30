"use client";
import { UserOutlined, MoreOutlined } from "@ant-design/icons";
import Link from "next/link";
import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase";
import { Button } from "antd";
import { useAuthContext } from "../layout";
import { sessionStatus } from "../utils/session";
const session = sessionStatus;
const Header = () => {
  const { user, setUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const Signout = () => {
    signOut(auth)
      .then((res) => {
        setUser(null);

        setLoading(true);

        console.log(res, "USER LOGOUT");
      })
      .catch((error) => {
        console.log(error, "USER LOGOUT");
      });
  };
  const router = useRouter();
  return (
    <div className="bg-[#165188] flex-row flex justify-between p-[20px] ">
      <div>
        <h1
          onClick={() => {
            router.push("/");
          }}
          className="text-white font-[700] cursor-pointer  text-[26px]"
        >
          Beat the Bank
        </h1>
      </div>
      <div className="gap-[25px] mt-[8px] flex ">
        <Link href="/">
          {auth.currentUser?.emailVerified === true ? "Contact us" : ""}
        </Link>
        <Button
          onClick={() => {
            Signout();
            router.push("/");
          }}
          className="text-white"
        >
          {auth.currentUser?.emailVerified === true ? "Log out" : "Login"}
        </Button>{" "}
      </div>
    </div>
  );
};

export default Header;
