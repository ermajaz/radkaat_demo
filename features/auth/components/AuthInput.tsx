import React from "react";
import clsx from "clsx";

type AuthInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | boolean;
  optional?: boolean;
};

export const AuthInput: React.FC<AuthInputProps> = ({
  label,
  error,
  optional,
  className,
  ...props
}) => {
  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <label className="block text-sm tracking-wider text-gray-500 mb-2 uppercase font-medium">
          {label}{" "}
          {optional && (
            <span className="text-xs text-gray-400">(optional)</span>
          )}
        </label>
      )}

      <input
        {...props}
        className={clsx(
          "w-full h-12 px-4 border border-gray-300 focus:border-gray-700 outline-none transition-shadow duration-150 text-sm",
          " placeholder-gray-400",
          error ? "ring-[var(--error-color, #e11d48)] ring-1" : "ring-0"
        )}
      />
      {error && typeof error === "string" && (
        <p className="mt-2 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
};
