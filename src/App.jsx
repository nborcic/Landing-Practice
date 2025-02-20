import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NAvbar";
import Hero from "./components/Hero";
import EmailSignup from "./components/EmailSignup";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center max-w-[1440px] items-center bg-white">
        {/* Navbar */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1440px]">
            <Navbar />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  {/* Hero Section */}
                  <div className="w-full flex justify-center">
                    <div className="w-full max-w-[1440px]">
                      <Hero />
                    </div>
                  </div>

                  {/* Email Signup Section */}
                  <div className="w-full bg-primary flex justify-center">
                    <div className="w-full max-w-[1440px]">
                      <EmailSignup />
                    </div>
                  </div>
                </main>
              }
            />
            <Route path="/get-started" element={<div>Get Started Page</div>} />
            <Route path="/portfolio" element={<div>Portfolio Page</div>} />
          </Routes>
        </div>

        {/* Footer */}
        <div className="w-full bg-gray-900 flex justify-center">
          <div className="w-full max-w-[1440px]">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
