import { AllBikeSpecs, BikeEntry } from "./geometry.types";

export const bikeSpecs: AllBikeSpecs = {
  serow: {
    "model-1": [
      { label: "WHEEL SIZE", values: ["29", "29", "29", "29"] },
      { label: "REACH (mm)", values: ["425", "445", "465", "485"] },
      { label: "STACK (mm)", values: ["600", "610", "620", "635"] },
      { label: "CHAIN STAY LENGTH (mm)", values: ["440", "440", "442", "445"] },
      { label: "SEAT ANGLE", values: ["73.5°", "73.8°", "74°", "74.2°"] },
      { label: "HEAD ANGLE", values: ["67.5°", "67.5°", "67°", "66.8°"] },
    ],
    "model-2": [
      { label: "WHEEL SIZE", values: ["29", "29", "29", "29"] },
      { label: "REACH (mm)", values: ["430", "450", "470", "490"] },
      { label: "STACK (mm)", values: ["605", "618", "628", "642"] },
      { label: "CHAIN STAY LENGTH (mm)", values: ["438", "438", "440", "442"] },
      { label: "SEAT ANGLE", values: ["74°", "74°", "74.3°", "74.5°"] },
      { label: "HEAD ANGLE", values: ["67°", "66.8°", "66.5°", "66.3°"] },
    ],
    "model-3": [
      { label: "WHEEL SIZE", values: ["27.5", "27.5", "29", "29"] },
      { label: "REACH (mm)", values: ["420", "440", "460", "480"] },
      { label: "STACK (mm)", values: ["595", "605", "620", "630"] },
      { label: "CHAIN STAY LENGTH (mm)", values: ["435", "437", "439", "441"] },
      { label: "SEAT ANGLE", values: ["73°", "73.5°", "74°", "74°"] },
      { label: "HEAD ANGLE", values: ["68°", "67.5°", "67°", "66.8°"] },
    ],
  },

  saola: {
    "model-1": [
      { label: "WHEEL SIZE", values: ["29", "29", "29", "29"] },
      { label: "REACH (mm)", values: ["435", "455", "475", "495"] },
      { label: "STACK (mm)", values: ["610", "620", "630", "645"] },
      { label: "CHAIN STAY LENGTH (mm)", values: ["442", "442", "444", "445"] },
      { label: "SEAT ANGLE", values: ["74°", "74.2°", "74.5°", "74.7°"] },
      { label: "HEAD ANGLE", values: ["66.5°", "66.3°", "66°", "65.8°"] },
    ],
    "model-2": [
      { label: "WHEEL SIZE", values: ["29", "29", "29", "29"] },
      { label: "REACH (mm)", values: ["440", "460", "480", "500"] },
      { label: "STACK (mm)", values: ["615", "628", "638", "650"] },
      { label: "CHAIN STAY LENGTH (mm)", values: ["440", "441", "442", "444"] },
      { label: "SEAT ANGLE", values: ["74.5°", "74.5°", "74.8°", "75°"] },
      { label: "HEAD ANGLE", values: ["66°", "65.8°", "65.6°", "65.4°"] },
    ],
    "model-3": [
      { label: "WHEEL SIZE", values: ["27.5", "27.5", "29", "29"] },
      { label: "REACH (mm)", values: ["430", "450", "470", "490"] },
      { label: "STACK (mm)", values: ["600", "610", "625", "640"] },
      { label: "CHAIN STAY LENGTH (mm)", values: ["438", "439", "441", "443"] },
      { label: "SEAT ANGLE", values: ["73.8°", "74°", "74.3°", "74.5°"] },
      { label: "HEAD ANGLE", values: ["67.2°", "67°", "66.8°", "66.5°"] },
    ],
  },

  takin: {
    "model-1": [
      { label: "WHEEL SIZE", values: ["29", "29", "29", "29"] },
      { label: "REACH (mm)", values: ["445", "465", "485", "505"] },
      { label: "STACK (mm)", values: ["620", "630", "640", "655"] },
      { label: "CHAIN STAY LENGTH (mm)", values: ["445", "446", "447", "449"] },
      { label: "SEAT ANGLE", values: ["74°", "74.3°", "74.6°", "75°"] },
      { label: "HEAD ANGLE", values: ["65.5°", "65.3°", "65°", "64.8°"] },
    ],
    "model-2": [
      { label: "WHEEL SIZE", values: ["29", "29", "29", "29"] },
      { label: "REACH (mm)", values: ["450", "470", "490", "510"] },
      { label: "STACK (mm)", values: ["625", "640", "650", "665"] },
      { label: "CHAIN STAY LENGTH (mm)", values: ["444", "446", "448", "450"] },
      { label: "SEAT ANGLE", values: ["74.5°", "74.7°", "75°", "75.2°"] },
      { label: "HEAD ANGLE", values: ["65°", "64.8°", "64.6°", "64.4°"] },
    ],
    "model-3": [
      { label: "WHEEL SIZE", values: ["27.5", "27.5", "29", "29"] },
      { label: "REACH (mm)", values: ["440", "460", "480", "500"] },
      { label: "STACK (mm)", values: ["610", "620", "635", "650"] },
      { label: "CHAIN STAY LENGTH (mm)", values: ["442", "443", "445", "447"] },
      { label: "SEAT ANGLE", values: ["74°", "74.2°", "74.5°", "74.8°"] },
      { label: "HEAD ANGLE", values: ["66.2°", "66°", "65.8°", "65.5°"] },
    ],
  },
};


