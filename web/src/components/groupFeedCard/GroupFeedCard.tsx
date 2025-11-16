import type { GroupFeedType } from "@/types/group-feed";

export function GroupFeedCard({ user, content, updatedAt }: GroupFeedType) {
  return (
    <div className="w-full flex gap-3 border-b border-white/5 px-3 py-5 hover:bg-base-200 rounded">
      <div className="h-full">
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-10 rounded-full">
            <img src={user.profile} alt={user.name} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-md font-bold">{user.name}</h2>
          <span className="badge badge-ghost opacity-60 text-sm">
            {updatedAt} ago
          </span>
        </div>
        <p className="opacity-80 text-sm">{content}</p>
      </div>
    </div>
  );
}
