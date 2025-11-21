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
    cta: string;
  };
  specs: BikeSpec[];
  techSpec: { label: string; value: string }[]; // full technical table
};


export const BIKES: Bike[] = [
  {
    id: "serow",
    uiName: "Serow",
    bgWord: "SEROW",
    image: "/images/dummy-cycle.png",
    logo: "/icons/Serow-white.png",
    description: "A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.",
    colors: {
      gradient: "#C6B783, #806D2A", // top → bottom
      cta: "var(--color-sandstorm)",
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
          { id: "h2", leftPct: 68, topPct: 36, angle: -10, title: "Fork travel 150mm", description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain." },
        ],
      },
      {
        key: "drivetrain",
        label: "Drivetrain",
        content: "12-speed Shimano XT with wide-range cassette.",
        hotspots: [{
          id: "h3", leftPct: 38, topPct: 60, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "brakes",
        label: "Brakes",
        content: "Hydraulic disc brakes with 203mm rotors.",
        hotspots: [{
          id: "h4", leftPct: 82, topPct: 56, angle: -10, title: "REACH ADJUST HEADSET CUPS",
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
    image: "/images/dummy-cycle.png",
    logo: "/icons/Saola-white.png",
    description: "A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.",
    colors: {
      gradient: "#0046D7, #FFFFFF",
      cta: "var(--color-airforce)",
    },
    specs: [
      {
        key: "frame",
        label: "Frame",
        content: "Carbon monocoque frame focused on agility.",
        hotspots: [{
          id: "h1", leftPct: 46, topPct: 34, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "suspension",
        label: "Suspension",
        content: "140mm trail tuned.",
        hotspots: [{
          id: "h2", leftPct: 70, topPct: 38, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "drivetrain",
        label: "Drivetrain",
        content: "12 speed SRAM GX.",
        hotspots: [{
          id: "h2", leftPct: 70, topPct: 38, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "brakes",
        label: "Brakes",
        content: "Hydraulic discs 180/160.",
        hotspots: [{
          id: "h2", leftPct: 70, topPct: 38, angle: -10, title: "REACH ADJUST HEADSET CUPS",
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
    image: "/images/dummy-cycle.png",
    logo: "/icons/Takin-white.png",
    description: "A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.A versatile mountain bike designed for all terrains.",
    colors: {
      gradient: "#516316, #F1FFC3",
      cta: "var(--color-army)",
    },
    specs: [
      {
        key: "frame",
        label: "Frame",
        content: "Robust alloy frame for hardpack and enduro.",
        hotspots: [{
          id: "h2", leftPct: 70, topPct: 38, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "suspension",
        label: "Suspension",
        content: "160 / 150 mm travel setup.",
        hotspots: [{
          id: "h2", leftPct: 72, topPct: 36, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "drivetrain",
        label: "Drivetrain",
        content: "SRAM Eagle 12-speed.",
        hotspots: [{
          id: "h2", leftPct: 70, topPct: 38, angle: -10, title: "REACH ADJUST HEADSET CUPS",
          description: "-8mm / 0 / +8mm. Dials in fit for rider and terrain."
        }],
      },
      {
        key: "brakes",
        label: "Brakes",
        content: "4-piston hydraulic brakes.",
        hotspots: [{
          id: "h2", leftPct: 70, topPct: 38, angle: -10, title: "REACH ADJUST HEADSET CUPS",
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
  "Frame",
  "Suspension",
  "Drivetrain",
  "Brakes",
  "Cockpit",
  "Wheels",
  "Specs",
];


export const SPEC_TABLE = {
  "model-1": {
    Frame: [
      { label: "Bottom Bracket Shell", value: "BSA 73mm" },
      { label: "Rear Brake Mount", value: "200 PM" },
      { label: "Shock Length", value: "230mm" },
      { label: "Fork Compatibility", value: "170–180mm" },
      { label: "Fork Offset", value: "44mm" },
      { label: "Frame Material", value: "6061-T6 Alloy" },
      { label: "Rear Travel", value: "160mm" },
    ],

    Suspension: [
      { label: "Fork Travel", value: "170mm" },
      { label: "Shock Stroke", value: "62.5mm" },
      { label: "Shock Type", value: "Air, Tune: Medium/Medium" },
      { label: "Fork Axle", value: "15x110mm Boost" },
      { label: "Rear Axle", value: "12x148mm Boost" },
    ],

    Drivetrain: [
      { label: "Crankset", value: "SRAM NX 170mm" },
      { label: "Chainring", value: "32T Narrow-Wide" },
      { label: "Cassette", value: "11-50T 12-speed" },
      { label: "Rear Derailleur", value: "SRAM NX Eagle" },
      { label: "Shifter", value: "SRAM NX Trigger" },
      { label: "Chain", value: "SRAM Eagle 12-speed" },
    ],

    Brakes: [
      { label: "Front Rotor", value: "203mm" },
      { label: "Rear Rotor", value: "203mm" },
      { label: "Brake Type", value: "Hydraulic Disc" },
      { label: "Calipers", value: "SRAM Guide R" },
    ],

    Cockpit: [
      { label: "Handlebar", value: "780mm Alloy" },
      { label: "Stem", value: "40mm" },
      { label: "Grips", value: "Lock-On Rubber" },
      { label: "Seatpost", value: "150mm Dropper Post" },
      { label: "Saddle", value: "Ergo Trail Saddle" },
    ],

    Wheels: [
      { label: "Wheel Size", value: "29\"" },
      { label: "Front Hub", value: "Boost 15x110mm" },
      { label: "Rear Hub", value: "Boost 12x148mm" },
      { label: "Rims", value: "Double Wall Alloy" },
      { label: "Tires", value: "Maxxis Minion DHF/DHR" },
    ],

    Specs: [
      { label: "Weight", value: "15.2 kg" },
      { label: "Max Rider Weight", value: "120 kg" },
      { label: "Warranty", value: "3 Years on Frame" },
      { label: "Chainstay Length", value: "435mm" },
      { label: "Head Tube Angle", value: "64.5°" },
    ],
  },

  // ---------------------------------------------
  // MODEL 2
  // ---------------------------------------------

  "model-2": {
    Frame: [
      { label: "Bottom Bracket Shell", value: "BSA 73mm" },
      { label: "Rear Brake Mount", value: "180 PM" },
      { label: "Shock Length", value: "230mm" },
      { label: "Fork Compatibility", value: "150–180mm" },
      { label: "Fork Offset", value: "48mm" },
      { label: "Frame Material", value: "7005 Hydroformed Alloy" },
      { label: "Rear Travel", value: "150mm" },
    ],

    Suspension: [
      { label: "Fork Travel", value: "160mm" },
      { label: "Shock Stroke", value: "60mm" },
      { label: "Shock Type", value: "Air, Tune: Light/Medium" },
      { label: "Fork Axle", value: "15x110mm Boost" },
      { label: "Rear Axle", value: "12x148mm Boost" },
    ],

    Drivetrain: [
      { label: "Crankset", value: "Shimano Deore 170mm" },
      { label: "Chainring", value: "32T Narrow-Wide" },
      { label: "Cassette", value: "10-51T 12-speed" },
      { label: "Rear Derailleur", value: "Shimano Deore M6100" },
      { label: "Shifter", value: "Shimano Deore Rapidfire" },
      { label: "Chain", value: "Shimano 12-speed" },
    ],

    Brakes: [
      { label: "Front Rotor", value: "203mm" },
      { label: "Rear Rotor", value: "180mm" },
      { label: "Brake Type", value: "Hydraulic Disc" },
      { label: "Calipers", value: "Shimano MT420" },
    ],

    Cockpit: [
      { label: "Handlebar", value: "780mm Alloy" },
      { label: "Stem", value: "45mm" },
      { label: "Grips", value: "Soft Rubber" },
      { label: "Seatpost", value: "140mm Dropper Post" },
      { label: "Saddle", value: "Trail Comfort Saddle" },
    ],

    Wheels: [
      { label: "Wheel Size", value: "27.5\"" },
      { label: "Front Hub", value: "Boost 15x110mm" },
      { label: "Rear Hub", value: "Boost 12x148mm" },
      { label: "Rims", value: "Alloy Tubeless Ready" },
      { label: "Tires", value: "Schwalbe Hans Dampf" },
    ],

    Specs: [
      { label: "Weight", value: "14.7 kg" },
      { label: "Max Rider Weight", value: "110 kg" },
      { label: "Warranty", value: "3 Years on Frame" },
      { label: "Chainstay Length", value: "440mm" },
      { label: "Head Tube Angle", value: "65°" },
    ],
  },

  // ---------------------------------------------
  // MODEL 3
  // ---------------------------------------------

  "model-3": {
    Frame: [
      { label: "Bottom Bracket Shell", value: "BB92 Pressfit" },
      { label: "Rear Brake Mount", value: "200 PM" },
      { label: "Shock Length", value: "240mm" },
      { label: "Fork Compatibility", value: "170–190mm" },
      { label: "Fork Offset", value: "44mm" },
      { label: "Frame Material", value: "Full Carbon Fiber" },
      { label: "Rear Travel", value: "170mm" },
    ],

    Suspension: [
      { label: "Fork Travel", value: "180mm" },
      { label: "Shock Stroke", value: "65mm" },
      { label: "Shock Type", value: "Coil, Tune: Firm/Medium" },
      { label: "Fork Axle", value: "15x110mm Boost" },
      { label: "Rear Axle", value: "12x148mm Boost" },
    ],

    Drivetrain: [
      { label: "Crankset", value: "SRAM GX 170mm" },
      { label: "Chainring", value: "32T Narrow-Wide" },
      { label: "Cassette", value: "10-52T 12-speed" },
      { label: "Rear Derailleur", value: "SRAM GX Eagle" },
      { label: "Shifter", value: "SRAM GX Trigger" },
      { label: "Chain", value: "SRAM Eagle 12-speed" },
    ],

    Brakes: [
      { label: "Front Rotor", value: "220mm" },
      { label: "Rear Rotor", value: "203mm" },
      { label: "Brake Type", value: "Hydraulic Disc" },
      { label: "Calipers", value: "SRAM Code R" },
    ],

    Cockpit: [
      { label: "Handlebar", value: "800mm Carbon" },
      { label: "Stem", value: "35mm" },
      { label: "Grips", value: "Soft Rubber Lock-On" },
      { label: "Seatpost", value: "170mm Dropper Post" },
      { label: "Saddle", value: "Enduro Race Saddle" },
    ],

    Wheels: [
      { label: "Wheel Size", value: "29\"" },
      { label: "Front Hub", value: "Boost 15x110mm" },
      { label: "Rear Hub", value: "Boost 12x148mm" },
      { label: "Rims", value: "Carbon 30mm Internal" },
      { label: "Tires", value: "Maxxis Assegai / DHR II" },
    ],

    Specs: [
      { label: "Weight", value: "13.8 kg" },
      { label: "Max Rider Weight", value: "120 kg" },
      { label: "Warranty", value: "5 Years on Frame" },
      { label: "Chainstay Length", value: "432mm" },
      { label: "Head Tube Angle", value: "63.5°" },
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
