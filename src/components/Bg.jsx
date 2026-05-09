import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Bg() {
    const [grid, setGrid] = useState({ rows: 20, cols: 30 });

    useEffect(() => {
        const updateGrid = () => {
            const width = window.innerWidth;

            if (width < 640) {
                setGrid({ rows: 30, cols: 10 });   // 📱 mobile
            } else if (width < 1024) {
                setGrid({ rows: 20, cols: 20 });  // 💻 tablet
            } else {
                setGrid({ rows: 50, cols: 36 });  // 🖥 desktop
            }
        };

        updateGrid();
        window.addEventListener("resize", updateGrid);
        return () => window.removeEventListener("resize", updateGrid);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 bg-[var(--color-bg)] overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-[var(--color-primary)]/20 blur-[120px] top-[-100px] left-[-100px]" />

            <div className="absolute w-[220px] sm:w-[300px] md:w-[400px] h-[220px] sm:h-[300px] md:h-[400px] bg-purple-500/20 blur-[120px] bottom-[-100px] right-[-100px]" />

            {Array.from({ length: grid.rows }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex gap-4">

                    {Array.from({ length: grid.cols }).map((_, colIndex) => (
                        <motion.div
                            key={colIndex}
                            className="h-[3px] w-[3px] rounded-full bg-[#6568ed] shadow-[0_0_6px_#6366F1] m-4"

                        />
                    ))}

                </div>
            ))}

        </div>
    );
}

export default Bg;