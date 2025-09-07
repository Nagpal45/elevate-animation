import { motion } from "framer-motion";

const Star = ({animationVariants}) => {
  return (
    <motion.div
      className="h-[180px] overflow-hidden flex justify-center items-end bg-transparent"
      variants={animationVariants.firstImage}
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="50" y="50" width="200" height="200" fill="currentColor" />
        <circle cx="50" cy="50" r="100" fill="black" />
        <circle cx="250" cy="50" r="100" fill="black" />
        <circle cx="50" cy="250" r="100" fill="black" />
        <circle cx="250" cy="250" r="100" fill="black" />
      </svg>
    </motion.div>
  );
};

export default Star;
