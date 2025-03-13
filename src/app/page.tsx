import Link from "next/link";

// Sử dụng thẻ Link để điều hướng trang giúp trang không bị load, làm tăng trải nghiệm người dùng
export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="./admin">Facebook</Link>
        </li>
        <li>
          <Link href="./youtube">Youtube</Link>
        </li>
      </ul>
    </>
  );
}
