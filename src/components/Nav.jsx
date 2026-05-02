import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const sections = ["home", "about", "skills", "projects", "education", "contact"];

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);


    //  Scroll logic
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);


            // Active section
            let current = "home";

            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 10
            ) {
                setActive("contact");
                return;
            }

            sections.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const top = section.offsetTop - 120;
                    if (window.scrollY >= top) current = id;
                }
            });

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //  Scroll lock (mobile menu)
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <div className="fixed top-0 w-full z-50 font-heading">



            {/*  Navbar */}
            <div
                className={`flex justify-between items-center transition-all duration-300
        px-4 sm:px-6 md:px-20
        ${scrolled
                        ? "py-2 bg-[var(--color-bg)]/70 backdrop-blur-xl shadow-lg"
                        : "py-4 bg-transparent"
                    }`}
            >
                {/* Logo */}
                <h1 className="text-lg sm:text-xl font-bold font-heading bg-gradient-to-r from-[var(--color-primary)] to-purple-400 bg-clip-text text-transparent">
                    Abhishek
                </h1>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 lg:gap-10">
                    {sections.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className={`capitalize relative text-sm font-medium transition
              ${active === item
                                    ? "text-[var(--color-primary)]"
                                    : "text-[var(--color-text-secondary)] hover:text-white"
                                }`}
                        >
                            {item}

                            {active === item && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--color-primary)] rounded"
                                />
                            )}
                        </a>
                    ))}
                </div>

                {/* Desktop Resume Button */}
                <a
                    href="/Abhishek kushwaha01.pdf"
                    download
                    className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-card)] px-5 py-2.5 rounded-xl text-white text-sm font-medium 
          hover:scale-105 hover:shadow-lg transition"
                >
                    <FiDownload />
                    Resume
                </a>

                {/* Mobile Menu Button */}
                <div
                    className="md:hidden text-2xl cursor-pointer z-50 bg-gradient-to-r from-[var(--color-primary)] to-purple-400 "
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FiX /> : <FiMenu />}
                </div>
            </div>

            {/* Overlay */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
            />

            {/*  Sidebar Menu */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: open ? "0%" : "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-[75%] max-w-[320px] 
        bg-[var(--color-bg)] border-l border-white/10 
        flex flex-col p-8 gap-8 z-50"
            >
                {/* Close Button */}
                <div className="flex justify-end">
                    <FiX
                        className="text-2xl cursor-pointer"
                        onClick={() => setOpen(false)}
                    />
                </div>

                {/* Links */}
                <div className="flex flex-col gap-6 text-lg">
                    {sections.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => setOpen(false)}
                            className={`capitalize transition ${active === item
                                ? "text-[var(--color-primary)]"
                                : "text-white"
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Resume Button */}
                <a
                    href="/Abhishek kushwaha01.pdf"
                    download
                    className="mt-auto flex items-center justify-center gap-2 
          bg-[var(--color-primary)] px-6 py-3 rounded-xl text-white font-medium"
                >
                    <FiDownload />
                    Resume
                </a>
            </motion.div>
        </div>
    );
}