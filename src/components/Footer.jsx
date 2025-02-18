import { Link } from "react-router-dom";

const Footer = () => {
  const blogPosts = [
    { title: "Top 10 Social Media Trends", link: "/blog/trends" },
    { title: "Maximizing Your Online Presence", link: "/blog/online-presence" },
    { title: "Building Your Brand Identity", link: "/blog/brand-identity" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">SocialBrand</h3>
          <p className="text-gray-400 mb-4">
            Transforming social media presence for businesses worldwide.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Latest Blog Posts</h4>
          <ul className="space-y-2">
            {blogPosts.map((post, index) => (
              <li key={index}>
                <Link
                  to={post.link}
                  className="text-gray-400 hover:text-primary"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-gray-400 hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-400 hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-gray-400 hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 mt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} SocialBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
