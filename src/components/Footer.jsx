import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"; // Importing specific icons

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <a href="/">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
        </a>
        <br /><br />
        <h2 style={{ fontWeight: 'bold', fontSize: '32px', color: '#6a2b89' }}>Get Started Today</h2>
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Join now and experience seamless, secure, and fast trade financing.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] ">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={link.link || ""} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] ">
        Copyright Ⓒ 2024 mamlaka Hub & Spoke. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => {
          // Determine the icon based on the id
          let Icon;
          switch (social.id) {
            case "social-media-2":
              Icon = FaFacebookF;
              break;
            case "social-media-4":
              Icon = FaLinkedinIn;
              break;
            case "social-media-3":
              Icon = FaTwitter;
              break;
            default:
              return null;
          }

          return (
            <div
              key={social.id}
              style={{
                backgroundColor: social.color || "#fff", // Default color if not defined
                borderRadius: '50%',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: index !== socialMedia.length - 1 ? "16px" : "0",
                cursor: 'pointer',
              }}
              onClick={() => window.open(social.link)}
            >
              <Icon className="text-[21px] text-light" /> {/* Change the color as needed */}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Footer;
