import { BikeStats } from "@/types/bikeComparison";

// components/bike-showcase/data.ts
export type Hotspot = {
  id: string;
  leftPct: number;
  topPct: number;
  angle?: number;
  title: string;
  description?: string;
};

export type BikeSpec = {
  key: string;
  label: string;
  content: string;
  hotspots?: Hotspot[]; // show on image for this spec
};

export type Bike = {
  id: string;
  uiName: string; // shown in tabs (SEROW)
  bgWord: string;
  image: string;
  logo: string;
  description: string;
  colors: {
    gradient: string;
    bgGradient:string;
    cta: string;
  };
  stats: BikeStats;
  specs: BikeSpec[];
  techSpec: { label: string; value: string }[]; // full technical table
};

export type BikeMap = {
  serow: Bike;
  saola: Bike;
  takin: Bike;
};



export const BIKES: Bike[] = [
  {
    id: "serow",
    uiName: "Serow",
    bgWord: "SEROW",
    image: "/images/bg/serow-new.png",
    logo: "/icons/Serow-white.png",
    description: "A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.",
    colors: {
      gradient: "#5D7510, #252E0A", // top → bottom
      cta: "var(--color-army)",
      bgGradient:"linear-gradient(179.55deg, rgba(93, 117, 16, 0.4) 44.21%, rgba(37, 46, 10, 0.4) 99.61%)"
    },
    stats: {
      suspension: 8,
      braking: 9,
      frame: 9,
      tire: 8,
      weight: 9,
      comfort: 7,
    },
    specs: [
      {
        key: "frame",
        label: "Frame",
        content:
          "Alloy full-suspension frame. Lightweight and durable with 140mm travel.",
        hotspots: [
          {
            id: "reach",
            leftPct: 53,
            topPct: 50,
            angle: -10,
            title: "REACH ADJUST HEADSET CUPS",
            description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
          }
        ],
      },
      {
        key: "suspension",
        label: "Suspension",
        content: "Fox Float 36 fork + DPX2 rear shock. Tuned for mixed trails.",
        hotspots: [
          { id: "h0", leftPct: 38, topPct: 36, angle: -10, title: "Fork travel 150mm", description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain." },
        ],
      },
      {
        key: "drivetrain",
        label: "Drivetrain",
        content: "12-speed Shimano XT with wide-range cassette.",
        hotspots: [{
          id: "h1", leftPct: 38, topPct: 60, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "brakes",
        label: "Brakes",
        content: "Hydraulic disc brakes with 203mm rotors.",
        hotspots: [{
          id: "h2", leftPct: 12, topPct: 46, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
    ],
    techSpec: [
      { label: "Wheel Size", value: "29\"" },
      { label: "Fork Travel", value: "150 mm" },
      { label: "Weight", value: "13.6 kg" },
    ],
  },
  {
    id: "saola",
    uiName: "Saola",
    bgWord: "SAOLA",
    image: "/images/bg/saola-new.png",
    logo: "/icons/Saola-white.png",
    description: "A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.",
    colors: {
      gradient: "#FB000E, #511B1E",
      cta: "var(--color-rust)",
      bgGradient:"linear-gradient(179.55deg, rgba(251, 0, 14, 0.4) 44.21%, rgba(81, 27, 30, 0.4) 99.61%)"
    },
    stats: {
      suspension: 9,
      braking: 7,
      frame: 9,
      tire: 8,
      weight: 9,
      comfort: 7,
    },
    specs: [
      {
        key: "frame",
        label: "Frame",
        content: "Carbon monocoque frame focused on agility.",
        hotspots: [{
          id: "h3", leftPct: 46, topPct: 34, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "suspension",
        label: "Suspension",
        content: "140mm trail tuned.",
        hotspots: [{
          id: "h4", leftPct: 38, topPct: 38, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "drivetrain",
        label: "Drivetrain",
        content: "12 speed SRAM GX.",
        hotspots: [{
          id: "h5", leftPct: 50, topPct: 38, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "brakes",
        label: "Brakes",
        content: "Hydraulic discs 180/160.",
        hotspots: [{
          id: "h6", leftPct: 20, topPct: 38, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
    ],
    techSpec: [
      { label: "Wheel Size", value: "27.5\"" },
      { label: "Fork Travel", value: "140 mm" },
      { label: "Weight", value: "12.4 kg" },
    ],
  },
  {
    id: "takin",
    uiName: "Takin",
    bgWord: "TAKIN",
    image: "/images/bg/takin-new.png",
    logo: "/icons/Takin-white.png",
    description: "A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.",
    colors: {
      gradient: "#ABEAFF, #151532",
      cta: "var(--color-airforce-blue)",
      bgGradient:"linear-gradient(179.9deg, rgba(171, 234, 255, 0.4) 43.47%, rgba(21, 21, 50, 0.4) 79.45%)"
    },
    stats: {
      suspension: 8,
      braking: 7,
      frame: 9,
      tire: 8,
      weight: 8,
      comfort: 7,
    },
    specs: [
      {
        key: "frame",
        label: "Frame",
        content: "Robust alloy frame for hardpack and enduro.",
        hotspots: [{
          id: "h7", leftPct: 30, topPct: 28, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "suspension",
        label: "Suspension",
        content: "160 / 150 mm travel setup.",
        hotspots: [{
          id: "h8", leftPct: 42, topPct: 36, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "drivetrain",
        label: "Drivetrain",
        content: "SRAM Eagle 12-speed.",
        hotspots: [{
          id: "h9", leftPct: 26, topPct: 38, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "brakes",
        label: "Brakes",
        content: "4-piston hydraulic brakes.",
        hotspots: [{
          id: "h10", leftPct: 38, topPct: 38, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
    ],
    techSpec: [
      { label: "Wheel Size", value: "29\"" },
      { label: "Fork Travel", value: "160 mm" },
      { label: "Weight", value: "14.2 kg" },
    ],
  },
];

export const bikes: BikeMap = {
  serow: BIKES[0],
  saola: BIKES[1],
  takin: BIKES[2],
};




export const variants = [
  {
    model: "model-1",
    colors: ["#6F7B12", "#D7CB8B", "#A84545"],
    productLink: "/bikes/serow/model-1",
  },
  {
    model: "model-2",
    colors: ["#556B2F", "#C9C18C", "#9B3E3E"],
    productLink: "/bikes/serow/model-2",
  },
  {
    model: "model-3",
    colors: ["#4D5C1D", "#DAC888", "#8E2F2F"],
    productLink: "/bikes/serow/model-3",
  },
];


export const SPEC_MODELS = ["model-1", "model-2", "model-3"];

export const SPEC_CATEGORIES = [
  "Geometry",
  "Frame",
  "Suspension",
  "Drivetrain",
  "Brakes",
  "Cockpit",
  "Wheels",
  "Specs",
];

export const GEOMETRY_MAP = {
  chainstay_length: {
    label: "Chainstay Length",
    type: "line",
    x1: 140, y1: 360, x2: 420, y2: 360,
  },
  head_tube_angle: {
    label: "Head Tube Angle",
    type: "arc",
    cx: 520, cy: 90, r: 80, start: -20, end: 50,
  },
  seat_tube_angle: {
    label: "Seat Tube Angle",
    type: "arc",
    cx: 200, cy: 180, r: 120, start: -70, end: -10,
  },
  reach: {
    label: "Reach",
    type: "line",
    x1: 300, y1: 150, x2: 500, y2: 150,
  },
  stack: {
    label: "Stack",
    type: "line",
    x1: 300, y1: 150, x2: 300, y2: 40,
  },
  wheelbase: {
    label: "Wheelbase",
    type: "line",
    x1: 80, y1: 430, x2: 520, y2: 430,
  },
};



export const SPEC_TABLE = {
  "model-1": {
    Geometry: [
      { label: "Reach", value: "455mm", geoId: "reach", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Stack", value: "615mm", geoId: "stack", image: "/images/bikes/frame-stack.jpg" },
      { label: "Wheelbase", value: "1230mm", geoId: "wheelbase", image: "/images/bikes/frame-stack.jpg" },
      { label: "Chainstay Length", value: "435mm", geoId: "chainstay_length", image: "/images/bikes/frame-stack.jpg" },
      { label: "Head Tube Angle", value: "64.5°", geoId: "head_tube_angle", image: "/images/bikes/frame-stack.jpg" },
      { label: "Seat Tube Angle", value: "76°", geoId: "seat_tube_angle", image: "/images/bikes/frame-stack.jpg" },
    ],

    Frame: [
      { label: "Bottom Bracket Shell", value: "BSA 73mm", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Rear Brake Mount", value: "200 PM", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Shock Length", value: "230mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Fork Compatibility", value: "170–180mm", image: "/images/bikes/frame-wheel.jpg" },
      { label: "Fork Offset", value: "44mm", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Frame Material", value: "6061-T6 Alloy", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Rear Travel", value: "160mm", image: "/images/bikes/frame-wheel.jpg" },
    ],

    Suspension: [
      { label: "Fork Travel", value: "170mm", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Shock Stroke", value: "62.5mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Shock Type", value: "Air, Medium/Medium", image: "/images/bikes/frame-wheel.jpg" },
      { label: "Fork Axle", value: "15x110mm Boost", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Rear Axle", value: "12x148mm Boost", image: "/images/bikes/frame-stack.jpg" },
    ],

    Drivetrain: [
      { label: "Crankset", value: "SRAM NX 170mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Chainring", value: "32T Narrow-Wide", image: "/images/bikes/frame-wheel.jpg" },
      { label: "Cassette", value: "11-50T 12-speed", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Derailleur", value: "SRAM NX Eagle", image: "/images/bikes/frame-stack.jpg" },
      { label: "Shifter", value: "SRAM NX Trigger", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Chain", value: "SRAM Eagle 12-speed", image: "/images/bikes/frame-stack.jpg" },
    ],

    Brakes: [
      { label: "Front Rotor", value: "203mm", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Rear Rotor", value: "203mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Brake Type", value: "Hydraulic Disc", image: "/images/bikes/frame-stack.jpg" },
      { label: "Calipers", value: "SRAM Guide R", image: "/images/bikes/frame-wheel.jpg" },
    ],

    Cockpit: [
      { label: "Handlebar", value: "780mm Alloy", image: "/images/bikes/frame-stack.jpg" },
      { label: "Stem", value: "40mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Grips", value: "Lock-On Rubber", image: "/images/bikes/frame-stack.jpg" },
      { label: "Seatpost", value: "150mm Dropper Post", image: "/images/bikes/frame-stack.jpg" },
      { label: "Saddle", value: "Ergo Trail Saddle", image: "/images/bikes/frame-stack.jpg" },
    ],

    Wheels: [
      { label: "Wheel Size", value: "29\"", image: "/images/bikes/frame-stack.jpg" },
      { label: "Front Hub", value: "Boost 15x110mm", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Rear Hub", value: "Boost 12x148mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rims", value: "Double Wall Alloy", image: "/images/bikes/frame-wheel.jpg" },
      { label: "Tires", value: "Maxxis Minion DHF/DHR", image: "/images/bikes/frame-stack.jpg" },
    ],

    Specs: [
      { label: "Weight", value: "15.2 kg", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Max Rider Weight", value: "120 kg", image: "/images/bikes/frame-chainstay.jpg" },
      { label: "Warranty", value: "3 Years on Frame", image: "/images/bikes/frame-stack.jpg" },
    ],
  },

  // ✅ MODEL 2 ---------------------------------------
  "model-2": {
    Geometry: [
      { label: "Reach", value: "40mm", geoId: "reach", image: "/images/bikes/frame-wheel.jpg" },
      { label: "Stack", value: "620mm", geoId: "stack", image: "/images/bikes/frame-stack.jpg" },
      { label: "Wheelbase", value: "120mm", geoId: "wheelbase", image: "/images/bikes/frame-stack.jpg" },
      { label: "Chainstay Length", value: "440mm", geoId: "chainstay_length", image: "/images/bikes/frame-stack.jpg" },
      { label: "Head Tube Angle", value: "65°", geoId: "head_tube_angle", image: "/images/bikes/frame-wheel.jpg" },
      { label: "Seat Tube Angle", value: "75°", geoId: "seat_tube_angle", image: "/images/bikes/frame-stack.jpg" },
    ],
    Frame: [
      { label: "Bottom Bracket Shell", value: "BSA 7mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Brake Mount", value: "20 PM", image: "/images/bikes/frame-stack.jpg" },
      { label: "Shock Length", value: "23mm", image: "/images/bikes/frame-wheel.jpg" },
      { label: "Fork Compatibility", value: "70–10mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Fork Offset", value: "44mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Frame Material", value: "6061-T6 Alloy", image: "/images/bikes/frame-wheel.jpg" },
      { label: "Rear Travel", value: "160mm", image: "/images/bikes/frame-stack.jpg" },
    ],

    Suspension: [
      { label: "Fork Travel", value: "170mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Shock Stroke", value: "6.5mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Shock Type", value: "Air, Medium/Medium", image: "/images/bikes/frame-stack.jpg" },
      { label: "Fork Axle", value: "15x10mm Boost", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Axle", value: "12x148mm Boost", image: "/images/bikes/frame-stack.jpg" },
    ],

    Drivetrain: [
      { label: "Crankset", value: "SRM NX 170mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Chainring", value: "32T Narrow-Wide", image: "/images/bikes/frame-stack.jpg" },
      { label: "Cassette", value: "11-5T 12-speed", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Derailleur", value: "SRAM NX Eagle", image: "/images/bikes/frame-stack.jpg" },
      { label: "Shifter", value: "SRAM NX Trigger", image: "/images/bikes/frame-stack.jpg" },
      { label: "Chain", value: "SRM Eagle 12-speed", image: "/images/bikes/frame-stack.jpg" },
    ],

    Brakes: [
      { label: "Front Rotor", value: "203mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Rotor", value: "233mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Brake Type", value: "Hydraulic Disc", image: "/images/bikes/frame-stack.jpg" },
      { label: "Calipers", value: "SRAM Guide T", image: "/images/bikes/frame-stack.jpg" },
    ],

    Cockpit: [
      { label: "Handlebar", value: "780mm Alloy", image: "/images/bikes/frame-stack.jpg" },
      { label: "Stem", value: "42mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Grips", value: "Lock-On Rubber", image: "/images/bikes/frame-stack.jpg" },
      { label: "Seatpost", value: "154mm Dropper Post", image: "/images/bikes/frame-stack.jpg" },
      { label: "Saddle", value: "Ergo Trail Saddle", image: "/images/bikes/frame-stack.jpg" },
    ],

    Wheels: [
      { label: "Wheel Size", value: "25\"", image: "/images/bikes/frame-stack.jpg" },
      { label: "Front Hub", value: "Boost 15x110mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Hub", value: "Boost 14x148mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rims", value: "Double Wall Alloy", image: "/images/bikes/frame-stack.jpg" },
      { label: "Tires", value: "Maxxis Minion DHF/DHR", image: "/images/bikes/frame-stack.jpg" },
    ],

    Specs: [
      { label: "Weight", value: "15.2 kg" },
      { label: "Max Rider Weight", value: "120 kg" },
      { label: "Warranty", value: "3 Years on Frame" },
    ],
  },

  // ✅ MODEL 3 ---------------------------------------
  "model-3": {
    Geometry: [
      { label: "Reach", value: "470mm", geoId: "reach", image: "/images/bikes/frame-stack.jpg" },
      { label: "Stack", value: "620mm", geoId: "stack", image: "/images/bikes/frame-stack.jpg" },
      { label: "Wheelbase", value: "1250mm", geoId: "wheelbase", image: "/images/bikes/frame-stack.jpg" },
      { label: "Chainstay Length", value: "432mm", geoId: "chainstay_length", image: "/images/bikes/frame-stack.jpg" },
      { label: "Head Tube Angle", value: "62.5°", geoId: "head_tube_angle", image: "/images/bikes/frame-stack.jpg" },
      { label: "Seat Tube Angle", value: "77°", geoId: "seat_tube_angle", image: "/images/bikes/frame-stack.jpg" },
    ],
    Frame: [
      { label: "Bottom Bracket Shell", value: "BSA 73mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Brake Mount", value: "200 PM", image: "/images/bikes/frame-stack.jpg" },
      { label: "Shock Length", value: "250mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Fork Compatibility", value: "170–180mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Fork Offset", value: "43mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Frame Material", value: "6061-T6 Alloy", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Travel", value: "180mm", image: "/images/bikes/frame-stack.jpg" },
    ],

    Suspension: [
      { label: "Fork Travel", value: "170mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Shock Stroke", value: "62.5mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Shock Type", value: "Air, Medium/Medium", image: "/images/bikes/frame-stack.jpg" },
      { label: "Fork Axle", value: "13x110mm Boost", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Axle", value: "18x148mm Boost", image: "/images/bikes/frame-stack.jpg" },
    ],

    Drivetrain: [
      { label: "Crankset", value: "SRAM NX 170mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Chainring", value: "32T Narrow-Wide", image: "/images/bikes/frame-stack.jpg" },
      { label: "Cassette", value: "11-50T 12-speed", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Derailleur", value: "SRAM NX Eagle", image: "/images/bikes/frame-stack.jpg" },
      { label: "Shifter", value: "SRAM NX Trigger", image: "/images/bikes/frame-stack.jpg" },
      { label: "Chain", value: "SRAM Eagle 15-speed", image: "/images/bikes/frame-stack.jpg" },
    ],

    Brakes: [
      { label: "Front Rotor", value: "253mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Rotor", value: "283mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Brake Type", value: "Hydraulic Disc", image: "/images/bikes/frame-stack.jpg" },
      { label: "Calipers", value: "SRAM Guide R", image: "/images/bikes/frame-stack.jpg" },
    ],

    Cockpit: [
      { label: "Handlebar", value: "780mm Alloy", image: "/images/bikes/frame-stack.jpg" },
      { label: "Stem", value: "42mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Grips", value: "Lock-On Rubber", image: "/images/bikes/frame-stack.jpg" },
      { label: "Seatpost", value: "150mm Dropper Post", image: "/images/bikes/frame-stack.jpg" },
      { label: "Saddle", value: "Ergo Trail Saddle", image: "/images/bikes/frame-stack.jpg" },
    ],

    Wheels: [
      { label: "Wheel Size", value: "23\"", image: "/images/bikes/frame-stack.jpg" },
      { label: "Front Hub", value: "Boost 15x110mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rear Hub", value: "Boost 12x147mm", image: "/images/bikes/frame-stack.jpg" },
      { label: "Rims", value: "Double Wall Alloy", image: "/images/bikes/frame-stack.jpg" },
      { label: "Tires", value: "Maxxis Minion DHF/DHR", image: "/images/bikes/frame-stack.jpg" },
    ],

    Specs: [
      { label: "Weight", value: "12.2 kg", image: "/images/bikes/frame-stack.jpg" },
      { label: "Max Rider Weight", value: "120 kg", image: "/images/bikes/frame-stack.jpg" },
      { label: "Warranty", value: "4 Years on Frame", image: "/images/bikes/frame-stack.jpg" },
    ],
  },
};



export const SPEC_GRAPH_DATA = [
  {
    spec: "Shock Length",
    model1: 230,
    model2: 230,
    model3: 240,
  },
  {
    spec: "Fork Offset",
    model1: 44,
    model2: 48,
    model3: 44,
  },
  {
    spec: "Rear Brake Mount",
    model1: 200,
    model2: 180,
    model3: 200,
  },
  {
    spec: "Fork Compatibility (mm)",
    model1: 180,
    model2: 150,
    model3: 190,
  },
];
