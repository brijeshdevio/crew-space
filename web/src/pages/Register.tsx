import { Link } from "react-router-dom";

export function Register() {
  return (
    <section className="w-[340px] flex flex-col gap-4 p-5 rounded-2xl bg-base-200 shadow border border-white/10">
      <div>
        <h1 className="text-2xl font-bold">Create your Crew Space account</h1>
        <p className="opacity-80 mt-2">Get started for free</p>
      </div>
      <form className="flex flex-col gap-2">
        <div>
          <label className="label mb-1">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Full name"
            className="input rounded-full"
          />
        </div>
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
            Create Account
          </button>
        </div>
      </form>
      <div className="text-center">
        <p>
          <span className="opacity-80">Already have an account?</span>{" "}
          <Link to="/login" className="link text-primary">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
