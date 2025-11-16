import { Link } from "react-router-dom";
import { Atom, Plus } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full border-b border-white/5">
      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[1000px] flex items-center justify-between mx-auto px-3 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Atom size={24} className="text-primary" />
          <span className="text-xl font-bold">Crew Space</span>
        </Link>
        <div className="flex items-center gap-3">
          <button className="btn btn-sm btn-primary rounded-full">
            <Plus size={15} />
            <span>Create Group</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
