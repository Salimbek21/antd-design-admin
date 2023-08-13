import React from "react";
import AuthLayout from "@/component/layout/authlayout";
import DashboardLayout from "@/component/layout/dashboardlayout/sidebar";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  
  const router = useRouter();
  return (
    <>
        <Component {...pageProps} />
    </>
  );
}
