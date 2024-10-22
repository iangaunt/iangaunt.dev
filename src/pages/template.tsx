"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Template({children}: {children: React.ReactNode}) {
    return (
        <AnimatePresence>
			<motion.div
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: "easeInOut", duration: 1 }}
			>
				{children}
			</motion.div>
        </AnimatePresence>
    );
}
