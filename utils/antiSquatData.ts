// data/antiSquatData.ts

export interface AntiSquatPoint {
  travel: number;   // vertical wheel travel (mm)
  value: number;    // anti-squat %
}

export const blueLine: AntiSquatPoint[] = [
  { travel: 0, value: 132 },
  { travel: 30, value: 135 },   // SAG
  { travel: 60, value: 128 },
  { travel: 90, value: 110 },
  { travel: 120, value: 70 },
  { travel: 145, value: 32 },    // 32-10
];

export const whiteLine: AntiSquatPoint[] = [
  { travel: 0, value: 105 },
  { travel: 30, value: 103 },
  { travel: 60, value: 98 },
  { travel: 90, value: 92 },
  { travel: 120, value: 82 },
  { travel: 145, value: 60 },   // 32-52
];

// X-axis scale values
export const xMax = 145;

// Y-axis scale values
export const yMax = 150;
export const yMin = 0;

// Pedaling zone (for dark gray rectangle)
export const pedalingZone = {
  start: 30,
  end: 60,
};

// Inflection point
export const inflectionPoint = 90;
