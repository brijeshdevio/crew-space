import { dailyLogs } from "@/data";
import { timeAgo } from "@/utils";

export function Home() {
  return (
    <div className="h-[calc(100vh-57px-45px)] overflow-y-scroll">
      <main className="w-full sm:w-[90%] max-w-[1200px] mx-auto py-5 px-3 ">
        <section className="flex flex-col gap-3">
          {dailyLogs?.map((log) => (
            <div className="card p-0 bg-base-200" key={log._id}>
              <div className="card-body">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="avatar avatar-placeholder">
                      <div className="bg-neutral text-neutral-content w-10 rounded-full">
                        {log.createdBy.avatar ? (
                          <img
                            src={log.createdBy.avatar}
                            alt={log.createdBy.name}
                          />
                        ) : (
                          <span className="text-sm">
                            {log.createdBy.name[0]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-md">{log.createdBy.name}</h3>
                    <p className="text-sm opacity-70">
                      @{log.createdBy.username}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm">{log.title}</p>
                  <div className="mt-3">
                    <span className="text-xs opacity-70 badge">
                      {timeAgo(log.updatedAt)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
