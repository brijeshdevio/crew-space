import { GroupFeedCard } from "@/components/groupFeedCard";
import { groupFeed } from "../../data/group-feed";
import type { GroupFeedType } from "@/types/group-feed";

export function GroupFeed() {
  return (
    <>
      <section>
        <div className="text-center">
          <button className="btn btn-primary rounded-full px-10">
            Post Update
          </button>
        </div>
      </section>
      <section>
        {groupFeed.map((feed: GroupFeedType) => (
          <GroupFeedCard key={feed._id} {...feed} />
        ))}
      </section>
    </>
  );
}
