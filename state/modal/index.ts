import { atom } from "jotai";
import { modals } from "./modals";

export const activeModal = atom<keyof typeof modals | null>(null);
