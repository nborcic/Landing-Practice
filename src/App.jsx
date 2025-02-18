import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EmailSignup from "./components/EmailSignup";

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
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
