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
	<section class="values">
		<div class="container" >
			<ul class="valuesList"  role="tablist" data-aos="fade-up" data-aos-delay="250" v-scroll-reveal-fade-up="{delay:'250'}">
				<li class="valuesList__item" role="presentation">
					<div class="valuesList__btn active" data-bs-toggle="pill" data-bs-target="#allorders" type="button" role="tab" aria-selected="true"> Our Vision </div>
				</li>
				<li class="valuesList__item" role="presentation">
					<div class="valuesList__btn" data-bs-toggle="pill" data-bs-target="#toshippingorders" type="button" role="tab" aria-selected="false"> Our Mission </div>
				</li>
				<li class="valuesList__item" role="presentation">
					<div class="valuesList__btn" data-bs-toggle="pill" data-bs-target="#completeorders" type="button" role="tab" aria-selected="false"> Our Core Values </div>
				</li>
			</ul>
			<div class="tab-content" id="pills-tabContent" data-aos="fade-up" data-aos-delay="350" v-scroll-reveal-fade-up="{delay:'300'}">
				<div class="tab-pane fade show active" id="allorders" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-lg-6">
							<div class="hmabtBox">
								<div class="hmabtBox-ab flex-a">
									<img src="assets/images/logo.png" alt="" class="hmabtBox-ab__img">
								</div>
								<div class="hmabtBox-imgholder">
									<div class="hmabtBox-imgholder-ab"></div>
									<img src="assets/images/vision.jpg" alt="" class="hmabtBox__img">
									<div class="hmabtBoxcol1">
										<img src="assets/images/v1.jpg" alt="" class="hmabtBoxcol1__img">
									</div>
									<div class="hmabtBoxcol1 hmabtBoxcol2">
										<img src="assets/images/v2.jpg" alt="" class="hmabtBoxcol1__img">
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="hmabtBo2">
								<h4 class="hmabtBo2__h">OUR VISION</h4>
								<p class="hmabtBo2__para">
									To grow and become an undisputed market leader and always be the choice of our clients in the Certification business reputed for sustainable quality, health, safety, environment and high standards of its’ services.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="toshippingorders" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-lg-6">
							<div class="hmabtBox">
								<div class="hmabtBox-ab flex-a">
									<img src="assets/images/logo.png" alt="" class="hmabtBox-ab__img">
								</div>
								<div class="hmabtBox-imgholder">
									<div class="hmabtBox-imgholder-ab"></div>
									<img src="assets/images/vision.jpg" alt="" class="hmabtBox__img">
									<div class="hmabtBoxcol1">
										<img src="assets/images/v1.jpg" alt="" class="hmabtBoxcol1__img">
									</div>
									<div class="hmabtBoxcol1 hmabtBoxcol2">
										<img src="assets/images/v2.jpg" alt="" class="hmabtBoxcol1__img">
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="hmabtBo2">
								<h4 class="hmabtBo2__h">OUR MISSION</h4>
								<p class="hmabtBo2__para">
									To create necessary means and growth oriented environment that enables the employees to provide services and achieve results to the fullest satisfaction of the personnel and of its customers. To make world class Health, Safety, Environment and Quality a way of life within the company. To provide our clients professional services with the most qualified personnel. To manage the company on a sound and professional financial basis in order to achieve the most reasonable return on investment.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="completeorders" role="tabpanel" tabindex="0">
					<div class="row">
						<div class="col-lg-6">
							<div class="hmabtBox">
								<div class="hmabtBox-ab flex-a">
									<img src="assets/images/logo.png" alt="" class="hmabtBox-ab__img">
								</div>
								<div class="hmabtBox-imgholder">
									<div class="hmabtBox-imgholder-ab"></div>
									<img src="assets/images/vision.jpg" alt="" class="hmabtBox__img">
									<div class="hmabtBoxcol1">
										<img src="assets/images/v1.jpg" alt="" class="hmabtBoxcol1__img">
									</div>
									<div class="hmabtBoxcol1 hmabtBoxcol2">
										<img src="assets/images/v2.jpg" alt="" class="hmabtBoxcol1__img">
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="hmabtBo2">
								<h4 class="hmabtBo2__h">OUR CORE VALUES</h4>
								<p class="hmabtBo2__para">
									Health, Safety, Environment and Quality must come first in everything we do in our business. We shall be ethical in our conduct and business dealings and protect the rightful interest of all our stakeholders, employees, customers and partners in particular and the society in general. We shall abide by the laws of the land and norms of the society while providing our services. We shall keep the good name and reputation of the company supreme in our personal and business interactions with the customers and public at the highest level. We will protect and preserve the honor and dignity of our employees and provide them nondiscriminatory, congenial, safe environments to work & grow, reward good performance, attitude and effective communication with fair remuneration and we shall promote a sense of ownership amongst the employees. We shall protect the business interest of our customers by maintaining confidentiality of information and never using it for their detriment. We shall establish objectives commensurate with our resources and capability and use them to continually improve our performance.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>