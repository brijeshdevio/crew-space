export function Footer() {
  return (
    <footer className="w-full bg-base-200 border-t border-white/10">
      <div className="w-full flex items-center justify-center py-3">
        <span className="opacity-80">
          © {new Date().getFullYear()} Crew Space. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
