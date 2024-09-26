import { clients } from "../constants";
import styles from "../style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Clients = () => (
  <section className="my-4">
    {/* Bootstrap container to wrap everything */}
    <div className="container">
      <div className={`${styles.flexCenter} flex-col text-center`}>
        <h2 className={styles.heading2}>
          Trusted By Leading Businesses <br className="sm:block hidden" /> World Wide
        </h2>
      </div>
      <br />
      <div className={`${styles.flexCenter}`}>
        <Swiper
          slidesPerView={4} // Show 4 logos at a time
          spaceBetween={30} // Space between logos
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          loop={true} // Infinite loop
          className="w-full"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id} className="flex justify-center items-center">
              <div className="flex justify-center items-center w-[150px] h-[150px] sm:w-[192px] sm:h-[192px]">
                <img
                  src={client.logo}
                  alt="client_logo"
                  className="w-full h-full object-contain small-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
);

export default Clients;
