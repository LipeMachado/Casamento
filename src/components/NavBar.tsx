'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

const navbarFirstList = [
    {
        menu: "Página Inicial",
        link: "/"
    },
    {
        menu: "Nossa História",
        link: "/"
    },
    {
        menu: "Local",
        link: "/"
    },
];

const navbarSecondList = [
    {
        menu: "Presentes",
        link: "/"
    },
    {
        menu: "Confirmação",
        link: "/confirmacao"
    },
    {
        menu: "Contato",
        link: "/contato"
    },
];

export function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    };

    return (
        <>
            <nav className="h-full lg:h-36 mb-8 flex justify-evenly lg:justify-center items-center">
                <ul className="hidden lg:flex-row lg:flex w-full gap-14 justify-center items-center text-[#2B1105] text-lg pr-0 lg:pr-[20px]">
                    {navbarFirstList.map((item) => (
                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.35 }}
                            key={item.menu}
                            className="text-[#2B1105] hover:text-[#2B1105]/70 transition-colors"
                            href={item.link}
                        >
                            {item.menu}
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="w-24 h-24 flex justify-center items-center border-[1px] border-black rounded-full select-none"
                    >
                        <p className="font-light text-4xl">F&K</p>
                    </motion.div>
                    {navbarSecondList.map((item) => (
                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.35 }}
                            key={item.menu}
                            className="text-[#2B1105] hover:text-[#2B1105]/70 transition-colors"
                            href={item.link}
                        >
                            {item.menu}
                        </motion.a>
                    ))}
                </ul>
                <div className="w-full flex justify-between md:justify-evenly items-center lg:hidden pt-5 px-5">
                    <div className="flex justify-start items-start h-full">
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.35 }}
                            className="lg:hidden"
                            onClick={toggleMenu}
                            aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
                        >
                            {/* OPEN MENU MOBILE */}
                            {menuOpen ? (
                                <>
                                    <div className="z-[999] relative">
                                        <Hamburger toggled={menuOpen} size={20} toggle={setMenuOpen} />
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="fixed inset-0 mx-auto justify-center items-center content-center bg-[#E9DFF8] bg-opacity-80 backdrop-blur-sm z-50"
                                    >
                                        <div className="flex flex-col items-center">
                                            {navbarFirstList.map((item, idx) => (
                                                <motion.a
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 260,
                                                        damping: 20,
                                                        delay: 0.1 + idx / 10,
                                                    }}
                                                    key={item.menu}
                                                    className="text-[#2B1105] hover:text-[#2B1105]/70 transition-colors my-4 text-xl"
                                                    href={item.link}
                                                    onClick={toggleMenu}
                                                >
                                                    {item.menu}
                                                </motion.a>
                                            ))}
                                            {navbarSecondList.map((item, idx) => (
                                                <motion.a
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 260,
                                                        damping: 20,
                                                        delay: 0.1 + idx / 10,
                                                    }}
                                                    key={item.menu}
                                                    className="text-[#2B1105] hover:text-[#2B1105]/70 transition-colors my-4 text-xl"
                                                    href={item.link}
                                                    onClick={toggleMenu}
                                                >
                                                    {item.menu}
                                                </motion.a>
                                            ))}
                                        </div>
                                    </motion.div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <Hamburger toggled={menuOpen} size={20} toggle={setMenuOpen} />
                                    </div>
                                </>
                            )}
                        </motion.button>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="flex lg:hidden"
                    >
                        <div className="w-24 h-24 flex justify-center items-center border-[1px] border-black rounded-full select-none">
                            <p className="font-light text-4xl">K&F</p>
                        </div>
                    </motion.div>
                    <div className="w-[48px] h-[48px]"></div>
                </div>
            </nav>
        </>
    );
}
