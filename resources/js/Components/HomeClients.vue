<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

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
  	<section class="clients">
		<div class="container">
			<h2 class="section-hdng section-hdng--clients">أبرز عملائنا الاستراتيجيين</h2>
			<p class="clients__para">
				نمتاز في بيت عربي بشبكة واسعة من الشراكات مع نخبة من المؤسسات الحكومية والخاصة الفاعلة باختصاصات متعددة ثقافية تجارية اجتماعية
			</p>
			<div class="clientsSl swiper">
				<swiper
				style="padding-top: 15px;"
				ref="{swiperRef}"
				:modules="[Autoplay]"
				:navigation="true"
				:slides-per-view="7"
				:centeredSlides="true"
				:space-between="30"
				:loop="true"
				:speed="800"
				:autoplay="{
				delay: 1000,
				disableOnInteraction: false,
				}"
				@swiper="setSwiperRef"
				>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/1.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/2.png" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/3.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/4.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/5.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/6.png" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/7.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/8.png" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/9.png" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/10.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/11.png" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/12.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/13.png" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/14.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/15.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/16.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/17.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/18.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/19.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/20.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/21.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/22.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/23.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/24.jpeg" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="clients-slide flex-a">
							<img src="/assets/images/clients/25.png" alt="" class="clients-slide__img">
						</div>
					</swiper-slide>
				</swiper>
				<div class="swiper-button-prev clientsSlArr clientsSlArr2 flex-a r-50" @click="slidePrev">
					<i class="fa-sharp fa-solid fa-chevron-left"></i>
				</div>
				<div class="swiper-button-next clientsSlArr clientsSlArr1 flex-a r-50" @click="slideNext">
					<i class="fa-sharp fa-solid fa-chevron-right"></i>
				</div>
			</div>
		</div>
	</section>
</template>