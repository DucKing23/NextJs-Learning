"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/red1.module.css";
import Table from "@/components/app.body";
import { useEffect } from "react";
import useSWR from "swr";

// Sử dụng thẻ Link để điều hướng trang giúp trang không bị load, làm tăng trải nghiệm người dùng
export default function Home() {
  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href={"/facebook"}>
            <span className={y["red"]}>Facebook</span>
          </Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href={"/youtube"}>Youtube</Link>
        </li>
        <li style={{ margin: "20px 0" }}>
          <Link href={"/tiktok"}>Tiktok</Link>
        </li>
      </ul>
    </div>
  );
}
