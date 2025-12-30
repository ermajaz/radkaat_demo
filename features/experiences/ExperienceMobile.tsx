"use client";

import { motion } from "framer-motion";
import ExperienceHeroMobile from "./hero/ExperienceHeroMobile";
import ExperienceCollaborationsMobile from "./collaborations/ExperienceCollaborationsMobile";
import JungleBookMobile from "@/components/sections/jungle-book-tour/JungleBookMobile";


export default function ExperienceMobile(){


    return (
         <motion.div
            className="relative z-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0 }}
        >
            <ExperienceHeroMobile />
            <ExperienceCollaborationsMobile />
            <JungleBookMobile />
        </motion.div>
    )
}