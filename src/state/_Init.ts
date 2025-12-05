import { create } from "zustand";
import { persist } from "zustand/middleware";

/** Get a current parawi (hadist) */
export const useCurrentSayHello = create(
  persist(
    (set) => ({
      isSayHello: true,
      setIsSayHello: (data: boolean) => {
        set({ isSayHello: data });
      },
    }),
    { name: "_CurrentSayHello" }
  )
);
/** Get a current parawi (hadist) */
export const useCurrentName = create(
  persist(
    (set) => ({
      name: "",
      setName: (data: string) => {
        set({ name: data });
      },
    }),
    { name: "_CurrentName" }
  )
);
