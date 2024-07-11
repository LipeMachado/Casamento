import Image from "next/image";
import { motion } from "framer-motion";

export function Carousel() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="flex justify-center my-10 sm:my-20 mx-5 sm:mx-10"
            >
                <Image className="rounded-xl md:rounded-2xl shadow-lg shadow-gray-600" width={1000} height={0} src="/bannerInicial.jpg" alt="" />
            </motion.div>
        </>
    )
}