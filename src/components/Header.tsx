import { motion } from "framer-motion";

export function Header() {
    return (
        <>
            <section className="w-full text-center flex flex-col gap-4">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="text-lg text-brand-primary font-semibold"
                >
                    Junte-se a nós para comemorar
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl"
                >
                    Karen & Felipe
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, delay: 0.9 }}
                >
                    Jan 12, 2025 às 16h
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <b>Ranch Life</b> <br />
                    Estrada Do Tipiti - Ita Park, Itapecerica da Serra - SP, 06855-100
                </motion.p>
            </section>
        </>
    )
}