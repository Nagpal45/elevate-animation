import "./App.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const firstImageVariants = {
    hidden: {
      scale: 0.2,
      rotate: -360,
      x: -100,
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
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
        scale: {
          duration: 1.5,
          times: [0, 0.4, 0.7, 0.9, 1],
          keyframes: [0.2, 0.5, 0.8, 1.1, 1], 
          ease: [0.2, 0.65, 0.3, 0.9],
        },
        rotate: {
          duration: 1.5,
          ease: "easeOut",
        },
        x: {
          duration: 1.2,
          ease: [0.17, 0.67, 0.83, 0.97],
        },
        y: {
          duration: 1.2,
          ease: [0.17, 0.67, 0.83, 0.97],
        }
      }
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-black flex-col">
      <div className="relative w-[200px] h-[200px] flex items-center justify-center">
        <svg
          width="200"
          height="200"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <rect width="300" height="300" fill="black" />
        </svg>
        
        <motion.svg
          width="200"
          height="200"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={firstImageVariants}
          style={{ originX: 0.5, originY: 0.5 }}
          className="absolute"
        >
          <rect x="50" y="50" width="200" height="200" fill="white" />
          <circle cx="50" cy="50" r="100" fill="black" />
          <circle cx="250" cy="50" r="100" fill="black" />
          <circle cx="50" cy="250" r="100" fill="black" />
          <circle cx="250" cy="250" r="100" fill="black" />
        </motion.svg>
      </div>

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
              <stop offset="0%" stopColor="black">
                <animate
                  attributeName="offset"
                  from="0"
                  to="1"
                  dur="1s"
                  begin="0s"
                  fill="freeze"
                  repeatCount="1"
                />
              </stop>
            </linearGradient>
            <linearGradient id="path-fill-gradient" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" />
              <stop offset="0%" stopColor="white">
                <animate
                  attributeName="offset"
                  from="0"
                  to="1"
                  dur="1.5s"
                  begin="0.5s"
                  fill="freeze"
                  repeatCount="1"
                />
              </stop>
              <stop offset="0%" stopColor="black">
                <animate
                  attributeName="offset"
                  from="0"
                  to="1"
                  dur="2s"
                  begin="0s"
                  fill="freeze"
                  repeatCount="1"
                />
              </stop>
            </linearGradient>
            <mask id="cut-off-mask">
              <rect width="300" height="150" fill="black" />
              <rect x="75" y="0" width="150" height="75" fill="white" />
            </mask>
          </defs>
          <rect width="300" height="150" fill="black" />

          <g transform="rotate(180, 150, 75)" mask="url(#cut-off-mask)">
            <path d="M 0 0 L 300 0 L 150 150 Z" fill="url(#path-fill-gradient)" />
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
      <h1 className="ml-[0.7em] tracking-[0.7em] font-semibold mt-4">
        ELEVATE
      </h1>
    </div>
  );
};

export default App;