import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Access top trade finance solutions with our intuitive merchant dashboard. <br className="sm:block hidden" /> 
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Easily manage your transactions, monitor performance, and access valuable insights all in one place. Streamline your operations and make informed decisions to drive your business forward.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
    <img src={card} alt="billing" className="w-[100%] h-[75%] rounded-[10px]" />

    </div>
  </section>
);

export default CardDeal;