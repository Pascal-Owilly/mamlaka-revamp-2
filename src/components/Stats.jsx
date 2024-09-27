import { useState, useEffect } from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  // Function to count from 0 to target number
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = parseInt(stat.value); // Parse value to ensure it's an integer
      if (isNaN(end)) return; // Handle non-numeric values safely

      const duration = 2000; // Duration of the count (in milliseconds)
      const incrementTime = Math.ceil(duration / end); // Time between increments

      const timer = setInterval(() => {
        start += 1;
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = start;
          return newCounts;
        });

        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);
    });
  }, []);

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 mt-5`}>
      {stats.map((stat, index) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
          <h4 className="font-bitter  xs:text-[30.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {counts[index]} {/* Display the current count */}
          </h4>
          <p className="font-bitter font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[20.58px] leading-[21.58px] text-gradient-2 uppercase ml-3"
            style={{
              fontWeight: '500',
            }}
          >
            {stat.title}      
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
