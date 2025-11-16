import { Link } from "react-router-dom";

export function Register() {
  return (
    <section className="w-[350px] flex flex-col gap-4 px-5 py-10 rounded-2xl bg-base-100 shadow-md">
      <div>
        <h1 className="text-2xl font-bold">Create your Crew Space account</h1>
        <p className="opacity-60 mt-2 text-sm">Get started for free</p>
      </div>
      <form className="flex flex-col gap-2">
        <div>
          <label className="label mb-1 text-sm">Full Name</label>
          <input
            type="text"
            placeholder="Full name"
            className="input rounded-full"
          />
        </div>
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
            Create Account
          </button>
        </div>
      </form>
      <div className="text-center">
        <p>
          <span className="opacity-60 text-sm">Already have an account?</span>{" "}
          <Link to="/login" className="link text-primary">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
