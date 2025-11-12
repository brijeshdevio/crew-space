import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router-dom";

export function BaseLayout() {
  return (
    <>
      <Navbar />
      <main className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[1000px] flex flex-col gap-5 mx-auto px-3 py-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
