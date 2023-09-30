"use client";
import React, { useEffect } from "react";

import withAuth from "../component/withAuth";
import { auth } from "../../../firebase";
import { useAuthContext } from "../layout";
import { redirect } from "next/navigation";
interface User {
  role: string;
}
const ClientSide = () => {
  const { user }: { user: any } = useAuthContext();

  return <div>This page is protected routbe on client side</div>;
};

export default withAuth(ClientSide);
