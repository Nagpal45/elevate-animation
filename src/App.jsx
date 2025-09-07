import "./App.css";
import { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [key, setKey] = useState(0);

  const resetAnimation = () => {
    setKey((prev) => prev + 1);
  };

  const firstImageVariants = {
    hidden: {
      scale: 0.2,
      rotate: 0,
      x: -200,
      y: -50,
      opacity: 0.7,
    },
    visible: {
      scale: 1,
      rotate: 180,
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        scale: {
          duration: 1.5,
          times: [0, 0.7, 1],
          values: [0.2, 0.7, 1],
        },
        rotate: {
          duration: 1,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-black flex-col relative">
      <button
        onClick={resetAnimation}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md transition-colors z-10"
      >
        Replay Animation
      </button>

      <AnimationContent key={key} firstImageVariants={firstImageVariants} />
    </div>
  );
};

const AnimationContent = ({ firstImageVariants }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
    >
      <motion.div
        className="h-[180px] overflow-hidden flex justify-center items-end bg-transparent"
        initial="hidden"
        animate="visible"
        variants={firstImageVariants}
        style={{ originX: 0.5, originY: 0.5 }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="50" y="50" width="200" height="200" fill="white" />
          <circle cx="50" cy="50" r="100" fill="black" />
          <circle cx="250" cy="50" r="100" fill="black" />
          <circle cx="50" cy="250" r="100" fill="black" />
          <circle cx="250" cy="250" r="100" fill="black" />
        </svg>
      </motion.div>

      <div className="h-[150px] overflow-hidden flex justify-center items-end">
        <svg
          width="500"
          height="300"
          viewBox="0 0 300 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="stroke-gradient" x1="0" y1="0.5" x2="0" y2="1.5">
              <stop offset="0%" stopColor="white" />
              <motion.stop
                offset="0%"
                stopColor="black"
                animate={{ offset: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </linearGradient>
            <linearGradient
              id="line-gradient"
              x1="225"
              y1="75"
              x2="75"
              y2="75"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" offset="0" />
              <motion.stop
                stopColor="white"
                initial={{ offset: 0 }}
                animate={{ offset: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              <motion.stop
                stopColor="black"
                initial={{ offset: 0 }}
                animate={{ offset: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </linearGradient>
            <linearGradient id="path-fill-gradient" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" />
              <motion.stop
                stopColor="white"
                initial={{ offset: 0 }}
                animate={{ offset: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <motion.stop
                offset="0%"
                stopColor="black"
                animate={{ offset: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </linearGradient>

            <mask id="cut-off-mask">
              <rect width="300" height="150" fill="black" />
              <rect x="75" y="0" width="150" height="75" fill="white" />
            </mask>
          </defs>
          <rect width="300" height="150" fill="black" />

          <g
            transform="rotate(180, 150, 75)"
            mask="url(#cut-off-mask)"
          >
            <path
              d="M 0 0 L 300 0 L 150 150 Z"
              fill="url(#path-fill-gradient)"
            />
            <circle
              cx="75"
              cy="0"
              r="75"
              fill="black"
              stroke="url(#stroke-gradient)"
              strokeWidth="0.5"
            />
            <circle
              cx="225"
              cy="0"
              r="75"
              fill="black"
              stroke="url(#stroke-gradient)"
              strokeWidth="0.5"
            />
            <line
              x1="75"
              y1="75"
              x2="225"
              y2="75"
              stroke="white"
              strokeWidth="1"
            />
            <rect y="75" width="300" height="75" fill="black" />
          </g>
        </svg>
      </div>
      <motion.h1
        className="ml-[0.7em] tracking-[0.7em] font-semibold mt-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
      >
        ELEVATE
      </motion.h1>
    </motion.div>
  );
};

export default App;