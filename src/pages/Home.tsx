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
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col px-4"
      style={{ backgroundImage: `url(${planetImage})` }}
    >
      {/* Title near top */}
      <div className="pt-12 text-center">
        <h1 className="text-5xl sm:text-6xl text-white font-bold drop-shadow-xl">
          Travel Bucket List
        </h1>
      </div>

      {/* Flying text centered */}
      <div className="flex-1 flex flex-col justify-center items-center space-y-6">
        {flyInTexts.map((text, i) => (
          <motion.p
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={flyInVariants}
            className="text-2xl sm:text-3xl text-white text-center font-semibold drop-shadow-lg"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
