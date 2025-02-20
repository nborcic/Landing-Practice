import { Link } from "react-router-dom";

const Footer = () => {
  const blogPosts = [
    { title: "Social Media Strategy Guide", link: "/blog/strategy-guide" },
    { title: "Content Creation Tips", link: "/blog/content-creation" },
    { title: "ROI Measurement Guide", link: "/blog/measure-roi" },
  ];

  const resources = [
    { title: "Case Studies", link: "/resources/case-studies" },
    { title: "Free Templates", link: "/resources/templates" },
    { title: "Industry Reports", link: "/resources/reports" },
  ];

  return (
    <div className="w-screen flex justify-center items-center">
      <footer className="w-full bg-gray-900 text-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-4">SocialBrand</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
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
              <h3 className="text-xl font-bold mb-4">Latest Insights</h3>
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
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link
                      to={resource.link}
                      className="text-gray-400 hover:text-primary"
                    >
                      {resource.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-primary"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-primary"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-400 hover:text-primary"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} SocialBrand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
