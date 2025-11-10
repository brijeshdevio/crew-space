export function Home() {
  return (
    <>
      <section className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl font-bold">
            Stay in sync, without the <br />
            noise.
          </h1>
          <p className="opacity-80">
            Crew Space helps your team share focused daily updates. All signal,
            no chat.
          </p>
          <div className="text-center mt-3">
            <button className="btn btn-primary rounded-full">
              Get started for free
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
