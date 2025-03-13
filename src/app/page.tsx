import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/red1.module.css";

// Sử dụng thẻ Link để điều hướng trang giúp trang không bị load, làm tăng trải nghiệm người dùng
export default function Home() {
  return (
    <>
      <ul>
        <li className={x["red"]}>
          <Link href="./admin">Facebook</Link>
        </li>
        <li className={y["red"]}>
          <Link href="./youtube">Youtube</Link>
        </li>
      </ul>
    </>
  );
}
