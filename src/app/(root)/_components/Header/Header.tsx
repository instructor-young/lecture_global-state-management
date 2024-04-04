import Link from "next/link";

function Header() {
  return (
    <header className="border-b">
      <div className="container h-14 mx-auto px-5 flex items-center">
        <Link href="/" className="text-xl font-bold">
          전역상태관리 복습
        </Link>
      </div>
    </header>
  );
}

export default Header;
