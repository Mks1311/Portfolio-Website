import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";



function Bottombar() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1,
                ease: [0, 0.71, 0.2, 1.01]
            }
        },

    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="toggleDiv"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        exit={{ scale: 0.8, opacity: 0 }}
                        className='menu md:hidden fixed bottom-[3.2rem] w-full bg-neutral bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-4 py-2 rounded-3xl '>
                        <ul
                            key="toggleUl"
                            style={{ pointerEvents: isOpen ? "auto" : "none" }}
                            className='container grid grid-cols-3  tracking-wider gap-5 justify-items-start'>

                            <motion.li
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}

                                className='navbar_li'>
                                <a href='#home' className='gap-2 flex items-center justify-center ' >
                                    <img
                                        height={20}
                                        width={20}
                                        src='/Icons/home.svg' />
                                    Home

                                </a>
                                <span className="mt-2 block max-w-full  h-0.5 bg-white1"></span>
                            </motion.li>

                            <motion.li
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className='navbar_li group'>
                                <a href='#about' className='gap-2 flex items-center justify-center ' >
                                    <img
                                        height={20}
                                        width={20}
                                        src='/Icons/profile.svg' />
                                    About

                                </a>
                                <span className="mt-2 block max-w-full transition-all duration-500 h-0.5 bg-white1"></span>
                            </motion.li>

                            <motion.li
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className='navbar_li group'>
                                <a href='#skills' className='gap-2 flex items-center justify-center ' >
                                    <img
                                        height={20}
                                        width={20}
                                        src='/Icons/startup.svg' />
                                    Skills

                                </a>
                                <span className="mt-2 block max-w-full transition-all duration-500 h-0.5 bg-white1"></span>
                            </motion.li>

                            <motion.li initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }} className='navbar_li group'>
                                <a href='#projects' className='gap-2 flex items-center justify-center ' >
                                    <img
                                        height={20}
                                        width={20}
                                        src='/Icons/laptop.svg' />
                                    Projects
                                </a>
                                <span className="mt-2 block max-w-full transition-all duration-500 h-0.5 bg-white1"></span>
                            </motion.li>

                            <motion.li initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }} className='navbar_li group'>
                                <a href='#contact' className='gap-2 flex items-center justify-center ' >
                                    <img
                                        height={20}
                                        width={20}
                                        src='/Icons/send.svg' />
                                    Contact
                                </a>
                                <span className="mt-2 block max-w-full transition-all duration-500 h-0.5 bg-white1"></span>
                            </motion.li>

                        </ul>
                    </motion.div>

                )}
            </AnimatePresence>

            {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
            <motion.div className='md:hidden fixed bottom-0 w-full flex items-center justify-between h-[3rem] bg-neutral bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] px-4'>
                <motion.a whileHover={{ scale: [null, 1.2, 1.2] }}
                    transition={{ duration: 0.3 }} href="" className='mr-auto'>Manish</motion.a>
                <motion.div className='cursor-pointer '>
                    <motion.img
                        animate={{
                            rotate: isOpen ? 90 : 0
                        }}
                        onClick={() => setIsOpen(!isOpen)}
                        height={25}
                        width={25}
                        src={isOpen ? ("/Icons/cross.svg") : ('/Icons/filter-lines.svg')}
                    />
                </motion.div>
            </motion.div>
        </>
    )
}

export default Bottombar
