import { create } from "zustand";

export const pageList = [
  "계정 ID 입력",
  "사진 형태 선택",
  "결제 방식 선택",
  "결제",
  "촬영",
  "사진 선택",
  "배경 선택",
  "다운로드",
];

export const preventList = ["촬영", "다운로드"];

interface IPageIndex {
  index: number;
  setIndex: (index: number) => void;
  getNameByIndex: () => string;
  prev: () => void;
  next: () => void;
}

export const usePageIndex = create<IPageIndex>((set, get) => ({
  index: 0,
  setIndex: (index: number) => set({ index }),
  getNameByIndex: () => pageList[get().index],
  prev: () => get().index !== 0 && set({ index: get().index - 1 }),
  next: () => get().index < pageList.length - 1 && set({ index: get().index + 1 }),
}));
