import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      alt: "Social Media Marketing",
      title: "Marketing Strategy",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      alt: "Content Creation",
      title: "Content Creation",
    },
    {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      alt: "Analytics Dashboard",
      title: "Data Analytics",
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      alt: "Team Collaboration",
      title: "Team Success",
    },
  ];

  return (
    <div className=" w-full max-w-[1440px] h-screen">
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Social Media Presence
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect with your audience, share your story, and grow your brand
            with our expert social media solutions
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/get-started"
              className="bg-primary bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:bg-primary-dark text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get Started Now
            </Link>
            <Link
              to="/portfolio"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-white rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
