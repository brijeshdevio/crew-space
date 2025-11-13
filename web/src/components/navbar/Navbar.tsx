import { Link } from "react-router-dom";
import { Atom } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full bg-base-200 border-b border-white/10">
      <div className="w-full flex items-center justify-between px-3 py-3 sm:px-10">
        <Link to="/" className="flex items-center gap-1">
          <Atom size={24} className="text-primary" />
          <span className="text-xl font-bold">Crew Space</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link to={"/"} className="btn btn-ghost btn-sm rounded-full">
            Home
          </Link>
          <Link to={"/dashboard"} className="btn btn-ghost btn-sm rounded-full">
            Dashboard
          </Link>
          <Link to={"/login"} className="btn btn-primary btn-sm rounded-full">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
