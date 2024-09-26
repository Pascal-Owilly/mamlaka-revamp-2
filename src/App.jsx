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
  PrivacyP,
  TermsOfService,
  ReturnPolicy,
  ComplianceCertificate,
  FAQ,
  PaymentProcessing,
  MultiplePaymentOptions,
  OnboardingProcess,
  Solutions,
  AboutUs,
  ContactUs,
  DownloadApps,
} from "./components";

const App = () => (

  <Router>
    <div className="bg-white w-full overflow-hidden">
      {/* Common Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Page Content */}
      <div className={`bg-white ${styles.flexStart}`}>
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
                  <Clients />
                  <CardDeal />
                  <Billing />
                  <PaymentProcessing />
                  <MultiplePaymentOptions />
                  <OnboardingProcess />
                  <DownloadApps />
                  {/* <CTA /> */}
                  {/* <Testimonials /> */}
                </>
              }
            />

            <Route path="/privacy-policy" element={<PrivacyP />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/compliance-certificate" element={<ComplianceCertificate />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />



          </Routes>
        </div>
      </div>

      {/* Common Footer */}
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
