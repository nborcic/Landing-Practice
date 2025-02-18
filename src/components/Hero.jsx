import { motion } from "framer-motion";
import React from "react";
const Hero = () => {
  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",
  ];

  return (
    <div className="relative h-screen">
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
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full"
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

