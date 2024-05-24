import React from 'react'
import Data from './Data'
import "./Intro.css"
import { motion } from 'framer-motion'
import { Navigate } from 'react-router-dom'

function Intro() {
    const url="https://drive.google.com/file/d/1wmB0OIxhVlLDhyECzlDiSUegSwLzkMSn/view?usp=sharing";
    const onTap=()=>{
        window.location.href = "https://drive.google.com/file/d/1wmB0OIxhVlLDhyECzlDiSUegSwLzkMSn/view?usp=sharing";
    }
    return (
        <>
            {/* <div className='mb-2 mx-2 border-b-2  mt-2 md:mt-[3.5rem]'>
                <h1 className='text-[4rem] pl-4'>INTRO</h1>
            </div> */}
            <section className='flex flex-col ml-1 my-5 md:mt-[10rem] mb-[4.5rem]  md:flex-row-reverse md:pr-4 justify-end ' id='intro'>
                <div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            x: 50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 0.1 // Animation duration
                            }
                        }}
                        viewport={{ once: false }}
                        className='mx-auto mt-4  intro_img mb-4 md:w-3/6'>
                    </motion.div>
                </div>

                <motion.div
                    initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                        x: 50
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0, // Slide in to its original position
                        transition: {
                            duration: 1 // Animation duration
                        }
                    }}
                    viewport={{ once: false }}
                    className='md:w-4/6 flex flex-col justify-center items-center '>
                    <Data />
                    <motion.button
                        // onClick={onTap}  
                        onClick={()=>window.open(url,'__blank')}
                        whileTap={{ scale: 0.85 }}
                        class="button-85">
                       Check Out CV
                        <img height={25} width={25} src='/Icons/document.svg' />
                    </motion.button>
                </motion.div>
            </section>
        </>
    )
}

export default Intro
