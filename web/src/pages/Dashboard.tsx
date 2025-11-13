export function Dashboard() {
  return (
    <section className="grid grid-cols-4 gap-3">
      <div className="card bg-base-200">
        <div className="card-body">
          <figure>
            <img
              src="https://placehold.co/300x250?text=Engineering+Team"
              alt="Engineering Team"
              className="w-full rounded-md"
            />
          </figure>
          <div>
            <h3 className="card-title">Engineering Team</h3>
            <span className="opacity-80">Updated 2 hours ago</span>
          </div>
        </div>
      </div>
      <div className="card bg-base-200">
        <div className="card-body">
          <figure>
            <img
              src="https://placehold.co/300x250?text=Frontend+Developers"
              alt="Frontend Developers"
              className="w-full rounded-md"
            />
          </figure>
          <div>
            <h3 className="card-title">Frontend Developers</h3>
            <span className="opacity-80">Updated 3 hours ago</span>
          </div>
        </div>
      </div>
      <div className="card bg-base-200">
        <div className="card-body">
          <figure>
            <img
              src="https://placehold.co/300x250?text=Design+Sprint"
              alt="Design Sprint"
              className="w-full rounded-md"
            />
          </figure>
          <div>
            <h3 className="card-title">Design Sprint</h3>
            <span className="opacity-80">Updated yesterday hours ago</span>
          </div>
        </div>
      </div>

      <div className="card bg-base-200">
        <div className="card-body">
          <figure>
            <img
              src="https://placehold.co/300x250?text=Marketing+Crew"
              alt="Marketing Crew"
              className="w-full rounded-md"
            />
          </figure>
          <div>
            <h3 className="card-title">Marketing Crew</h3>
            <span className="opacity-80">Updated yesterday hours ago</span>
          </div>
        </div>
      </div>
    </section>
  );
}
