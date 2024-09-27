import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa'; // Import App Store Icons
import styles from "../style"; // Adjust the path as necessary

const DownloadSection = () => (
  <section className="text-center my-5 p-5 font-bitter" style={{ backgroundColor: '#f0f0f5', borderRadius: '15px' }}>
          <h1 className="flex-1 font-bitter font-semibold ss:text-[48px] text-[30px] ss:leading-[100.8px] leading-[48px]"
          style={{ color: '#402a6f' }}
          >
          Download Our Mobile App</h1>
    <p className="mt-3" style={{ color: '#402a6f' }}>
      Enjoy a seamless experience on the go with our mobile app. Available on both Android and iOS platforms.
    </p>
    <div className="row justify-content-center mt-4">
      {/* Android App Button */}
      <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
        <a href="https://play.google.com/store/apps/details?id=com.impalapay.mamlaka.wuyi/" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-dark mx-2" style={{ borderRadius: '25px', padding: '10px 30px', backgroundColor: '#34A853' }}>
            <FaGooglePlay size={30} style={{ marginRight: '10px' }} />
            <span style={{ fontSize: '18px' }}>Download on Google Play</span>
          </button>
        </a>
      </div>

      {/* iOS App Button */}
      <div className="col-12 col-md-4 d-flex justify-content-center align-items-center font-bitter">
        <a href="https://apps.apple.com/ke/app/impalapay-mobile/id6449749069/" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-dark mx-2" style={{ borderRadius: '25px', padding: '10px 30px', backgroundColor: '#000' }}>
            <FaApple size={30} style={{ marginRight: '10px' }} />
            <span style={{ fontSize: '18px' }}>Download on the App Store</span>
          </button>
        </a>
      </div>
    </div>
  </section>
);

export default DownloadSection;
