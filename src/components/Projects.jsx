import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [

    {
        title: "Resume Analyzer",
        desc: "Bag selling platform with admin panel",
        img: "/images/ranalyzer.png",
        github: "#",
        live: "#",
    },
    {
        title: "IT Ticketing System",
        desc: "Secure password storage with encryption",
        img: "/images/ticketing.png",
        github: "#",
        live: "https://systemm-five.vercel.app/",
    },

    {
        title: "Company Portfolio",
        desc: "Bag selling platform with admin panel",
        img: "/images/cportfolio.png",
        github: "#",
        live: "https://dvplindia.in/",
    },
    {
        title: "Location Tracker",
        desc: "Full stack blog with authentication",
        img: "/images/ltracker.png",
        github: "#",
        live: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="px-6 md:px-20 py-20 ">

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--color-primary)] to-purple-400 bg-clip-text text-transparent"
            >
                My Projects
            </motion.h2>

            {/* Grid */}
            <div className="grid md:grid-cols-4 gap-8">

                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className="group relative rounded-2xl overflow-hidden bg-[var(--color-card)] border border-white/5"
                    >

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={p.img}
                                alt={p.title}
                                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">

                            <a
                                href={p.github}
                                className="p-3 bg-white/10 rounded-full hover:bg-[var(--color-primary)] transition"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href={p.live}
                                target="_blank"
                                className="p-3 bg-white/10 rounded-full hover:bg-[var(--color-primary)] transition"
                            >
                                <FiExternalLink />
                            </a>

                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="font-body text-white/70 text-xl font-semibold">{p.title}</h3>
                            <p className="font-body text-[var(--color-text-secondary)] text-sm mt-2">
                                {p.desc}
                            </p>
                        </div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none"
                            style={{
                                background:
                                    "radial-gradient(circle at top, rgba(99,102,241,0.2), transparent 70%)",
                            }}
                        />

                    </motion.div>
                ))}

            </div>
        </section>
    );
}