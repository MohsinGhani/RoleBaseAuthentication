"use client";

import React from "react";
import { sessionStatus } from "../utils/session";
import { redirect } from "next/navigation";
import { auth } from "../../../firebase";
import { useAuthContext } from "../layout";
import withAuth from "../component/withAuth";

const page = () => {
  return <div>This is a user 2 component</div>;
};

export default withAuth(page);
