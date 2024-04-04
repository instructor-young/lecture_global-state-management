import Link from "next/link";
import HeaderProfile from "../HeaderProfile";
import LogInButton from "../LogInButton";

function Header() {
  return (
    <header className="border-b">
      <div className="container h-14 mx-auto px-5 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          전역상태관리 복습
        </Link>

        <div className="flex items-center gap-x-3">
          <HeaderProfile />
          <LogInButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
