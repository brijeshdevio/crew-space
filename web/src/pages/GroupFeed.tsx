import { GroupFeedCard } from "@/components/groupFeedCard";
import { groupFeed } from "../../data/group-feed";
import type { GroupFeedType } from "@/types/group-feed";

export function GroupFeed() {
  return (
    <section>
      {groupFeed.map((feed: GroupFeedType) => (
        <GroupFeedCard key={feed._id} {...feed} />
      ))}
    </section>
  );
}
