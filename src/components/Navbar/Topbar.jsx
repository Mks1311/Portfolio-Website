import React from 'react'
import { motion } from "framer-motion";

function Topbar() {
    return (
        <header className="Topbar_header">
            <nav className='h-[4rem] flex items-center '>
                <motion.a whileHover={{ scale: [null, 1.3, 1.3] }}
                    transition={{ duration: 0.3 }} href="" className='mr-auto font-medium text-lg'>Manish</motion.a>
                <ul className='flex items-center justify-center tracking-wider gap-5'>

                    <motion.li
                        whileHover={{ scale: [null, 1.1, 1.1] }}
                        transition={{ duration: 0.1 }}
                        className='navbar_li group'>
                        <a href='#home' className='gap-2 flex items-center justify-center ' >
                            <img
                                height={20}
                                width={20}
                                src='/Icons/home.svg' />
                            Home

                        </a>
                        <span className="mt-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white1"></span>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: [null, 1.1, 1.1] }}
                        transition={{ duration: 0.1 }}
                        className='navbar_li group'>
                        <a href='#about' className='gap-2 flex items-center justify-center ' >
                            <img
                                height={20}
                                width={20}
                                src='/Icons/profile.svg' />
                            About

                        </a>
                        <span className="mt-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white1"></span>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: [null, 1.1, 1.1] }}
                        transition={{ duration: 0.1 }}
                        className='navbar_li group'>
                        <a href='#skills' className='gap-2 flex items-center justify-center ' >
                            <img
                                height={20}
                                width={20}
                                src='/Icons/startup.svg' />
                            Skills

                        </a>
                        <span className="mt-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white1"></span>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: [null, 1.1, 1.1] }}
                        transition={{ duration: 0.1 }}
                        className='navbar_li group'>
                        <a href='#projects' className='gap-2 flex items-center justify-center ' >
                            <img
                                height={20}
                                width={20}
                                src='/Icons/laptop.svg' />
                            Projects
                        </a>
                        <span className="mt-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white1"></span>
                    </motion.li>

                    <motion.li
                        whileHover={{ scale: [null, 1.1, 1.1] }}
                        transition={{ duration: 0.1 }}
                        className='navbar_li group'>
                        <a href='#contact' className='gap-2 flex items-center justify-center ' >
                            <img
                                height={20}
                                width={20}
                                src='/Icons/send.svg' />
                            Contact
                        </a>
                        <span className="mt-2 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white1"></span>
                    </motion.li>
                </ul>
            </nav>
        </header>
    )
}

export default Topbar
