import { create } from "zustand";
import type { StoreState } from "@/types/store";

const initialState: StoreState = {
  isGroupModal: false,
  setIsGroupModal: () => {},
  isPostModal: false,
  setIsPostModal: () => {},
};

export const useStore = create<StoreState>((set) => ({
  ...initialState,
  setIsGroupModal: (value: boolean) => set({ isGroupModal: value }),
  setIsPostModal: (value: boolean) => set({ isPostModal: value }),
}));
