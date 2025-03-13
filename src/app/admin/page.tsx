"use client";
import { useRouter } from "next/navigation";
import React from "react";

// sử dụng link để điều hướng trang
// sử dụng event sử dụng useRouter
const Duc = () => {
  const handlebtn = () => {
    router.push("/");
  };

  const router = useRouter();

  return (
    <>
      <div>Facebook day</div>
      <button onClick={() => handlebtn()}>abc</button>
    </>
  );
};

export default Duc;
