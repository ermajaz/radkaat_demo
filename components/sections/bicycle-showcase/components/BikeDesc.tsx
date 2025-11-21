"use client";

export default function BikeDesc({ description }: { description: string }) {
    return (
        <span
            className="text-sm font-normal tracking-wider text-white select-none"
            aria-hidden="true"
        >
            {description}
        </span>
    );
}
