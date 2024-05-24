import React from 'react'
import { motion } from "framer-motion";

function About() {
    const text = "A motivated 3rd-year B.Tech student set on becoming a software developer. Have a strong understanding of Data Structures and Algorithms and can program in C++, JavaScript, Python, and C. I've actively worked on web design and development projects to improve my skills and stay up-to-date with technology. Always learning and right now I'm focusing on becoming a MERN stack developer (MongoDB, Express.js, React.js, Node.js). Passionate about building useful web applications that solve real problems and make things easier for users.".split(" ");
    return (
        <motion.div
            className='mx-2 px-2  mb-[4.5rem] mt-[6.5rem] lg:mt-0'>
            <motion.div
                initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                        duration: 1 // Animation duration
                    }
                }}
                viewport={{ once: false }}
                className='w-full text-4xl font-bold my-8'>
                About
            </motion.div>
            {text.map((el, i) => (
                <motion.span
                    initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        x: i % 2 === 0 ? 50 : -50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                            duration: 1, // Animation duration
                            delay:i/10,
                        }
                    }}
                    viewport={{ once: false }}
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{
                    //     duration: 0.25,
                    //     delay: i / 10,
                    // }}
                    key={i}
                    className='md:text-xl font-light'
                >
                    {el}{" "}
                    {el[el.length - 1] === "." ? (
                        <div className='md:hidden'>
                            <div className='w-full border'></div>
                            <br />
                        </div>) :
                        (<></>)
                    }
                </motion.span>
            ))}
        </motion.div>
    )
}

export default About
