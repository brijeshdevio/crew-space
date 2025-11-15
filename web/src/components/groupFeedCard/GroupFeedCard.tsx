export function GroupFeedCard() {
  return (
    <div className="w-full flex gap-3 border-t border-white/10 py-3">
      <div className="h-full">
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-12 rounded-full">
            <span>OR</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-lg font-bold">Olliva Rhya</h2>
          <span className="badge badge-ghost">2 hours ago</span>
        </div>
        <p className="opacity-80">
          Just wrap the final design for the new Dashboard.
        </p>
      </div>
    </div>
  );
}
