"use client";

import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { auth } from "../../../firebase";
import { useAuthContext } from "../layout";

export default function withAuth(Component: any) {
  return function Auth(props: any) {
    const { user }: { user: any } = useAuthContext();

    const router = useRouter();
    console.log("🚀 ~ router:", router);

    useEffect(() => {
      if (!auth.currentUser) {
      } else if (
        auth.currentUser?.emailVerified === true &&
        user.role == "user"
      ) {
        router.push("/Serverside");
      } else if (
        auth.currentUser?.emailVerified === true &&
        user.role == "user"
      ) {
        router.push("/user1");
      } else if (
        auth.currentUser?.emailVerified === true &&
        user.role == "user"
      ) {
        router.push("/user2");
      } else if (
        auth.currentUser?.emailVerified === true &&
        user.role == "Ambassador"
      ) {
        router.push("/clientside");
      } else if (
        auth.currentUser?.emailVerified === true &&
        user.role == "Ambassador"
      ) {
        router.push("/ambassador1");
      } else if (
        auth.currentUser?.emailVerified === true &&
        user.role == "Ambassador"
      ) {
        router.push("/ambassador2");
      } else {
        router.push("/sign-in");
      }
    }, [auth.currentUser]);

    return <Component {...props} />;
  };
}
