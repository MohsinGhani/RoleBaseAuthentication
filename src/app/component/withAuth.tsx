"use client";

import { redirect, usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { auth } from "../../../firebase";
import { useAuthContext } from "../layout";

export default function withAuth(Component: any) {
  return function Auth(props: any) {
    const { user }: { user: any } = useAuthContext();
    console.log(user?.role, "auth");
    const router = useRouter();
    const pathname: any = usePathname();
    console.log("current pathname", pathname);
    console.log("🚀 ~ router:", router);
    const redirections = {
      user: ["/Serverside", "/user1", "/user2"],
      Ambassador: ["/clientside", "/ambassador1", "/ambassador2"],
    };
    // router.replace(redirections.user[0]);

    useEffect(() => {
      if (auth.currentUser?.emailVerified === false) {
        router.push("/sign-in");
      } else if (
        auth.currentUser?.emailVerified === true &&
        user?.role === "user" &&
        redirections.user &&
        redirections.user.includes(pathname) &&
        redirections.Ambassador.includes(pathname)
      ) {
        router.push("/Serverside");
      } else if (
        auth.currentUser?.emailVerified === true &&
        user?.role === "user" &&
        (!redirections.user || !redirections.user.includes(pathname)) &&
        redirections.Ambassador.includes(pathname)
      ) {
        router.push("/Serverside");
      } else if (
        auth.currentUser?.emailVerified === true &&
        user?.role === "Ambassador" &&
        redirections.Ambassador &&
        redirections.Ambassador.includes(pathname) &&
        redirections.user.includes(pathname)
      ) {
        router.push("/clientside");
      } else if (
        auth.currentUser?.emailVerified === true &&
        user?.role === "Ambassador" &&
        (!redirections.Ambassador ||
          !redirections.Ambassador.includes(pathname)) &&
        redirections.user.includes(pathname)
      ) {
        router.push("/clientside");
      }
    }, [auth.currentUser]);

    return <Component {...props} />;
  };
}
