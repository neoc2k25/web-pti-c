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
    { name: "_CurrentSayHalo" }
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
    { name: "_CurrentNama" }
  )
);
/** Get a current step (tim page) */
export const useForcedTim = create(
  persist(
    (set) => ({
      step: 1,
      setStep: (data: number) => {
        set({ step: data });
      },
    }),
    { name: "_CurrentStepTeam" }
  )
);
/** Get a current step (tim page by id) */
export const useForcedTimById = (id: number) =>
  create(
    persist(
      (set) => ({
        step: { id, no: 1 },
        setStep: ({ id, no }: { id: number; no: number }) =>
          set({ step: { id, no } }),
      }),
      {
        name: `_CurrentStepTim_${id}`,
      }
    )
  );
/** Get a current step (positron) */
export const useForcedPositron = create(
  persist(
    (set) => ({
      step: 1,
      setStep: (data: number) => {
        set({ step: data });
      },
    }),
    {
      name: `_CurrentStepPositron`,
    }
  )
);