export const BIKE_DATA: Record<string, BikeEntry> = {
  SEROW: {
    images: {
      "model-1": "/images/bikes/radkaat-cycle.png",
      "model-2": "/images/bikes/radkaat-cycle.png",
      "model-3": "/images/bikes/radkaat-cycle.png",
    },
    specs: {
      "model-1": {
        "FRAME SIZE": "4",
        FRAME: "TORAY T-900 UD",
        GROUPSET: "SRAM GX EAGLE M1",
        "WHEELSET DISC": "DT XR 1700 M1",
      },
      "model-2": {
        "FRAME SIZE": "5",
        FRAME: "TORAY T-800 UD",
        GROUPSET: "SRAM GX EAGLE M2",
        "WHEELSET DISC": "DT XR 1700 M2",
      },
      "model-3": {
        "FRAME SIZE": "6",
        FRAME: "TORAY T-700 UD",
        GROUPSET: "SRAM GX EAGLE M3",
        "WHEELSET DISC": "DT XR 1700 M3",
      },
    },
  },

  SAOLA: {
    images: {
      "model-1": "/images/bikes/radkaat-cycle.png",
      "model-2": "/images/bikes/radkaat-cycle.png",
      "model-3": "/images/bikes/radkaat-cycle.png",
    },
    specs: {
      "model-1": {
        "FRAME SIZE": "4",
        FRAME: "TORAY T-900 UD",
        GROUPSET: "SRAM GX EAGLE XS",
        "WHEELSET DISC": "DT XR 1700",
      },
      "model-2": {
        "FRAME SIZE": "5",
        FRAME: "TORAY T-800 UD",
        GROUPSET: "Shimano Deore XT",
        "WHEELSET DISC": "DT XR 1500",
      },
      "model-3": {
        "FRAME SIZE": "6",
        FRAME: "TORAY T-700 UD",
        GROUPSET: "Shimano SLX",
        "WHEELSET DISC": "DT XR 1400",
      },
    },
  },

  TAKIN: {
    images: {
      "model-1": "/images/bikes/radkaat-cycle.png",
      "model-2": "/images/bikes/radkaat-cycle.png",
      "model-3": "/images/bikes/radkaat-cycle.png",
    },
    specs: {
      "model-1": {
        "FRAME SIZE": "4",
        FRAME: "ALLOY 6061",
        GROUPSET: "Shimano Altus",
        "WHEELSET DISC": "WTB SX19",
      },
      "model-2": {
        "FRAME SIZE": "5",
        FRAME: "ALLOY 7005",
        GROUPSET: "Shimano Acera",
        "WHEELSET DISC": "WTB ST i21",
      },
      "model-3": {
        "FRAME SIZE": "6",
        FRAME: "ALLOY 7075",
        GROUPSET: "Shimano Deore",
        "WHEELSET DISC": "WTB ST i23",
      },
    },
  },
};

export const MODELS = ["model-1", "model-2", "model-3"] as const;
