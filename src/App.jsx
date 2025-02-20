import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NAvbar";
import Hero from "./components/Hero";
import EmailSignup from "./components/EmailSignup";
import Footer from "./components/Footer";
import { HelmetProvider, Helmet } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col items-center">
          <Helmet>
            <title>Social Brand | Grow Your Social Media Presence</title>
            <meta
              name="description"
              content="Transform your brand with expert social media marketing. We help businesses increase engagement, grow followers, and drive real results through strategic content."
            />
            <meta
              property="og:title"
              content="Social Brand | Expert Social Media Marketing Services"
            />
            <meta
              property="og:description"
              content="Transform your brand with expert social media marketing. We help businesses increase engagement and drive real results."
            />

            {/* Organization Schema */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "SocialBrand",
                url: "https://socialbrand.com",
                logo: "https://socialbrand.com/logo.png",
                sameAs: [
                  "https://facebook.com/socialbrand",
                  "https://twitter.com/socialbrand",
                  "https://linkedin.com/company/socialbrand",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+1-555-555-5555",
                  contactType: "customer service",
                },
              })}
            </script>

            {/* Local Business Schema */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "SocialBrand",
                image: "https://socialbrand.com/store-image.jpg",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "123 Marketing St",
                  addressLocality: "San Francisco",
                  addressRegion: "CA",
                  postalCode: "94105",
                  addressCountry: "US",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "789",
                },
              })}
            </script>
          </Helmet>
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
                <Route
                  path="/get-started"
                  element={<div>Get Started Page</div>}
                />
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
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
