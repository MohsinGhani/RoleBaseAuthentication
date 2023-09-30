"use client";
import { Button, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      router.push("/sign-in");
    }, 2000);
  }, []);

  return (
    <div className="mx-auto max-w-[460px] mt-[50px]  items-center flex flex-col ">
      <Spin indicator={antIcon} />
    </div>
  );
};
export default Page;
