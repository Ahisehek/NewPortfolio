import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="px-6 md:px-20 py-20 ">

            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT INFO */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className=" font-heading text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-purple-400 bg-clip-text text-transparent">
                        Let's Work Together
                    </h2>

                    <p className="text-[var(--color-text-secondary)] mb-6">
                        I'm open to freelance projects, internships, and full-time roles.
                        Feel free to reach out!
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-[var(--color-primary)]" />
                            <span className="text-[var(--color-primary)]">kushwahaasbhishek839@gmail.com</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6 text-xl">
                        <a
                            href="#"
                            className="p-3 bg-gradient-to-r from-[var(--color-primary)] to-purple-400  rounded-full hover:bg-[var(--color-primary)] transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="#"
                            className="p-3 bg-gradient-to-r from-[var(--color-primary)] to-purple-400  rounded-full hover:bg-[var(--color-primary)] transition"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT FORM */}
                <motion.form
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[var(--color-card)] p-8 rounded-2xl border text-[var(--color-text-secondary)] border-white/5 space-y-4"
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg bg-transparent border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)]"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg bg-transparent border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)]"
                    />

                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full p-3 rounded-lg bg-transparent border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)]"
                    />

                    <button className="w-full bg-[var(--color-primary)] py-3 rounded-lg hover:scale-[1.02] transition">
                        Send Message
                    </button>
                </motion.form>

            </div>
        </section>
    );
}