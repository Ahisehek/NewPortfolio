// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { FaReact, FaNodeJs } from "react-icons/fa";
// import { SiMongodb, SiExpress } from "react-icons/si";
// import { FiDownload } from "react-icons/fi";
// import { PiArrowFatLinesDownFill } from "react-icons/pi";

// export default function Hero() {
//     return (
//         <section id="home" className="min-h-screen max-sm:flex-col max-sm:gap-30 max-sm:mt-30  flex  items-center px-6 md:px-20 ">

//             {/*  Background Glow */}
//             <div className="absolute w-[500px] h-[500px] bg-[var(--color-primary)]/20 blur-[120px] top-[-100px] left-[-100px]" />
//             <div className="absolute w-[400px] h-[400px] bg-[var(--color-secondary)]/20 blur-[120px] bottom-[-100px] right-[-100px]" />

//             {/* LEFT */}
//             <div className="w-full md:w-1/2 z-10">

//                 {/* Heading */}

//                 <motion.h3
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                     className="text-4xl md:text-4xl font-body font-bold text-[var(--color-primary)]"
//                 >
//                     Hi, I'm{" "}



//                 </motion.h3>

//                 <motion.h1
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7 }}
//                     className="text-4xl md:text-8xl font-bold "
//                 >


//                     <span className="font-heading bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-text)] text-transparent bg-clip-text">
//                         Abhishek
//                     </span>{" "}

//                 </motion.h1>


//                 <div>

//                 </div>

//                 {/* Typing Effect */}
//                 <h2 className="font-body text-2xl md:text-3xl mt-4 text-[var(--color-primary)] font-semibold">
//                     <Typewriter
//                         words={[
//                             "Full Stack Developer",
//                             "MERN Stack Developer",
//                             "React Developer",
//                         ]}
//                         loop={true}
//                         cursor
//                         cursorStyle="|"
//                         typeSpeed={70}
//                         deleteSpeed={50}
//                         delaySpeed={1500}
//                     />
//                 </h2>

//                 {/* Description */}
//                 <p className="font-body mt-4 text-[var(--color-text-secondary)] max-w-md text-2xl">
//                     I build modern, scalable web apps with clean UI, smooth animations,
//                     and powerful backend systems.
//                 </p>

//                 {/* Buttons */}
//                 <div className="flex gap-4 mt-6">
//                     <button className="font-body bg-[var(--color-primary)] hover:scale-105 px-6 py-2 rounded-lg transition">
//                         Hire Me
//                     </button>

//                     <button className="font-body text-[var(--color-primary)] border border-[var(--color-primary)] px-6 py-2 rounded-lg hover:bg-[var(--color-primary)]/10 transition">
//                         <a
//                             href="/Abhishek kushwaha01.pdf"
//                             download
//                             className="flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-card)] px-6 py-3 rounded-xl text-white font-medium
//                          hover:scale-105 hover:shadow-lg transition duration-300"
//                         >
//                             <FiDownload />
//                             Resume
//                         </a>
//                     </button>
//                 </div>
//             </div>
//             {/* CENTER */}
//             <div className="max-sm:hidden mt-200">

//                 <motion.div
//                     animate={{ y: [0, -20, 0] }}
//                     transition={{ repeat: Infinity, duration: 3 }}
//                 >
//                     <PiArrowFatLinesDownFill
//                         className="h-[30px] w-[30px]"
//                         style={{
//                             fill: "url(#gradient)"
//                         }}
//                     />

//                     <svg width="0" height="0">
//                         <linearGradient id="gradient">
//                             <stop offset="0%" stopColor="#6366f1" />
//                             <stop offset="100%" stopColor="#a855f7" />
//                         </linearGradient>
//                     </svg>
//                 </motion.div>
//             </div>


//             {/* RIGHT */}
//             <div className="  h-100 md:flex w-200 justify-center items-center relative">

//                 {/* Glow circle */}
//                 {/* <motion.div
//                     animate={{ y: [0, -30, 0] }}
//                     transition={{ repeat: Infinity, duration: 4 }}
//                     className="w-80  h-80  rounded-full bg-[var(--color-primary)]/20 blur-3xl absolute"
//                 /> */}

//                 {/* Profile */}
//                 <motion.div
//                     animate={{ y: [0, -30, 0] }}
//                     transition={{ repeat: Infinity, duration: 4 }}
//                     className="w-80  h-80  border-l-4 border-r-4 rounded-full max-sm:ml-60 border-b-4  border-[var(--color-primary)]  z-0  absolute"
//                 />

//                 <img
//                     src="/abhipng"
//                     alt="profile"
//                     className="h-50   rounded-full object-cover    z-10 border-b-4 border-[var(--color-primary)]"
//                 />

//                 {/* Floating Icons */}
//                 <motion.div
//                     animate={{ y: [0, -20, 0] }}
//                     transition={{ repeat: Infinity, duration: 3 }}
//                     className="absolute top-10  left-10 text-3xl text-[var(--color-primary)]"
//                 >
//                     <FaReact className="h-15 w-15" />
//                 </motion.div>

