import { GroupCard } from "@/components/groupCard";
import { group } from "../../data/group";
import type { GroupType } from "@/types/group";

export function Dashboard() {
  return (
    <section className="grid grid-cols-4 gap-3">
      {group?.map((item: GroupType) => (
        <GroupCard key={item._id} {...item} />
      ))}
    </section>
  );
}
