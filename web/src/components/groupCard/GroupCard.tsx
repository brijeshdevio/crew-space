export function GroupCard() {
  return (
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
  );
}
