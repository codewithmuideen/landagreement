import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles.js";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx"; // We'll move the main homepage content here
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import TermsPrivacy from "./pages/TermsPrivacy.jsx";
import DataResidency from "./pages/DataResidency.jsx";
import LandRegistryAccount from "./components/LandRegistryAccount.jsx";
import AdminSalesOpsDashboard from "./components/AdminSalesOpsDashboard.jsx";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/terms" element={<TermsPrivacy />} />
            <Route path="/data" element={<DataResidency />} />
            <Route path="/user" element={<LandRegistryAccount />} />
            <Route path="/admin0" element={<AdminSalesOpsDashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
