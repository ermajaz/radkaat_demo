"use client";

import { motion } from "framer-motion";
import ExperienceHeroDesktop from "./hero/ExperienceHeroDesktop";
import ExperienceCollaborationsDesktop from "./collaborations/ExperienceCollaborationsDesktop";
import JungleBookDesktop from "@/components/sections/jungle-book-tour/JungleBookDesktop";


export default function ExperienceDesktop() {


    return (
        <motion.div
            className="relative z-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0 }}
        >
            <ExperienceHeroDesktop />
            <ExperienceCollaborationsDesktop />
            <JungleBookDesktop />
        </motion.div>
    )
}