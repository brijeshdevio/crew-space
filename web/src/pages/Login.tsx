import { Link } from "react-router-dom";

export function Login() {
  return (
    <section className="w-[350px] flex flex-col gap-4 px-5 py-10 rounded-2xl bg-base-100 shadow-md">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Crew Space</h1>
        <p className="opacity-60 mt-2 text-sm">Log in to your account</p>
      </div>
      <form className="flex flex-col gap-2">
        <div>
          <label className="label mb-1 text-sm">Email</label>
          <input
            type="email"
            placeholder="john.doe@ex.com"
            className="input rounded-full"
          />
        </div>
        <div>
          <label className="label mb-1 text-sm">Password</label>
          <input
            type="password"
            placeholder="*********"
            className="input rounded-full"
          />
        </div>
        <div className="mt-3">
          <button className="w-full btn btn-primary rounded-full">
            Log in
          </button>
        </div>
      </form>
      <div className="text-center text-sm">
        <p>
          <span className="opacity-60">Don't have an account?</span>{" "}
          <Link to="/register" className="link text-primary">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
