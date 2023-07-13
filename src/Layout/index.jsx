import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function index({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
