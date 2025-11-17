import { X } from "lucide-react";

export function NewPost() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-base-300/80">
      <div className="w-[350px] flex flex-col gap-4 px-5 py-5 rounded-2xl bg-base-100 shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-md font-bold">What's your update?</h2>
          <button className="btn btn-sm btn-ghost btn-circle">
            <X size={20} />
          </button>
        </div>
        <form className="flex flex-col gap-2">
          <div>
            <textarea
              name=""
              className="textarea resize-none rounded-2xl"
              id=""
              placeholder="Share what you,re working on today..."
            ></textarea>
          </div>
          <div className="mt-3">
            <button className="w-full btn btn-primary rounded-full">
              Post Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
