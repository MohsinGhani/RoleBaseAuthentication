"use client";

import { redirect, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { useAuthContext } from "../layout";

export default function withAuth(Component: any) {
  return function Auth(props: any) {
    const { user }: { user: any } = useAuthContext();
    console.log(user?.role, "auth");
    const router = useRouter();
    const pathname: any = usePathname();
    console.log("current pathname", pathname);
    const [pathnames, setPathname] = useState(window.location.pathname);
    console.log("🚀 ~ router:", router);
    const redirections = {
      user: ["/Serverside", "/user1", "/user2"],
      Ambassador: ["/clientside", "/ambassador1", "/ambassador2"],
    };
    // router.replace(redirections.user[0]);
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    useEffect(() => {
      if (!auth.currentUser?.emailVerified === true) {
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
      } else {
        handleLocationChange();
      }
    }, [auth.currentUser]);

    return <Component {...props} />;
  };
}
