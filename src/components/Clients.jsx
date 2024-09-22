import { clients } from "../constants";
import styles from "../style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
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
              className="w-full h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Clients;
