import { create } from "zustand";
import type { StoreState } from "@/types/store";

export const useStore = create<StoreState>(() => ({}));
