import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router-dom";

export function BaseLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
