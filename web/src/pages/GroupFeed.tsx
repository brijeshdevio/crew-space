import { GroupFeedCard } from "@/components/groupFeedCard";
import { groupFeed } from "../../data/group-feed";

export function GroupFeed() {
  return (
    <section>
      {groupFeed.map((_, index) => (
        <GroupFeedCard key={index} />
      ))}
    </section>
  );
}
