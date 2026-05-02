import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#22C55E" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
    { name: "Express", icon: <SiExpress />, color: "#A8A8A8" },
    { name: "JavaScript", icon: <FaJs />, color: "#FACC15" },
    { name: "HTML", icon: <FaHtml5 />, color: "#F97316" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#3B82F6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
];

export default function Skills() {
    return (
        <section id="skills" className="px-6 md:px-20 py-20 ">

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--color-primary)] to-purple-400 bg-clip-text text-transparent"
            >
                Technologies I Work With
            </motion.h2>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-8 gap-6">

                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.08 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative p-6 rounded-2xl bg-[var(--color-card)] border border-white/5 backdrop-blur-md text-center overflow-hidden"
                    >

                        {/* Glow Effect */}
                        <div
                            className="absolute inset-0 opacity-0 hover:opacity-100 transition"
                            style={{
                                background: `radial-gradient(circle at top, ${skill.color}20, transparent 70%)`,
                            }}
                        />

                        {/* Icon */}
                        <div
                            className="text-4xl mb-3 flex justify-center"
                            style={{ color: skill.color }}
                        >
                            {skill.icon}
                        </div>

                        {/* Name */}
                        <p className="font-body  font-medium"
                            style={{ color: skill.color }}

                        >{skill.name}</p>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}