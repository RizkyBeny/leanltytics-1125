import { create } from "zustand";

type ResearchData = {
    email: string;
    topic: string;
    category: string;
    objective: string;
    urlReference: string;
};

type ResearchState = {
    step: number;
    data: ResearchData;
    setStep: (step: number) => void;
    updateData: (data: Partial<ResearchData>) => void;
    reset: () => void;
};

const initialData: ResearchData = {
    email: "",
    topic: "",
    category: "",
    objective: "",
    urlReference: "",
};

export const useResearchStore = create<ResearchState>((set) => ({
    step: 1,
    data: initialData,
    setStep: (step) => set({ step }),
    updateData: (newData) =>
        set((state) => ({
            data: { ...state.data, ...newData },
        })),
    reset: () => set({ step: 1, data: initialData }),
}));
