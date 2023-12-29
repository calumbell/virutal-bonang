import { PotData } from "@/types/potData";

const upperRack: Array<PotData> = [
  {
    note: "4",
    src: "/audio/pelog/bnpl-4h.wav",
    keybind: "q",
  },
  {
    note: "6",
    src: "/audio/pelog/bnpl-6h.wav",
    keybind: "w",
  },
  {
    note: "5",
    src: "/audio/pelog/bnpl-5h.wav",
    keybind: "e",
  },
  {
    note: "3",
    src: "/audio/pelog/bnpl-3h.wav",
    keybind: "r",
  },
  {
    note: "2",
    src: "/audio/pelog/bnpl-2h.wav",
    keybind: "t",
  },
  {
    note: "q",
    src: "/audio/pelog/bnpl-1.wav",
    keybind: "y",
  },
  {
    note: "7",
    src: "/audio/pelog/bnpl-7h.wav",
    keybind: "u",
  },
];

const lowerRack: Array<PotData> = [
  {
    note: "u",
    src: "/audio/pelog/bnpl-7.wav",
    keybind: "a",
  },
  {
    note: "1",
    src: "/audio/pelog/bnpl-1h.wav",
    keybind: "s",
  },
  {
    note: "w",
    src: "/audio/pelog/bnpl-2.wav",
    keybind: "d",
  },
  {
    note: "e",
    src: "/audio/pelog/bnpl-3.wav",
    keybind: "f",
  },
  {
    note: "t",
    src: "/audio/pelog/bnpl-5.wav",
    keybind: "g",
  },
  {
    note: "y",
    src: "/audio/pelog/bnpl-6.wav",
    keybind: "h",
  },
  {
    note: "r",
    src: "/audio/pelog/bnpl-4.wav",
    keybind: "j",
  },
];

const pelogBemBonang = [upperRack, lowerRack];
export default pelogBemBonang;
