import React, { useState } from "react";
import { projects } from "../data";
import { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export const Projects = forwardRef((props, ref) => {
  const [project,setProject]=useState(projects)
  return (
    <>
      <div className="projects" ref={ref}>
        <div className="max-width">
          <div className="title">Projects</div>
          <div className="card-wrapper">
          <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
            {projects.map((project) => {
              const { id, image, title, desc, icons } = project;
              return (
                <SwiperSlide className="card" key={id}>
                  <div className="image">
                    <img src={image} alt="" />
                  </div>
                  <div className="detail">
                  <div className="head">{title}</div>
                  <div className="description">{desc}</div>
                  </div>
                  <div className="icons">
                    <i >
                    {icons.html?<img className="border" src={icons.html} alt="" />:""}
                    </i>
                    <i >
                    {icons.css?<img className="border" src={icons.css} alt="" />:""}
                    </i>
                    <i >
                    {icons.react?<img className="border" src={icons.react} alt="ccc" />:""}  
                    </i>
                    <i >
                    {icons.node?<img className="border" src={icons.node} alt="ccc" />:""}  
                    </i>
                </div>
                </SwiperSlide>
              );
            }
            )}
            </Swiper>
            </div>


        </div>
      </div>
    </>
  );
});
