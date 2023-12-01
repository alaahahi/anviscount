<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

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
	<section class="testi">
		<div class="container">
			<h2 class="testi__h">TESTIMONIALS</h2>
			<div class="testiSl swiper">
				<Swiper
				ref="{swiperRef}"
				:navigation="true"
				:modules="[Pagination]"
				:style="{margin:'20px'}"
				:slides-per-view="1"
				:space-between="10"
				:loop="true"
				:speed="1000"
				@swiper="setSwiperRef"
				:pagination="{
				clickable: true,
				}"
				 >
					<SwiperSlide class="swiper-slide">
						<div class="testiSlCrd">
							<div class="testiSlCrdRow">
								<div class="testiSlCrdMini flex-a r-50">
									<img src="assets/images/orgnization/1.png" alt="" class="testiSlCrdMini__img">
								</div>
								<div class="testiSlCrdRowContnt">
									<h2 class="testiSlCrdRowContnt__h2">Mohammad Asif Ali</h2>
									<p class="testiSlCrdRowContnt__p">Group Quality Manager</p>
								</div>
							</div>
							<p class="testiSlCrd__p">
								We are really proud to say that Viscount  is our ISO (IMS) certifications body since 2002, Viscount is one of the best ISO certification body with  well experienced and  professionals team.The way they Audit  is really excellent  specially when  Auditor  ask the questions from Auditee,  everyone can easily understand what is been asked. 
								I will  surely  recommend Viscount for those who are preparing for the certifications for their companies and who are looking for ISO trainings.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<div class="testiSlCrd">
							<div class="testiSlCrdRow">
								<div class="testiSlCrdMini flex-a r-50">
									<img src="assets/images/orgnization/2.png" alt="" class="testiSlCrdMini__img">
								</div>
								<div class="testiSlCrdRowContnt">
									<h2 class="testiSlCrdRowContnt__h2">Mohammad Asif Ali</h2>
									<p class="testiSlCrdRowContnt__p">Group Quality Manager</p>
								</div>
							</div>
							<p class="testiSlCrd__p">
								We are really proud to say that Viscount  is our ISO (IMS) certifications body since 2002, Viscount is one of the best ISO certification body with  well experienced and  professionals team.The way they Audit  is really excellent  specially when  Auditor  ask the questions from Auditee,  everyone can easily understand what is been asked. 
								I will  surely  recommend Viscount for those who are preparing for the certifications for their companies and who are looking for ISO trainings.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<div class="testiSlCrd">
							<div class="testiSlCrdRow">
								<div class="testiSlCrdMini flex-a r-50">
									<img src="assets/images/orgnization/3.jpg" alt="" class="testiSlCrdMini__img">
								</div>
								<div class="testiSlCrdRowContnt">
									<h2 class="testiSlCrdRowContnt__h2">Mohammad Asif Ali</h2>
									<p class="testiSlCrdRowContnt__p">Group Quality Manager</p>
								</div>
							</div>
							<p class="testiSlCrd__p">
								We are really proud to say that Viscount  is our ISO (IMS) certifications body since 2002, Viscount is one of the best ISO certification body with  well experienced and  professionals team.The way they Audit  is really excellent  specially when  Auditor  ask the questions from Auditee,  everyone can easily understand what is been asked. 
								I will  surely  recommend Viscount for those who are preparing for the certifications for their companies and who are looking for ISO trainings.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide class="swiper-slide">
						<div class="testiSlCrd">
							<div class="testiSlCrdRow">
								<div class="testiSlCrdMini flex-a r-50">
									<img src="assets/images/orgnization/4.jpg" alt="" class="testiSlCrdMini__img">
								</div>
								<div class="testiSlCrdRowContnt">
									<h2 class="testiSlCrdRowContnt__h2">Mohammad Asif Ali</h2>
									<p class="testiSlCrdRowContnt__p">Group Quality Manager</p>
								</div>
							</div>
							<p class="testiSlCrd__p">
								We are really proud to say that Viscount  is our ISO (IMS) certifications body since 2002, Viscount is one of the best ISO certification body with  well experienced and  professionals team.The way they Audit  is really excellent  specially when  Auditor  ask the questions from Auditee,  everyone can easily understand what is been asked. 
								I will  surely  recommend Viscount for those who are preparing for the certifications for their companies and who are looking for ISO trainings.
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
				<div class="swiper-button-prev flex-a r-50 testiSlArr testiSlArr1"  @click="slideNext()">
					<i class="fa-solid fa-chevron-left"></i>
				</div>
				<div class="swiper-button-next flex-a r-50 testiSlArr testiSlArr2" @click="slidePrev()">
					<i class="fa-solid fa-chevron-right"></i>
				</div>
			</div>
		</div>
	</section>
</template>
<style>
 .swiper-pagination-bullet  {
    width: 14px;
    height: 14px;
    background-color: #e9f3ff;
    opacity: 1;
}
.swiper-pagination-bullet-active {
    background-color: #0368cc !important;
}


</style>