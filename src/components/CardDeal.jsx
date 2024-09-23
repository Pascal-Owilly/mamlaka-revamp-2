import { card } from "../assets"; // Assuming 'card' is an image for the trade finance section
import styles, { layout } from "../style";
import Button from "./Button";
import GlobalPaymentImg from "../assets/global_payment.jpeg";
import PlugAndPlay from "../assets/payment-plugin.jpeg";

const CardDeal = () => (
  <>  
    {/* Trade Finance Section */}
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Access trade finance via our simple merchant <br className="sm:block hidden" /> 
          service.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 p-4`}>
          Easily manage your transactions, monitor performance, and access valuable insights all in one place. 
          Streamline your operations and make informed decisions to drive your business forward.
        </p>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[80%] rounded-[10px]" />
      </div>
    </section>

    {/* Global Payment Section */}
    <section className={layout.sectionReverse}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Seamless Global Payments <br className="sm:block hidden" /> 
          for your Business
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 p-4`}>
          Empowering Your Success With Global Payment Solutions  
          Our expert team has crafted innovative products within our payment system to support your success: accepting all payment methods and currencies worldwide.
        </p>
      </div>

      <div className={layout.sectionImg}>
        <img src={GlobalPaymentImg} alt="global payment" className="w-[100%] h-[100%] rounded-[10px]" />
      </div>
    </section>

    {/* Payment Plugin Section */}
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImg}>
        <img src={PlugAndPlay} alt="payment plugin" className="w-[90%] rounded-[10px]" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Plug and Play  
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 p-4`}>
          Take advantage of our seamless "plug-in" technology, enabling merchants to effortlessly accept payments.
        </p>
      </div>
    </section>
  </>
);

export default CardDeal;
