import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateEmail(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay
      setStatus({
        type: "success",
        message:
          "Thank you for subscribing! Check your email for confirmation.",
      });
      setEmail("");
    } catch (error) {
      setStatus({
        type: "error" + error,
        message: "Something went wrong. Please try again later.",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="py-60 w-screen flex justify-center bg-gradient-to-b from-primary to-primary-dark">
      <div className="w-full max-w-[1440px] px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-black mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Stay Ahead of the Curve
          </motion.h2>
          <motion.p
            className="text-lg text-black/90 mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Subscribe to our newsletter for exclusive social media insights,
            trends, and expert tips delivered straight to your inbox.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status.type) setStatus({ type: "", message: "" });
                }}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg text-gray-700 pr-36"
                disabled={isLoading}
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1.5 px-8 py-2.5 bg-white hover:bg-white/90 text-primary font-bold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px] transform hover:scale-105 hover:shadow-xl shadow-md"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
                  />
                ) : (
                  <span className="text-primary font-bold">Subscribe</span>
                )}
              </button>
            </div>
          </motion.form>

          <AnimatePresence mode="wait">
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-4 px-4 py-2 rounded-lg inline-block ${
                  status.type === "error"
                    ? "bg-red-500/10 text-red-100"
                    : "bg-green-500/10 text-green-100"
                }`}
              >
                <p className="flex items-center gap-2">
                  {status.type === "error" ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                  <span className="text-black">{status.message}</span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-8 text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-white font-medium">Weekly Updates</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-white font-medium">No Spam</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmailSignup;
