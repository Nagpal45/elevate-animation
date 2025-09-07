import { motion } from "framer-motion";

const GeometricShape = ({
    animationVariants
}) => {
  return (
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
              variants={animationVariants.gradientStop1}
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
              variants={animationVariants.gradientStop2}
            />
            <motion.stop
              stopColor="black"
              variants={animationVariants.gradientStop2}
            />
          </linearGradient>
          <linearGradient id="path-fill-gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" />
            <motion.stop
              stopColor="white"
              variants={animationVariants.gradientStop3}
            />
            <motion.stop
              offset="0%"
              stopColor="black"
              variants={animationVariants.gradientStop4}
            />
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
            stroke="url(#line-gradient)"
            strokeWidth="1"
          />
          <rect y="75" width="300" height="75" fill="black" />
        </g>
      </svg>
    </div>
  );
};

export default GeometricShape;
