import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  // PrivacyPolicy,
  TermsOfService,
  ReturnPolicy,
  ComplianceCertificate,
  FAQ,
} from "./components";

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      {/* Common Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Page Content */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            {/* Home Page - Includes all sections */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Stats />
                  <Business />
                  <Billing />
                  <CardDeal />
                  <Testimonials />
                  <Clients />
                  <CTA />
                </>
              }
            />

            {/* Other Pages - Only show header and footer */}
            {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/compliance-certificate" element={<ComplianceCertificate />} />
            <Route path="/faqs" element={<FAQ />} />

          </Routes>
        </div>
      </div>

      {/* Common Footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
