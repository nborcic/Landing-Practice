import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EmailSignup from "./components/EmailSignup";

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col max-w-[1440vw] justify-start items-center ">
        <Navbar />
        <main>
          <Hero />
          <EmailSignup />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
