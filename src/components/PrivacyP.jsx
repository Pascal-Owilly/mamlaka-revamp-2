import styles, { layout } from "../style";

const PrivacyPolicy = () => (
  <section className={`container ${layout.section}`}>
    <div className={`row ${layout.sectionInfo}`}>
      <div className="col">
        <h2 className={styles.heading2}>
          Privacy Policy
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          At Mamlaka Hub & Spoke, we understand that your privacy is important to you, and we want to be transparent about how we collect, use, and protect your personal information. 
          This privacy policy outlines our practices and procedures for handling your data, and we hope it will help you feel secure when using our services.
        </p>

        <div className={`${styles.paragraph} mt-5`}>
          <h3 className={styles.heading3}>
            <span className="rounded-circle bg-light text-primary p-2 me-2">1</span>
            What Information Do We Collect?
          </h3>
          <p><strong>Contact Information:</strong> Name, email address, phone number</p>
          <p><strong>Financial Information:</strong> Bank account details, transaction history</p>
          <p><strong>Device Information:</strong> IP address, device type, operating system</p>
          <p><strong>Usage Information:</strong> App activity, interactions, preferences</p>
          <p><strong>Location Information:</strong> Geolocation data</p>
          <p><strong>Cookies and Similar Technologies:</strong> As explained in the Cookie section below</p>
        </div>

        <div className={`${styles.paragraph} mt-5`}>
          <h3 className={styles.heading3}>
            <span className="rounded-circle bg-light text-primary p-2 me-2">2</span>
            How Do We Use Your Information?
          </h3>
          <ul>
            <li>Providing and improving our services</li>
            <li>Processing transactions and facilitating payments</li>
            <li>Authenticating and verifying user identity</li>
            <li>Communicating with you and responding to your inquiries</li>
            <li>Personalizing and tailoring the App's content and features</li>
            <li>Analyzing usage patterns, trends, and user preferences</li>
            <li>Enforcing our terms and policies</li>
            <li>Complying with legal obligations</li>
          </ul>
        </div>

        <div className={`${styles.paragraph} mt-5`}>
          <h3 className={styles.heading3}>
            <span className="rounded-circle bg-light text-primary p-2 me-2">3</span>
            Information Sharing
          </h3>
          <p>We may share your personal information with third parties in the following circumstances:</p>
          <ul>
            <li>With your consent or as necessary to fulfill your requests</li>
            <li>With service providers who assist us in operating and managing the App</li>
            <li>With financial institutions and payment processors to process transactions</li>
            <li>When required by law, regulation, legal process, or governmental request</li>
            <li>In connection with a merger, acquisition, or sale of assets</li>
            <li>To protect our rights, property, or safety, or the rights, property, or safety of others</li>
          </ul>
        </div>

        <div className={`${styles.paragraph} mt-5`}>
          <h3 className={styles.heading3}>
            <span className="rounded-circle bg-light text-primary p-2 me-2">4</span>
            Cookie Policy
          </h3>
          <p>We use cookies and similar tracking technologies to enhance your experience on the App. Cookies are small text files that are stored on your device when you access and use the App. We use cookies for the following purposes:</p>
          <ul>
            <li>Authenticating and identifying your device when you use the App</li>
            <li>Remembering your preferences and settings</li>
            <li>Analyzing usage and performance of the App</li>
            <li>Displaying personalized advertisements</li>
            <li>Providing relevant content and recommendations</li>
          </ul>
          <p>You can manage your cookie preferences through the settings of your device or browser. However, please note that disabling cookies may impact your experience and functionality of the App.</p>
        </div>

        <div className={`${styles.paragraph} mt-5`}>
          <h3 className={styles.heading3}>
            <span className="rounded-circle bg-light text-primary p-2 me-2">5</span>
            Data Security
          </h3>
          <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
        </div>
      </div>

      <div className={`col ${layout.sectionImg}`}>
        {/* You can add any related image or leave it blank */}
      </div>
    </div>
  </section>
);

export default PrivacyPolicy;
