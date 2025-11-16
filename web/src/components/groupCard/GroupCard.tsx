import type { GroupType } from "@/types/group";
export function GroupCard({ name, updatedAt }: GroupType) {
  return (
    <div className="card bg-base-200 rounded-3xl">
      <div className="card-body">
        <div className="w-full h-40 rounded-3xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 "></div>
        <div className="mt-3">
          <h3 className="text-md font-bold">{name}</h3>
          <p className="opacity-60 mt-2 text-sm">Updated {updatedAt} ago</p>
        </div>
      </div>
    </div>
  );
}