//                 <motion.div
//                     animate={{ y: [0, 20, 0] }}
//                     transition={{ repeat: Infinity, duration: 3 }}
//                     className="absolute bottom-10 right-10 text-3xl text-green-400"
//                 >
//                     <FaNodeJs className="h-15 w-15" />
//                 </motion.div>

//                 <motion.div
//                     animate={{ x: [0, 20, 0] }}
//                     transition={{ repeat: Infinity, duration: 3 }}
//                     className="absolute bottom-20 left-5 text-3xl text-green-500"
//                 >
//                     <SiMongodb className="h-15 w-15" />
//                 </motion.div>

//                 <motion.div
//                     animate={{ x: [0, -20, 0] }}
//                     transition={{ repeat: Infinity, duration: 3 }}
//                     className="absolute top-20 right-5 text-3xl text-gray-400"
//                 >
//                     <SiExpress className="h-15 w-15" />
//                 </motion.div>

//             </div>




//         </section>
//     );
// }


import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { PiArrowFatLinesDownFill } from "react-icons/pi";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden"
        >

            {/* Background Glow */}


            {/* Main Content */}
            <div className="relative flex items-center justify-center w-full min-h-screen py-26 ">

                {/* Rotating Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[650px] md:h-[650px] lg:w-[600px] lg:h-[600px]
                    rounded-full border border-[var(--color-primary)]/20"
                />

                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: "linear",
                    }}
                    className="absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] md:w-[550px] md:h-[550px] lg:w-[560px] lg:h-[560px]
                    rounded-full border-3 border-dashed border-purple-400"
                />

                {/* Hero Card */}
                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                    }}
                    className="relative w-full h-140 max-w-6xl 
                    rounded-[30px] 
        
                     backdrop-blur
                    shadow-[0_0_50px_rgba(99,102,241,0.15)]
                    p-6 sm:p-10 md:p-14"
                >

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full
                        border border-[var(--color-primary)]/30
                        bg-[var(--color-primary)]/10
                        text-[var(--color-primary)]
                        text-xs sm:text-sm font-medium mb-6 "
                    >
                        Open to Freelance & Full-Time Opportunities
                    </motion.div>

                    {/* Intro */}
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xl sm:text-2xl md:text-3xl font-body font-semibold text-[var(--color-primary)]"
                    >
                        Hi, I'm
                    </motion.h3>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mt-2"
                    >
                        <span className="font-heading bg-gradient-to-r from-[var(--color-primary)] via-purple-400 to-white bg-clip-text text-transparent">
                            Abhishek
                        </span>
                    </motion.h1>

                    {/* Typewriter */}
                    <div className="h-[40px] sm:h-[50px] mt-4">
                        <h2 className="font-body text-lg sm:text-2xl md:text-3xl text-[var(--color-primary)] font-semibold">
                            <Typewriter
                                words={[
                                    "Full Stack Developer",
                                    "MERN Stack Developer",
                                    "React Developer",
                                    "Creative Frontend Developer",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="font-body mt-6 text-sm sm:text-base md:text-lg text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
                        Passionate about building modern, scalable, and user-friendly web applications
                        with clean UI, smooth animations, and responsive design.
                        I love turning ideas into interactive digital experiences using modern web technologies.
                    </p>

                    <p className="mt-4 text-sm sm:text-base text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
                        Pursued MCA and continuously exploring new technologies,
                        creative interfaces, and high-performance frontend experiences.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-10">

                        <button
                            className="font-body bg-[var(--color-primary)]
                            hover:scale-105 px-5 sm:px-6 py-3 rounded-xl
                            transition duration-300 text-white
                            shadow-lg hover:shadow-[0_0_20px_#6366F1]
                            text-sm sm:text-base"
                        >
                            Hire Me
                        </button>

                        <a
                            href="/Abhishek kushwaha01.pdf"
                            download
                            className="font-body flex items-center gap-2
                            border border-[var(--color-primary)]
                            px-5 sm:px-6 py-3 rounded-xl
                            text-[var(--color-primary)]
                            hover:bg-[var(--color-primary)]
                            hover:text-white
                            transition duration-300
                            text-sm sm:text-base"
                        >
                            <FiDownload />
                            Resume
                        </a>

                    </div>

                </motion.div>

                {/* Floating Icons */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-[15%] left-[5%] sm:left-[10%] text-[var(--color-primary)]"
                >
                    <FaReact className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute bottom-[15%] right-[5%] sm:right-[10%] text-green-400"
                >
                    <FaNodeJs className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                </motion.div>

                <motion.div
                    animate={{ x: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute bottom-[25%] left-[5%] sm:left-[8%] text-green-500"
                >
                    <SiMongodb className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14" />
                </motion.div>

                <motion.div
                    animate={{ x: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-[25%] right-[5%] sm:right-[8%] text-gray-300"
                >
                    <SiExpress className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14" />
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <PiArrowFatLinesDownFill
                    className="w-8 h-8"
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

        </section>
    );
}