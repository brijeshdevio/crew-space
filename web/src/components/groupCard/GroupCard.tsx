import type { GroupType } from "@/types/group";
export function GroupCard({ name, image, updatedAt }: GroupType) {
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <figure>
          <img src={image} alt={name} className="w-full rounded-md" />
        </figure>
        <div>
          <h3 className="card-title">{name}</h3>
          <span className="opacity-80">Updated {updatedAt} ago</span>
        </div>
      </div>
    </div>
  );
}
