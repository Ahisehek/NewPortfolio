import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Foot() {
    return (
        <footer className="border-t border-white/10 bg-[var(--color-bg)]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-4">

                <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-4 text-sm">

                    {/* Left */}
                    <p className="text-[var(--color-text-secondary)] text-center sm:text-left whitespace-nowrap">
                        © {new Date().getFullYear()} Abhishek
                    </p>

                    {/* Center Links */}
                    <div className="flex flex-wrap text-[var(--color-text-secondary)] justify-center gap-x-6 gap-y-2">
                        <a href="#home" className="hover:text-[var(--color-primary)] transition">
                            Home
                        </a>
                        <a href="#about" className="hover:text-[var(--color-primary)] transition">
                            About
                        </a>
                        <a href="#projects" className="hover:text-[var(--color-primary)] transition">
                            Projects
                        </a>
                        <a href="#contact" className="hover:text-[var(--color-primary)] transition">
                            Contact
                        </a>
                    </div>

                    {/* Right Icons */}
                    <div className="flex gap-4 text-[var(--color-text-secondary)] text-lg">
                        <a href="#" className="hover:text-[var(--color-primary)] transition">
                            <FaGithub />
                        </a>
                        <a href="#" className="hover:text-[var(--color-primary)] transition">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="hover:text-[var(--color-primary)] transition">
                            <FaTwitter />
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
}