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
    <div className="container-fluid">
      <div className={`${styles.flexCenter} flex-col text-center`}>
      <h1 className="flex-1 font-bitter mt-5 mb-5 font-semibold ss:text-[24px] text-[30px] ss:leading-[24.8px] leading-[24px]">
      Trusted By Leading Businesses  World Wide
        </h1>
      </div>
      <br />
      <div className={`${styles.flexCenter}`}>
        <Swiper
          slidesPerView={6} // Show 4 logos at a time
          spaceBetween={10} // Space between logos
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
