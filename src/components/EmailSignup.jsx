import { useState } from "react";
import { motion } from "framer-motion";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //  emailer signup
    setStatus("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-white mb-8">
            Subscribe to our newsletter for the latest updates and insights
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
          {status && <p className="mt-4 text-white">{status}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSignup;
