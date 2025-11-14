import { GroupCard } from "@/components/groupCard";
import { group } from "../../data/group";

export function Dashboard() {
  return (
    <section className="grid grid-cols-4 gap-3">
      {group?.map((item) => (
        <GroupCard key={item._id} />
      ))}
    </section>
  );
}
