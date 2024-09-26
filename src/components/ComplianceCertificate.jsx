import styles, { layout } from "../style";

const ComplianceCertifications = () => (
  <section className={`container ${layout.section}`}>
    <div className={`row ${layout.sectionInfo}`}>
      <div className="col">
        <h3 className={styles.heading3}>Industry Certifications</h3>
        <p className={`${styles.paragraph}`}>
          MHS is committed to maintaining the highest standards of industry compliance. Our certifications include:
        </p>
        <ul className={`${styles.paragraph} mt-4`}>
          <li>
            <img 
              src="https://imgs.search.brave.com/mSUMD1SxX1cXqH8QtSC9avoIGqGT3XMu4MSrZh4wQuc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0kvaXNvLTI3/MDAxLWJ1cmVhdS12/ZXJpdGFzLWNlcnRp/ZmljYXRpb24tbG9n/by0yNUU4Qzc1NEI1/LXNlZWtsb2dvLmNv/bS5wbmc" 
              alt="ISO 27001 Certification" 
              className="me-2" 
              style={{ width: '50px', height: '50px', verticalAlign: 'middle' }} 
            />
            ISO 27001 – Information Security Management
          </li>
          <li>
            <img 
              src="https://imgs.search.brave.com/nwerPH8iLTzhQ8zp7AGYVgM4IOZ0J7RkKIm_nDJsl-w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWMt/Y2RuLmF0bGFzc2lh/bi5jb20vZGFtL2pj/cjo5MWRiZDFhMi03/NjZmLTQ4NDktODlh/ZC1mOWFiNWMwZDY5/ZTYvcGNpLWRzc18y/NTB4MjUwLnBuZz9j/ZG5WZXJzaW9uPTIx/OTM" 
              alt="PCI DSS Certification" 
              className="me-2" 
              style={{ width: '50px', height: '50px', verticalAlign: 'middle' }} 
            />
            PCI DSS – Payment Card Industry Data Security Standard
          </li>
          <li>
            <img 
              src="https://imgs.search.brave.com/Yqt7hQ6fcvp4ciLVSDzywxSZ7KTIwXcEru2jrXs-dg0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFsbGFtaW50ZXJu/ZXQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzExL0dE/UFItNjQweDI0MC5w/bmc" 
              alt="GDPR Compliance" 
              className="me-2" 
              style={{ width: '50px', height: '50px', verticalAlign: 'middle' }} 
            />
            GDPR Compliance – General Data Protection Regulation
          </li>
        </ul>
      </div>

      <div className={`col ${layout.sectionImg}`}>
        {/* Optional: Add any relevant images or leave blank */}
      </div>
    </div>
  </section>
);

export default ComplianceCertifications;
