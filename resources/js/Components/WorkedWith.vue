
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css/navigation';

import "swiper/css";
let swiperRef = null;

const setSwiperRef = (swiper) => {
swiperRef = swiper;
};
const slideNext = () => {
swiperRef.slideNext();
};

const slidePrev = () => {
swiperRef.slidePrev();
};


</script>
<template>
	<section class="acridtn">
		<div class="container">
			<h2 class="acridtn__hdng">ORGANIZATIONS WE HAVE WORKED WITH</h2>
			<div class="acridtnSl swiper">
				<Swiper
				ref="{swiperRef}"
				:navigation="true"
				:slides-per-view="3"
				:space-between="10"
				:loop="true"
				:speed="1200"
				@swiper="setSwiperRef"
				 >
					<SwiperSlide class="swiper-slide">
						<div class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/orgnization/1.png" alt="" class="acridtnSlCard__img">
						</div>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<div class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/orgnization/2.png" alt="" class="acridtnSlCard__img">
						</div>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<div class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/orgnization/3.jpg" alt="" class="acridtnSlCard__img">
						</div>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<div class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/orgnization/4.jpg" alt="" class="acridtnSlCard__img">
						</div>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<div class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/orgnization/5.png" alt="" class="acridtnSlCard__img">
						</div>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<div class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/orgnization/6.png" alt="" class="acridtnSlCard__img">
						</div>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<div class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/orgnization/7.png" alt="" class="acridtnSlCard__img">
						</div>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<div class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/orgnization/8.jpg" alt="" class="acridtnSlCard__img">
						</div>
					</SwiperSlide>
					
				</Swiper>
				<div class="swiper-button-prev flex-a r-50 acridtnSlArr acridtnSlArr1"  @click="slideNext()">
					<i class="fa-solid fa-chevron-left"></i>
				</div>
				<div class="swiper-button-next flex-a r-50 acridtnSlArr acridtnSlArr2"  @click="slidePrev()">
					<i class="fa-solid fa-chevron-right"></i>
				</div>
			</div>
		</div>
	</section>
</template>
