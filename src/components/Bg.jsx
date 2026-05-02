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

            {Array.from({ length: grid.rows }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex gap-4">

                    {Array.from({ length: grid.cols }).map((_, colIndex) => (
                        <motion.div
                            key={colIndex}
                            className="h-[3px] w-[3px] rounded-full bg-[#6366F1] shadow-[0_0_6px_#6366F1] m-4"

                        // animate={{
                        //     opacity: [0.2, 1, 0.2],
                        //     scale: [1, 1.4, 1],
                        // }}

                        // transition={{
                        //     duration: 2 + Math.random() * 2,
                        //     repeat: Infinity,
                        //     delay: (rowIndex + colIndex) * 0.03,
                        // }}
                        />
                    ))}

                </div>
            ))}

        </div>
    );
}

export default Bg;