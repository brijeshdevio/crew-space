import { Link } from "react-router-dom";
import { Atom, Plus } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full p-3 bg-base-300 border-b border-primary/10">
      <div className="w-full sm:w-[90%] max-w-[1200px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1">
          <Atom size={30} className="text-primary" />
          <span className="text-lg">SkillDairy</span>
        </Link>

        <div>
          <button className="btn btn-primary btn-sm">
            <Plus size={20} />
            <span>New Log</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
