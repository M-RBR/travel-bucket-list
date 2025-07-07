/*

import { motion } from "framer-motion";
import { Link } from "react-router";
import planetImage from "../assets/planet-earth11.jpg";

export default function Home() {
  const flyInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 2.0,
        duration: 1.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const flyInTexts = [
    "Explore Countries.",
    "Add them to your bucket list.",
    "Connect with other travellers.",
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col px-4"
      style={{ backgroundImage: `url(${planetImage})` }}
    >
      <div className="pt-10 sm:pt-12 text-center">
        <h1 className="text-4xl sm:text-6xl text-white font-bold drop-shadow-xl">
          Travel Bucket List
        </h1>
      </div>

      <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6 px-2 flex flex-col items-center">
        {flyInTexts.map((text, i) => (
          <motion.p
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={flyInVariants}
            className="text-2xl sm:text-4xl text-white text-center font-semibold drop-shadow-lg italic"
          >
            {text}
          </motion.p>
        ))}

        <motion.div
          custom={flyInTexts.length}
          initial="hidden"
          animate="visible"
          variants={flyInVariants}
        >
          <Link
            to="/explore"
            className="mt-4 inline-flex items-center text-white font-semibold text-lg sm:text-xl px-6 py-3 rounded-md shadow transition
             bg-gradient-to-b from-blue-850 to-blue-800
             hover:from-blue-800 hover:to-blue-700
             active:ring-3 active:ring-yellow-400 active:ring-offset-2
             focus:outline-none"
          >
            Start Exploring
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

*/

import { motion } from "framer-motion";
import { Link } from "react-router";
import planetImage from "../assets/planet-earth11.jpg";

export default function Home() {
  const flyInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 2.0,
        duration: 1.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const flyInTexts = [
    "Explore Countries.",
    "Add them to your bucket list.",
    "Connect with other travellers.",
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col px-4"
      style={{ backgroundImage: `url(${planetImage})` }}
    >
      <div className="pt-10 sm:pt-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-4xl sm:text-6xl font-bold text-blue-50 drop-shadow-2xl pb-2 inline-block mx-auto"
        >
          Travel Bucket List
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-300 via-blue-200 to-transparent rounded-full"></span>
        </motion.h1>
      </div>

      <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6 px-2 flex flex-col items-center">
        {flyInTexts.map((text, i) => (
          <motion.p
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={flyInVariants}
            className={`text-2xl sm:text-3xl text-center font-medium italic drop-shadow-lg
                       ${
                         i === 0
                           ? "text-blue-100"
                           : i === 1
                           ? "text-blue-50"
                           : "text-blue-50"
                       }`}
          >
            {text}
          </motion.p>
        ))}

        <motion.div
          custom={flyInTexts.length}
          initial="hidden"
          animate="visible"
          variants={flyInVariants}
        >
          <Link
            to="/explore"
            className="mt-4 inline-flex items-center text-white font-semibold text-lg sm:text-xl px-6 py-3 rounded-md shadow transition
                       bg-gradient-to-b from-blue-950 to-blue-900
                       hover:from-blue-900 hover:to-blue-800
                       active:ring-3 active:ring-yellow-400 active:ring-offset-2
                       focus:outline-none"
          >
            Start Exploring
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
