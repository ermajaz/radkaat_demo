"use client";

import JungleBook from "@/components/sections/jungle-book-tour/JungleBook";
import ExperienceCollaborations from "@/features/experiences/collaborations/ExperienceCollaborations";
import ExperienceHero from "@/features/experiences/hero/ExperienceHero";
import { motion } from "framer-motion";

export default function ExperiencesPage() {

    return (
        <main className="z-100">
            <motion.div
                className="relative z-10"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0 }}
            >
                <ExperienceHero />
                <ExperienceCollaborations />
                <JungleBook />
            </motion.div>
        </main>
    );
}
