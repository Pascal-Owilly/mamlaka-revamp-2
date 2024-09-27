import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../style";

const CardDeal = () => (
  <div className="container-fluid my-5 mt-5" style={{ padding: '10px' }}>

    <div className="row">
      {/* Description Section */}
      <div className="col-12 col-md-8 mb-4 d-flex justify-content-left">
        <div
          style={{
            background: '#222b5b', // Card background color
            color: 'white', // Change text color to ensure readability
            padding: '50px',
            borderRadius: '10px',
            width: '100%', // Ensure it takes the full width of the parent
            maxWidth: '' // Optional: limit max width for better layout
          }}
        >
      <h1 className="flex-1 font-bitter font-semibold ss:text-[24px] text-[30px] ss:leading-[100.8px] leading-[48px]">
      Tap into our embedded trade <br />
      payment options
      </h1>

<p
  className="mt-2 font-bold text-lg font-bitter text-white p-2 rounded shadow-md"
  style={{ backgroundColor: "#852890" }}
>
  MoMo & Cards Channel
</p>

        </div>
      </div>

      {/* Compass Image Section */}
      <div className="col-12 col-md-4 d-flex justify-content-left align-items-left">
        <div className="position-relative" style={{ width: "450px", height: "450px" }}>
          {/* Circular Path SVG */}
          <div className="position-absolute w-100 h-100">
            <svg viewBox="0 0 100 100" className="w-100 h-100">
              {/* Circular Path */}
              <defs>
                <marker
                  id="arrow"
                  markerWidth="4"
                  markerHeight="4"
                  refX="2"
                  refY="2"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L4,2 L0,4 L1,2 Z" fill="#222b5b" />
                </marker>
              </defs>
              <path
                d="M 50, 10 
                   a 40,40 0 1,1 0,80
                   a 40,40 0 1,1 0,-80"
                fill="transparent"
                stroke="#222b5b"
                strokeWidth="0.5"
                markerEnd="url(#arrow)"
                markerMid="url(#arrow)"
              />
            </svg>
          </div>

          {/* Top Image */}
          <div
            className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "90px",
              height: "90px",
              top: "10%",
              left: "45%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src="https://via.placeholder.com/90" alt="Top Image" className="w-100 h-100 rounded-circle" />
          </div>

          {/* Center Text */}
          <div
            className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "120px",
              height: "120px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h4 style={{ padding: '30px' }}>Merchant Services</h4>
          </div>

          {/* Top-Right Image */}
          <div
            className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "90px",
              height: "90px",
              top: "30%",
              left: "85%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src="https://via.placeholder.com/90" alt="Top Right Image" className="w-100 h-100 rounded-circle" />
          </div>

          {/* Bottom-Right Image */}
          <div
            className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "90px",
              height: "90px",
              bottom: "30%",
              right: "15%",
              transform: "translate(50%, 50%)",
            }}
          >
            <img src="https://via.placeholder.com/90" alt="Bottom Right Image" className="w-100 h-100 rounded-circle" />
          </div>

          {/* Bottom-Left Image */}
          <div
            className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "90px",
              height: "90px",
              bottom: "20%",
              left: "25%",
              transform: "translate(-50%, 50%)",
            }}
          >
            <img src="https://via.placeholder.com/90" alt="Bottom Left Image" className="w-100 h-100 rounded-circle" />
          </div>

          {/* Top-Left Image */}
          <div
            className="position-absolute bg-white border border-dark rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "90px",
              height: "90px",
              top: "40%",
              left: "13%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src="https://via.placeholder.com/90" alt="Top Left Image" className="w-100 h-100 rounded-circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardDeal;
