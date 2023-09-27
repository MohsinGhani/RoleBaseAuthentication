"use client";
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { Button, Input, Modal } from "antd";
import { auth } from "../../../firebase";

import { useRouter } from "next/navigation";
import { CloseOutlined } from "@ant-design/icons";
const Page1 = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendLink = () => {
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Email successfully sent!!");
        setTimeout(() => {
          router.push("/");
        }, 3000);

        Modal.success({
          title: "Email sent successful!",
          content: "Please check your email and reset your password",
          okText: "Close",
          closeIcon: <CloseOutlined />,
          onOk: () => {},

          className: "custom-success-modal",
        });
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="mx-auto max-w-[460px] mt-[50px] pl-[10px] pr-[10px]  items-center flex flex-col leading-[30px]">
      <h1 className="font-[600] text-[30px] font-poppins text-[#000] ">
        Enter Your Email
      </h1>
      <p className="font-[500] text-[16px] max-w-[330px] mb-[20px] mt-[20px] text-center font-poppins text-[#8591A3] ">
        Enter your email and we&apos;ll send you a link to reset your password
      </p>
      <Input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        onChange={(e) => setEmail(e.target.value)}
        required
        className="font-[500] text-[14px]  rounded-[10px] font-poppins text-[#8591A3] h-[60px] max-w-[460px] mb-[20px] "
        placeholder="Email"
      />
      <Button
        loading={loading}
        onClick={handleSendLink}
        className="rounded-[10px] bg-[#165188]  max-w-[460px] w-full h-[50px]  login text-white text-[18px] font-[500]  font-poppins"
      >
        Send link
      </Button>
    </div>
  );
};

export default Page1;
