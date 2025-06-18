import { motion } from "framer-motion";
import planetImage from "../assets/planet-earth.jpg";

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
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${planetImage})` }}
    >
      <h1 className="text-4xl sm:text-5xl text-white font-bold text-center mb-6 drop-shadow-lg">
        Travel Bucket List
      </h1>

      <div className="space-y-3">
        {flyInTexts.map((text, i) => (
          <motion.p
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={flyInVariants}
            className="text-lg sm:text-xl text-white text-center font-medium drop-shadow-md"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

/*

export default function Home() {
  return (
    <div className="min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4 text-white">
        🌍 Travel Bucket List ✈️
      </h1>
      <p className="text-xl text-white">
        Discover countries around the world and track your dream destinations.
      </p>
    </div>
  );
}

*/
