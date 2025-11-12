import { Link } from "react-router-dom";

export function Login() {
  return (
    <section className="w-[340px] flex flex-col gap-4 p-5 rounded-2xl bg-base-200 shadow border border-white/10">
      <div>
        <h1 className="text-2xl font-bold">Crew Space</h1>
        <p className="opacity-80 mt-2">Log in to your account</p>
      </div>
      <form className="flex flex-col gap-2">
        <div>
          <label className="label mb-1">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="john.doe@ex.com"
            className="input rounded-full"
          />
        </div>
        <div>
          <label className="label mb-1">
            <span className="label-text">Password</span>
          </label>
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
      <div className="text-center">
        <p>
          <span className="opacity-80">Don't have an account?</span>{" "}
          <Link to="/register" className="link text-primary">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
