import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../style";

const onboardingSteps = [
  "Initial consultation",
  "Document Submission",
  "Risk Assessment",
  "Account Setup",
  "Service Customization",
  "Transaction Support",
  "Ongoing Mentoring and Updates",
];

const CardDeal = () => (
  <div className="card jumbotron my-5" style={{ background: '#402a6f', color: 'white', padding: '10px', borderRadius: '10px', margin: '20px' }}>
    <div className="row">
      {/* Onboarding Title Section */}
      <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
        <div className="card p-4" style={{ background: '#6a2b89', borderRadius: '10px', padding:'30px' }}>
          <div className="card-body text-center">
            <h3 style={{color:'white'}} className={styles.heading2}>Onboarding Process</h3>
          </div>
        </div>
      </div>

      {/* Description Section with Steps */}
      <div className="col-12 col-md-7 d-flex justify-content-center align-items-start">
        <div className="text-center">
          {onboardingSteps.map((step, index) => (
            <div key={index} className="d-flex align-items-center mb-3">
              <div
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: '30px',
                  height: '30px',
                  background: '#fff',
                  color: '#6a2b89',
                  marginRight: '10px',
                  fontWeight: 'bold',
                }}
              >
                {index + 1}
              </div>
              <div
                className="border border-white p-2 rounded"
                style={{ background: '#6a2b89', width: '100%', color: '#fff' }}
              >
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CardDeal;
