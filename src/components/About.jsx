import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="px-6 md:px-20 py-20   text-[var(--color-text)]">


            <div className="flex justify-center items-center">

                {/* LEFT IMAGE */}
                {/* <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <img
                        src="/profile.png"
                        alt="profile"
                        className="w-72 h-72 object-cover rounded-2xl border-4 border-[var(--color-primary)]"
                    />
                </motion.div> */}

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center items-center"
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                        About Me
                    </h2>

                    <p className="font-body  text-[var(--color-text-secondary)] text-center text-2xl mb-6">
                        I'm a passionate Full Stack Developer.<br />
                        completed MCA from Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V) Bhopal, MP.
                        <br />

                        I love building modern web applications with clean UI and <br />
                        scalable backend systems using MERN stack.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-6">

                        <div className="font-body bg-[var(--color-card)] p-4 rounded-xl text-center">
                            <h3 className="text-xl font-bold text-[var(--color-primary)]">
                                4+
                            </h3>
                            <p className="font-body text-sm">Projects</p>
                        </div>

                        {/* <div className="bg-[var(--color-card)] p-4 rounded-xl text-center">
                            <h3 className="font-body text-xl font-bold text-[var(--color-primary)]">
                                MCA
                            </h3>
                            <p className="font-body text-sm">Student</p>
                        </div> */}

                        <div className="bg-[var(--color-card)] p-4 rounded-xl text-center">
                            <h3 className="font-body text-xl font-bold text-[var(--color-primary)]">
                                MERN
                            </h3>
                            <p className="font-body text-sm">Stack</p>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}