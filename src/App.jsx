import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Star from "./components/Star";
import GeometricShape from "./components/GeometricShape";

const animationVariants = {
  container: {
    initial: { y: 50, opacity: 1 },
    animate: {
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 1,
      },
    },
    hide: {
      opacity: 0,
      transition: { duration: 1 },
    },
  },
  firstImage: {
    initial: {
      scale: 0.2,
      rotate: 0,
      x: -200,
      y: -50,
      opacity: 0.7,
    },
    animate: {
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
  },
  gradientStop1: {
    initial: { offset: "0%" },
    animate: {
      offset: "100%",
      transition: { duration: 1 },
    },
  },
  gradientStop2: {
    initial: { offset: 0 },
    animate: {
      offset: 1,
      transition: { duration: 0.5 },
    },
  },
  gradientStop3: {
    initial: { offset: 0 },
    animate: {
      offset: 1,
      transition: { duration: 3 },
    },
  },
  gradientStop4: {
    initial: { offset: "0%" },
    animate: {
      offset: "100%",
      transition: { duration: 2 },
    },
  },
  heading: {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 1,
        ease: "easeOut",
      },
    },
  },
};

const App = () => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const playAnimation = async () => {
    if (isPlaying) return;

    try {
      setIsPlaying(true);
      controls.set("initial");
      await controls.start("animate");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await controls.start("hide");
    } finally {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    playAnimation();
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center bg-black flex-col relative text-white">
      <button
        onClick={playAnimation}
        disabled={isPlaying}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPlaying ? "Playing..." : "Replay Animation"}
      </button>

      <motion.div
        className="flex flex-col items-center"
        variants={animationVariants.container}
        initial="initial"
        animate={controls}
      >
        <Star animationVariants={animationVariants} />

        <GeometricShape animationVariants={animationVariants} />

        <motion.h1
          className="ml-[0.7em] tracking-[0.7em] font-semibold mt-4"
          variants={animationVariants.heading}
        >
          ELEVATE
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default App;
