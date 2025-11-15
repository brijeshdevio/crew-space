import type { GroupFeedType } from "@/types/group-feed";

export function GroupFeedCard({ user, content, updatedAt }: GroupFeedType) {
  return (
    <div className="w-full flex gap-3 border-t border-white/10 py-3">
      <div className="h-full">
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-12 rounded-full">
            <img src={user.profile} alt={user.name} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-lg font-bold">{user.name}</h2>
          <span className="badge badge-ghost">{updatedAt} ago</span>
        </div>
        <p className="opacity-80">{content}</p>
      </div>
    </div>
  );
}
