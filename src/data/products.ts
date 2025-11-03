import { data as headphone } from "../components/headphone/data";
import { data as earphones } from "../components/headphone/data";
import { data as speakers } from "../components/headphone/data";

export const store = [
  { type: "headphones", data: headphone },
  { type: "speakers", data: earphones },
  { type: "speakers", data: speakers },
];
