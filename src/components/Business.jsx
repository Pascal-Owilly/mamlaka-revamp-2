import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className="flex flex-col p-6 rounded-[20px] feature-card">
    <div className="flex-1 flex flex-col mt-3">
      <div className="flex items-center space-x-3"> {/* Flexbox container for icon and title */}
        {/* <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
          <img src={icon} alt={title} className="w-[50%] h-[50%]" /> 
        </div> */}
        <h4 className="font-poppins font-semibold text-[18px] leading-[23.4px]"
            style={{ fontWeight: '800', letterSpacing: '2px' }}>
          {title}
        </h4>
      </div>
      <p className="font-poppins font-normal text-[16px] leading-[24px] mt-2">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2} style={{ textAlign: 'center' }}>
        The MHS Difference 
      </h2>
    </div>
    <div className={`${layout.sectionImg} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
