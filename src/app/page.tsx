"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/red1.module.css";
import Table from "@/components/app.body";
import { useEffect } from "react";
import useSWR from "swr";

// Sử dụng thẻ Link để điều hướng trang giúp trang không bị load, làm tăng trải nghiệm người dùng
export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log("check res::: ", data);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log("check res::: ", data);
  //   };
  //   fetchData();
  // });
  if (!data) {
    return <div>loading....</div>;
  }

  return (
    <>
      <ul>
        <li className={x["red"]}>
          <Link href="./admin">Facebook</Link>
        </li>
        <li className={y["red"]}>
          <Link href="./youtube">Youtube</Link>
        </li>
        <Table blogs={data} />
      </ul>
    </>
  );
}
