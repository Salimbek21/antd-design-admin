import React from "react";
import AuthLayout from "@/component/layout/authlayout";
import AuthComponent from "../component/auth";

export default function Auth() {
  return (
    <>
      <AuthLayout>
        <AuthComponent />
      </AuthLayout>
    </>
  );
}
