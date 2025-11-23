"use client";

export default function BikeDesc({ description }: { description: string }) {
    return (
        <span
            className="text-[13px] font-normal tracking-wide text-white select-none"
            aria-hidden="true"
        >
            {description}
        </span>
    );
}
