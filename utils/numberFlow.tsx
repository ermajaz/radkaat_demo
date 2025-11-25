"use client";

import React from "react";
import NumberFlow from "@number-flow/react";

interface FormattedNumberProps {
  value: number;
}

export const FormattedNumber: React.FC<FormattedNumberProps> = ({ value }) => {
  const roundedValue =
    Math[value - Math.floor(value) >= 0.5 ? "ceil" : "floor"](value);

  const formattedValue = Number(roundedValue.toFixed(2));

  return (
    <NumberFlow
      value={formattedValue} // ✅ must be number
      format={{
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }}
      locales="en-IN"
    />
  );
};

interface FormattedNumberWithoutDecimalsProps {
  value: number;
}

export const FormattedNumberWithoutDecimals: React.FC<
  FormattedNumberWithoutDecimalsProps
> = ({ value }) => {
  const roundedValue =
    Math[value - Math.floor(value) >= 0.5 ? "ceil" : "floor"](value);

  const hasDecimals = roundedValue % 1 !== 0;
  const formattedValue = hasDecimals
    ? Number(roundedValue.toFixed(2))
    : roundedValue;

  return (
    <NumberFlow
      value={formattedValue} // ✅ still number
      format={{
        style: "currency",
        currency: "INR",
        minimumFractionDigits: hasDecimals ? 2 : 0,
        maximumFractionDigits: hasDecimals ? 2 : 0,
      }}
      locales="en-IN"
    />
  );
};

interface AnimatedQuantityProps {
  value: number;
}

export const AnimatedQuantity: React.FC<AnimatedQuantityProps> = ({
  value,
}) => {
  return (
    <NumberFlow
      value={value} // ✅ number only
      locales="en-US"
      format={{ notation: "standard" }}
      transformTiming={{ duration: 400, easing: "linear" }}
      spinTiming={{ duration: 400, easing: "linear" }}
      opacityTiming={{ duration: 350, easing: "ease-out" }}
    />
  );
};
