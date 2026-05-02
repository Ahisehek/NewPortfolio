import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { PiArrowFatLinesDownFill } from "react-icons/pi";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen max-sm:flex-col max-sm:gap-30 max-sm:mt-30  flex  items-center px-6 md:px-20 ">

            {/*  Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-[var(--color-primary)]/20 blur-[120px] top-[-100px] left-[-100px]" />
            <div className="absolute w-[400px] h-[400px] bg-[var(--color-secondary)]/20 blur-[120px] bottom-[-100px] right-[-100px]" />

            {/* LEFT */}
            <div className="w-full md:w-1/2 z-10">

                {/* Heading */}

                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-4xl font-body font-bold text-[var(--color-primary)]"
                >
                    Hi, I'm{" "}



                </motion.h3>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-8xl font-bold "
                >


                    <span className="font-heading bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-text)] text-transparent bg-clip-text">
                        Abhishek
                    </span>{" "}

                </motion.h1>


                <div>

                </div>

                {/* Typing Effect */}
                <h2 className="font-body text-2xl md:text-3xl mt-4 text-[var(--color-primary)] font-semibold">
                    <Typewriter
                        words={[
                            "Full Stack Developer",
                            "MERN Stack Developer",
                            "React Developer",
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </h2>

                {/* Description */}
                <p className="font-body mt-4 text-[var(--color-text-secondary)] max-w-md text-2xl">
                    I build modern, scalable web apps with clean UI, smooth animations,
                    and powerful backend systems.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button className="font-body bg-[var(--color-primary)] hover:scale-105 px-6 py-2 rounded-lg transition">
                        Hire Me
                    </button>

                    <button className="font-body text-[var(--color-primary)] border border-[var(--color-primary)] px-6 py-2 rounded-lg hover:bg-[var(--color-primary)]/10 transition">
                        <a
                            href="/Abhishek kushwaha01.pdf"
                            download
                            className="flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-card)] px-6 py-3 rounded-xl text-white font-medium 
                         hover:scale-105 hover:shadow-lg transition duration-300"
                        >
                            <FiDownload />
                            Resume
                        </a>
                    </button>
                </div>
            </div>
            {/* CENTER */}
            <div className="max-sm:hidden mt-200">

                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                >
                    <PiArrowFatLinesDownFill
                        className="h-[30px] w-[30px]"
                        style={{
                            fill: "url(#gradient)"
                        }}
                    />

                    <svg width="0" height="0">
                        <linearGradient id="gradient">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                    </svg>
                </motion.div>
            </div>


            {/* RIGHT */}
            <div className="  h-100 md:flex w-200 justify-center items-center relative">

                {/* Glow circle */}
                {/* <motion.div
                    animate={{ y: [0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-80  h-80  rounded-full bg-[var(--color-primary)]/20 blur-3xl absolute"
                /> */}

                {/* Profile */}
                <motion.div
                    animate={{ y: [0, -30, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-80  h-80  border-l-4 border-r-4 rounded-full max-sm:ml-60 border-b-4  border-[var(--color-primary)]  z-0  absolute"
                />

                <img
                    src="/abhipng"
                    alt="profile"
                    className="h-50   rounded-full object-cover    z-10 border-b-4 border-[var(--color-primary)]"
                />

                {/* Floating Icons */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-10  left-10 text-3xl text-[var(--color-primary)]"
                >
                    <FaReact className="h-15 w-15" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute bottom-10 right-10 text-3xl text-green-400"
                >
                    <FaNodeJs className="h-15 w-15" />
                </motion.div>

                <motion.div
                    animate={{ x: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute bottom-20 left-5 text-3xl text-green-500"
                >
                    <SiMongodb className="h-15 w-15" />
                </motion.div>

                <motion.div
                    animate={{ x: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-20 right-5 text-3xl text-gray-400"
                >
                    <SiExpress className="h-15 w-15" />
                </motion.div>

            </div>




        </section>
    );
}