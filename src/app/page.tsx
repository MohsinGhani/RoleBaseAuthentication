"use client";

import React, { useEffect, useState } from "react";
import SignIn from "./sign-in/page";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import SuccessPage from "./success-page/page";
import { useAuthContext } from "./layout";
import AmbassadorPage1 from "./AmbassadorPage1/page";
import UserPage1 from "./userPage1/page";
const Page = () => {
  const { user }: { user: any } = useAuthContext();

  if (!user?.Auth) {
    if (user?.emailVerified === true && user.role === "Ambassador") {
      return <AmbassadorPage1 />;
    }

    if (user?.emailVerified === true && user.role === "Ambassador") {
      return <AmbassadorPage1 />;
    }
    if (user?.emailVerified === true && user.role === "user") {
      return <UserPage1 />;
    }
    return <SuccessPage />;
  } else {
    return <SignIn />;
  }
};

export default Page;
