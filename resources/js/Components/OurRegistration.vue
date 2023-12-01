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
			<h2 class="acridtn__hdng">OUR REGISTRATIONS</h2>
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
						<a href="#" class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/registraton/1.png" alt="" class="acridtnSlCard__img">
						</a>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<a href="#" class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/registraton/2.JPG" alt="" class="acridtnSlCard__img">
						</a>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<a href="#" class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/registraton/1.png" alt="" class="acridtnSlCard__img">
						</a>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<a href="#" class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/registraton/2.JPG" alt="" class="acridtnSlCard__img">
						</a>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<a href="#" class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/registraton/1.png" alt="" class="acridtnSlCard__img">
						</a>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<a href="#" class="acridtnSlCard">
							<div class="border one"><div></div></div>
							<div class="border two"><div></div></div>
							<img src="assets/images/registraton/2.JPG" alt="" class="acridtnSlCard__img">
						</a>
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