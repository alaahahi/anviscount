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


</script>
<template>
  	<section class="parentOpinion">
		<div class="container">
			<h2 class="section-hdng section-hdng--parentOpinion">آراء الأهالي</h2>
			<div class="parentOpinionSl swiper">
				<swiper
				style="padding-top: 15px;"
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
						<div class="prnOpnSlide">
							<i class="fa-solid fa-quote-right prnOpnSlidequote"></i>
							<p class="prnOpnSlide__para">
								إذا كنت تبحث عن الإثارة والتّشويق، إذا كنت تبحث عن المتعة والفائدة، إذا كنت تبحث عن التعلّم والإبداع والتخيل في اللغة العربية وأحرف الهجاء؛ وأكثر من هذا بكثير ما عليك سوى الذهاب إلى (بيت عربي) حيث ستجد كل ذلك وأكثر....شكراً من القلب لجهودكم الجبّارة في إحياء لغتنا الأُمّ في قلوب أطفالنا وعقولهم
							</p>
						</div>
						<p class="prnOpnSlide-p">أم أماريس</p>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="prnOpnSlide">
							<i class="fa-solid fa-quote-right prnOpnSlidequote"></i>
							<p class="prnOpnSlide__para">
								بيت عربي كان بمثابة بيت السعادة والمرح الثاني لأطفالي، لم يتعلموا فقط اللغة العربية وأبجديتها، ولكن تعلموا التعبير عن أنفسهم أيضاً، مما جعل ثقتهم بقدراتهم تزداد، كما أن بيت عربي احتضنهم وعلّمهم محبة لغتهم الأم، واستخدامها في حياتهم اليومية، والتحدث بها أولاً، ودائماً القراءة ثم القراءة، فأكثر أساليب بيت عربي أهميّة للوصول إلى قلب أطفالي هو تركيزهم على قراءة القصص والحوار الممتع والشيق.
							</p>
						</div>
						<p class="prnOpnSlide-p">أم أماريس</p>
					</swiper-slide>
				</swiper>
				<div class="swiper-button-prev parentOpinionSlArr parentOpinionSlArr2 flex-a r-50" @click="slidePrev">
					<i class="fa-sharp fa-solid fa-chevron-left "></i>
				</div>
				<div class="swiper-button-next parentOpinionSlArr parentOpinionSlArr1 flex-a r-50" @click="slideNext">
					<i class="fa-sharp fa-solid fa-chevron-right"></i>
				</div>
			</div>
		</div>
	</section>
</template>
