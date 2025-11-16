import type { GroupType } from "@/types/group";
export function GroupCard({ name, updatedAt }: GroupType) {
  return (
    <div className="card bg-base-200 rounded-3xl">
      <div className="card-body">
        <div className="w-full h-40 rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-500"></div>
        <div className="mt-3">
          <h3 className="text-md font-bold">{name}</h3>
          <p className="opacity-60 mt-1 text-sm">Updated {updatedAt} ago</p>
        </div>
      </div>
    </div>
  );
}
