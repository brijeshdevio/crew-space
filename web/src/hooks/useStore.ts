import { create } from "zustand";
import type { StoreState } from "@/types/store";

const initialState: StoreState = {
  isGroupModal: false,
  setIsGroupModal: () => {},
};

export const useStore = create<StoreState>((set) => ({
  ...initialState,
  setIsGroupModal: (value: boolean) => set({ isGroupModal: value }),
}));
