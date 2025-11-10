import { Outlet } from "react-router-dom";

export function BaseLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
