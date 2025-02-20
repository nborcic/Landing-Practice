import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    {
      src: "src/assets/social-media-marketing-strategy.webp",
      alt: "Professional team analyzing social media marketing metrics on large screen",
      title: "Marketing Strategy",
      loading: "eager",
    },
    {
      src: "src/assets/content-creation-workspace.webp",
      alt: "Creative content team collaborating on digital content creation",
      title: "Content Creation",
      loading: "lazy",
    },
    {
      src: "src/assets/data-analytics-dashboard.jpg",
      alt: "Interactive analytics dashboard showing social media performance metrics",
      title: "Data Analytics",
      loading: "lazy",
    },
    {
      src: "src/assets/team-collaboration-meeting.jpg",
      alt: "Diverse team members collaborating in modern office environment",
      title: "Team Success",
      loading: "lazy",
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
              loading={image.loading}
              width="800"
              height="600"
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
              className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg backdrop-blur-sm hover:backdrop-blur-xl min-w-[200px] text-center"
            >
              Get Started Now
            </Link>
            <Link
              to="/portfolio"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all  duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg backdrop-blur-sm hover:backdrop-blur-xl min-w-[200px] text-center"
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
