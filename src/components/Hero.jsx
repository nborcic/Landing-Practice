import { motion } from "framer-motion";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
const Hero = () => {
  const images = [hero1, hero2, hero3, hero4];

  return (
    <div className="relative h-screen w-screen max-w-[1440px]">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Connect. Share. Grow.
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform your social media presence with us
          </motion.p>
          <motion.button
            className="bg-primary hover:bg-primary-dark text-black font-bold py-3 px-8 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
