type LenisScrollEvent = {
  scroll: number;
  limit: number;
  velocity: number;
  direction: 1 | -1;
  progress: number;
};
export type { LenisScrollEvent };