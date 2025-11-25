"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function WaterDropButton({
    label,
    onClick,
    className,
}: {
    label: string;
    onClick: () => void;
    className?: string;
}) {
    return (
        <Button
            onClick={onClick}
            className={cn(
                "relative h-14 px-8 rounded-full text-superblack font-semibold text-lg",
                "bg-sandstorm ",
                "before:absolute before:inset-0 before:rounded-full before:bg-white/40",
                "before:blur-xl before:opacity-30",
                "active:scale-95 transition-all",
                className
            )}
        >
            {label}
        </Button>
    );
}
