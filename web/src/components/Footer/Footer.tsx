export function Footer() {
  return (
    <footer className="w-full bg-base-300 border-t border-primary/10 p-3">
      <div className="w-full sm:w-[90%] max-w-[1200px] mx-auto text-center text-sm">
        <span>
          © {new Date().getFullYear()} SkillDaily — Made for productivity ✨
        </span>
      </div>
    </footer>
  );
}
