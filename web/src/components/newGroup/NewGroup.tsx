import { useStore } from "@/hooks";
import { X } from "lucide-react";

export function NewGroup() {
  const { setIsGroupModal } = useStore();
  const handleCloseGroupModal = () => setIsGroupModal(false);
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-base-300/80">
      <div className="w-[350px] flex flex-col gap-4 px-5 py-5 rounded-2xl bg-base-100 shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-md font-bold">Create a New Group</h2>
          <button
            className="btn btn-sm btn-ghost btn-circle"
            onClick={handleCloseGroupModal}
          >
            <X size={20} />
          </button>
        </div>
        <form className="flex flex-col gap-2">
          <div>
            <label className="label mb-1 text-sm">Group Name</label>
            <input
              type="email"
              placeholder="john.doe@ex.com"
              className="input rounded-2xl"
            />
          </div>
          <div>
            <label className="label mb-1 text-sm">Description (Optional)</label>
            <textarea
              name=""
              className="textarea resize-none rounded-2xl"
              id=""
              placeholder="A brief description of this group's purposes"
            ></textarea>
          </div>
          <div className="mt-3">
            <button className="w-full btn btn-primary rounded-full">
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
