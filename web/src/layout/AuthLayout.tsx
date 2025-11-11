import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <>
      <main className="w-full h-screen flex items-center justify-center">
        <Outlet />
      </main>
    </>
  );
}
