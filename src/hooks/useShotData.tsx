import { create } from "zustand";

interface IShotData {
  images: Array<{
    selected: boolean;
    data: string;
  }>;
  type: string | null;
  pushImage: (canvas: HTMLCanvasElement) => void;
  set: {
    (
      partial:
        | IShotData
        | Partial<IShotData>
        | ((state: IShotData) => IShotData | Partial<IShotData>),
      replace?: false
    ): void;
    (state: IShotData | ((state: IShotData) => IShotData), replace: true): void;
  };
}

const defaultData = {
  images: [],
  type: null,
};

export const useShotData = create<IShotData>((set, get) => ({
  ...defaultData,
  set,
  pushImage: (canvas: HTMLCanvasElement) => {
    set({ images: [...get().images, { selected: false, data: canvas.toDataURL("image/png") }] });
  },
}));
