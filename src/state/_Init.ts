import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCurrentSayHello = create(
  persist(
    (set) => ({
      isSayHello: true,
      setIsSayHello: (data: boolean) => {
        set({ isSayHello: data });
      },
    }),
    { name: "_CurrentSayHello " }
  )
);
/** Get a current name */
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
/** Get a current step (tim page) */
export const useForced = create(
  persist(
    (set) => ({
      step: 1,
      setStep: (data: number) => {
        set({ step: data });
      },
    }),
    { name: "_CurrentStepTim" }
  )
);
