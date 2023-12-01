<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

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

defineProps({
    on: Boolean,
});
</script>

<template>
	<section class="banner">
		<div class="bannerSl swiper">
			<div class="swiper-wrapper">
				<swiper
				ref="{swiperRef}"
				:navigation="true"
				:slides-per-view="1"
				:centeredSlides="true"
				:space-between="30"
				:loop="true"
				:speed="800"
				@swiper="setSwiperRef"
				>
				<swiper-slide class="swiper-slide">
				<div class="bannerSlbox flex-a">
					<img src="/assets/images/banner/1.jpg" alt="" class="bannerSlbox__img">
				</div>
				</swiper-slide>
				<swiper-slide class="swiper-slide">
					<div class="bannerSlbox flex-a">
						<img src="/assets/images/banner/2.jpg" alt="" class="bannerSlbox__img">
					</div>
				</swiper-slide>
				<swiper-slide class="swiper-slide">
					<div class="bannerSlbox flex-a">
						<img src="/assets/images/banner/3.jpg" alt="" class="bannerSlbox__img">
					</div>
				</swiper-slide>
				<swiper-slide class="swiper-slide">
					<div class="bannerSlbox flex-a">
						<img src="/assets/images/banner/4.jpg" alt="" class="bannerSlbox__img">
					</div>
				</swiper-slide>
				<swiper-slide class="swiper-slide">
					<div class="bannerSlbox flex-a">
						<img src="/assets/images/banner/5.jpg" alt="" class="bannerSlbox__img">
					</div>
				</swiper-slide>
				</swiper>
			</div>
			<div class="swiper-button-prev bannerSlArr bannerSlArr2 flex-a r-50" @click="slidePrev">
				<i class="fa-sharp fa-solid fa-chevron-left"></i>
			</div>
			<div class="swiper-button-next bannerSlArr bannerSlArr1 flex-a r-50" @click="slideNext">
				<i class="fa-sharp fa-solid fa-chevron-right "></i>
			</div>
			
		</div>
	</section>
</template>
