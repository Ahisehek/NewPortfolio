// import { motion } from "framer-motion";

// const education = [
//     {
//         year: "2023 - 2025",
//         title: "Master of Computer Applications (MCA)",
//         desc: "Currently pursuing MCA with focus on full stack development.",
//     },
//     {
//         year: "2020 - 2023",
//         title: "Bachelor's Degree",
//         desc: "Completed graduation with strong foundation in computer science.",
//     },
//     {
//         year: "2018 - 2020",
//         title: "Higher Secondary",
//         desc: "Completed 12th with science stream.",
//     },
// ];

// export default function Education() {
//     return (
//         <section
//             id="education"
//             className="px-6 md:px-20 py-20 "
//         >
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 bg-gradient-to-r from-[var(--color-primary)] to-purple-400 bg-clip-text text-transparent">
//                 Education
//             </h2>

//             <div className="relative max-w-4xl mx-auto">

//                 {/* Center Line */}
//                 <div className="absolute left-1/2 top-0 w-[2px] h-full bg-[var(--color-border)] transform -translate-x-1/2"></div>

//                 {education.map((item, i) => {
//                     const isLeft = i % 2 === 0;

//                     return (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6, delay: i * 0.2 }}
//                             className="mb-12   flex justify-between items-center w-full"
//                         >

//                             {/* LEFT SIDE */}
//                             <div className={`w-[45%] ${isLeft ? "block" : "hidden md:block"}`}>
//                                 {isLeft && (
//                                     <div className="bg-[var(--color-card)] p-5 rounded-xl border border-white/5 shadow-lg">
//                                         <h3 className="text-white font-body font-semibold">{item.title}</h3>
//                                         <span className="text-sm text-[var(--color-primary)]">
//                                             {item.year}
//                                         </span>
//                                         <p className="font-body text-sm text-[var(--color-text-secondary)] mt-2">
//                                             {item.desc}
//                                         </p>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* CENTER DOT */}
//                             <div className="relative z-10  max-sm:ml-49">
//                                 <div className="w-5 h-5 bg-[var(--color-primary)] rounded-full border-4 border-[var(--color-bg)] shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
//                             </div>

//                             {/* RIGHT SIDE */}
//                             <div className={`w-[45%] ${!isLeft ? "block" : "hidden md:block"}`}>
//                                 {!isLeft && (
//                                     <div className="bg-[var(--color-card)] p-5 rounded-xl border border-white/5 shadow-lg">
//                                         <h3 className="font-body text-white font-semibold">{item.title}</h3>
//                                         <span className="text-sm text-[var(--color-primary)]">
//                                             {item.year}
//                                         </span>
//                                         <p className="font-body  text-sm text-[var(--color-text-secondary)] mt-2">
//                                             {item.desc}
//                                         </p>
//                                     </div>
//                                 )}
//                             </div>

//                         </motion.div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }




import { motion } from "framer-motion";

const education = [
    {
        year: "2023 - 2025",
        title: "Master of Computer Applications (MCA)",
        desc: "focus on full stack development.",
    },
    {
        year: "2020 - 2023",
        title: "Bachelor's Degree",
        desc: "strong foundation in computer science.",
    },
    {
        year: "2018 - 2020",
        title: "Higher Secondary",
        desc: "science stream.",
    },
];

export default function Education() {
    return (
        <section id="education" className="px-4 md:px-20 py-20">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 
      bg-gradient-to-r from-[var(--color-primary)] to-purple-400 
      bg-clip-text text-transparent font-heading">
                Education
            </h2>

            <div className="relative max-w-5xl mx-auto">

                {/* Vertical Line */}
                <div className="max-sm:hidden absolute left-4 md:left-1/2 top-0 w-[2px] h-full 
        bg-[var(--color-border)] md:-translate-x-1/2"></div>



                {education.map((item, i) => {
                    const isLeft = i % 2 === 0;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="mb-12 flex flex-col md:flex-row items-start md:items-center"
                        >

                            {/* Left side */}
                            <div
                                className={`w-full md:w-1/2 ${isLeft ? "md:pr-10 md:text-right" : "md:order-2 md:pl-10"
                                    }`}
                            >
                                <div className="bg-[var(--color-card)] p-5 rounded-xl 
                border border-white/5 shadow-lg">
                                    <h3 className="text-white font-semibold">{item.title}</h3>
                                    <span className="text-sm text-[var(--color-primary)]">
                                        {item.year}
                                    </span>
                                    <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Center Dot (static for each item) */}
                            <div className="max-sm:hidden absolute left-4 md:left-1/2 -translate-x-1/2">
                                <div className="w-5 h-5 bg-[var(--color-primary)] rounded-full 
                border-4 border-[var(--color-bg)] shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                            </div>

                            {/* Empty spacer for right */}
                            <div className="hidden md:block md:w-1/2"></div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}