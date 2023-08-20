import Link from "next/link";
import AuthModal from "./AuthModal";

export default function NavBar() {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        <div className="flex flex-wrap">
          <img src="assets/icon.png" alt="" className="h-10 mr-4 " />
          The Urban Spoon
        </div>
      </Link>
      <div>
        <div className="flex">
          <AuthModal isSignIn={true} />
          <AuthModal isSignIn={false} />
        </div>
      </div>
    </nav>
  );
}
