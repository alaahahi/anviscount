<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';

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

defineProps({
    on: Boolean,
});
</script>
<template>
    <MainLayout>
        <section class="prdet">
		<div class="container">
			<div class="row prdetrow">
				<div class="col-sm-12 col-md-6">
					<div class="prdetBox1">
						<img src="/assets/images/our-library/1.jpg" alt="" class="prdetBox1__img">
					</div>
				</div>
				<div class="col-sm-12 col-md-6">
					<div class="prdetBox2">
						<h1 class="prdetBox2__name">في ليلة مظلمة</h1>
						<p class="prdetBox2__p"> by <a href="#"> Mark Gimenez </a> </p>
						<p class="prdetBox2__p"> Language - <span>English</span> , <span>Arabic</span>  </p>

						<p class="prdetBox2__p2">This book belongs in the following collection(s):</p>
						<p class="prdetBox2__p"> Action & Adventure </p>
						<p class="prdetBox2__p"> Featured </p>
						<p class="prdetBox2__p"> Thriller </p>
						<p class="prdetBox2__price"> Dhs. 28.00 </p>
						<div class="prdetPrcRow flex-i">
							<div class="prdetPrcRowBox">
								<p class="prdetPrcRowBox__p">Quantity</p>
								<input type="number" min="1" value="" class="prdetPrcRowBox__input" placeholder="1">
							</div>
							<button class="prdetPrcRow__btn flex-a">add to cart</button>
						</div>
						<p class="prdetBox2__p"> Quality: Good </p>
						<p class="prdetBox2__p"> Genre: Action and adventure, Thriller,</p>
						<p class="prdetBox2__p"> ISBN: <span> 9780751541304 </span>   </p>
						<p class="prdetBox2__p"> SKU: <span> BE500267836660 </span> </p>
						<p class="prdetBox2__p"> Pages: <span> 466 </span> </p>
						<p class="prdetBox2__p prdetBox2__p3"> 
							Description: Andy Prescott is the most laid-back young lawyer in Austin, Texas. Specialising in traffic law, he operates from a small room above a ramshackle tattoo parlour. He rides a trail bike and spends way too much time drinking beer in the sunshine. Ambition has never been Andy's strong point - he prefers to take it easy. That is, until one of Texas's wealthiest men walks into his office. On the spot, billionaire Russell Reeves retains Andy as his lawyer and, in exchange for some easy legal work, pays him more money than he has ever earned before. Andy's life is transformed. But nothing comes for free. Russell is a desperate man whose sole aim is to save his eight-year-old son, Zach, who is dying from leukemia. He is prepared to do anything - even if it means putting Andy's life in danger...
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- prdet end -->
	<section class="prdetRel">
		<div class="container">
			<h1 class="prdetRel__hdng">ربما يعجبك أيضا</h1>
			<div class="prdetRelSl swiper">
				<swiper
				ref="{swiperRef}"
				:modules="[Autoplay]"
				:navigation="true"
				:slides-per-view="4"
				:space-between="10"
				:loop="true"
				:speed="800"
				@swiper="setSwiperRef"
        style="padding: 20px 0;"
        :autoplay="{
				delay: 1000,
				disableOnInteraction: false,
				}"
				> 
					<swiper-slide class="swiper-slide">
						<div class="ourlibraryCrd">
							<div class="ourlibraryCrd__hdr">
								<div class="ourlibraryCrd__hdr-tab flex-a">أضف الى السلة</div>
								<img src="/assets/images/our-library/2.jpeg" alt="" class="ourlibraryCrd__hdr-img">
							</div>
							<div class="ourlibraryCrdBody">
								<div class="ourlibraryCrdBodyBox1">
									<a href="product-details.html" class="ourlibraryCrdBodyBox1__h3">في ليلة مظلمة</a>
									<p class="ourlibraryCrdBodyBox1-price">22.00 د.إ</p>
								</div>
								<button class="ourlibraryCrdBodyBtn flex-a">أضف إلى السلة</button>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="ourlibraryCrd">
							<div class="ourlibraryCrd__hdr">
								<div class="ourlibraryCrd__hdr-tab flex-a">أضف الى السلة</div>
								<img src="/assets/images/our-library/1.jpg" alt="" class="ourlibraryCrd__hdr-img">
							</div>
							<div class="ourlibraryCrdBody">
								<div class="ourlibraryCrdBodyBox1">
									<a href="product-details.html" class="ourlibraryCrdBodyBox1__h3">في ليلة مظلمة</a>
									<p class="ourlibraryCrdBodyBox1-price">22.00 د.إ</p>
								</div>
								<button class="ourlibraryCrdBodyBtn flex-a">أضف إلى السلة</button>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="ourlibraryCrd">
							<div class="ourlibraryCrd__hdr">
								<div class="ourlibraryCrd__hdr-tab flex-a">أضف الى السلة</div>
								<img src="/assets/images/our-library/3.jpeg" alt="" class="ourlibraryCrd__hdr-img">
							</div>
							<div class="ourlibraryCrdBody">
								<div class="ourlibraryCrdBodyBox1">
									<a href="product-details.html" class="ourlibraryCrdBodyBox1__h3">في ليلة مظلمة</a>
									<p class="ourlibraryCrdBodyBox1-price">22.00 د.إ</p>
								</div>
								<button class="ourlibraryCrdBodyBtn flex-a">أضف إلى السلة</button>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="ourlibraryCrd">
							<div class="ourlibraryCrd__hdr">
								<div class="ourlibraryCrd__hdr-tab flex-a">أضف الى السلة</div>
								<img src="/assets/images/our-library/4.jpg" alt="" class="ourlibraryCrd__hdr-img">
							</div>
							<div class="ourlibraryCrdBody">
								<div class="ourlibraryCrdBodyBox1">
									<a href="product-details.html" class="ourlibraryCrdBodyBox1__h3">في ليلة مظلمة</a>
									<p class="ourlibraryCrdBodyBox1-price">22.00 د.إ</p>
								</div>
								<button class="ourlibraryCrdBodyBtn flex-a">أضف إلى السلة</button>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="ourlibraryCrd">
							<div class="ourlibraryCrd__hdr">
								<div class="ourlibraryCrd__hdr-tab flex-a">أضف الى السلة</div>
								<img src="/assets/images/our-library/5.jpeg" alt="" class="ourlibraryCrd__hdr-img">
							</div>
							<div class="ourlibraryCrdBody">
								<div class="ourlibraryCrdBodyBox1">
									<a href="product-details.html" class="ourlibraryCrdBodyBox1__h3">في ليلة مظلمة</a>
									<p class="ourlibraryCrdBodyBox1-price">22.00 د.إ</p>
								</div>
								<button class="ourlibraryCrdBodyBtn flex-a">أضف إلى السلة</button>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="ourlibraryCrd">
							<div class="ourlibraryCrd__hdr">
								<div class="ourlibraryCrd__hdr-tab flex-a">أضف الى السلة</div>
								<img src="/assets/images/our-library/6.jpg" alt="" class="ourlibraryCrd__hdr-img">
							</div>
							<div class="ourlibraryCrdBody">
								<div class="ourlibraryCrdBodyBox1">
									<a href="product-details.html" class="ourlibraryCrdBodyBox1__h3">في ليلة مظلمة</a>
									<p class="ourlibraryCrdBodyBox1-price">22.00 د.إ</p>
								</div>
								<button class="ourlibraryCrdBodyBtn flex-a">أضف إلى السلة</button>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</div>
	</section>
    </MainLayout>
</template>
<style scoped>
.prdet {
  padding: 50px 0;
}
@media (max-width: 767px) {
  .prdet .prdetrow {
    row-gap: 30px;
  }
}
@media (max-width: 539px) {
  .prdet .prdetrow {
    row-gap: 15px;
  }
}
@media (max-width: 1399px) {
  .prdet {
    padding: 30px 0;
  }
}
@media (max-width: 539px) {
  .prdet {
    padding: 20px 0;
  }
}
.prdet .prdetBox1 {
  width: 100%;
  height: 800px;
}
@media (max-width: 1399px) {
  .prdet .prdetBox1 {
    height: 650px;
  }
}
@media (max-width: 1023px) {
  .prdet .prdetBox1 {
    height: 500px;
  }
}
@media (max-width: 767px) {
  .prdet .prdetBox1 {
    height: 600px;
  }
}
@media (max-width: 539px) {
  .prdet .prdetBox1 {
    height: 450px;
  }
}
.prdet .prdetBox1__img {
  width: 100%;
  height: 100%;
}
.prdet .prdetBox2 {
  padding: 0 30px;
}
@media (max-width: 1399px) {
  .prdet .prdetBox2 {
    padding: 0 15px;
  }
}
.prdet .prdetBox2__name {
  font-size: 40px;
  color: #00aef1;
  margin-bottom: 10px;
}
@media (max-width: 1399px) {
  .prdet .prdetBox2__name {
    font-size: 32px;
  }
}
@media (max-width: 539px) {
  .prdet .prdetBox2__name {
    font-size: 24px;
  }
}
.prdet .prdetBox2__p {
  font-size: 20px;
  color: #959595;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  -moz-column-gap: 5px;
       column-gap: 5px;
}
.prdet .prdetBox2__p a,
.prdet .prdetBox2__p span {
  color: #00aef1;
}
@media (max-width: 1399px) {
  .prdet .prdetBox2__p {
    font-size: 18px;
  }
}
@media (max-width: 539px) {
  .prdet .prdetBox2__p {
    font-size: 15px;
  }
}
.prdet .prdetBox2__p2 {
  font-size: 20px;
  color: #383838;
  margin-top: 20px;
  margin-bottom: 10px;
}
@media (max-width: 1399px) {
  .prdet .prdetBox2__p2 {
    font-size: 18px;
  }
}
@media (max-width: 539px) {
  .prdet .prdetBox2__p2 {
    font-size: 15px;
    margin-top: 13px;
    margin-bottom: 5px;
  }
}
.prdet .prdetBox2__p3 {
  color: #383838;
}
.prdet .prdetBox2__price {
  font-size: 28px;
  margin-top: 20px;
}
@media (max-width: 1399px) {
  .prdet .prdetBox2__price {
    font-size: 24px;
    margin-top: 10px;
  }
}
.prdet .prdetPrcRow {
  display: flex;
  -moz-column-gap: 20px;
       column-gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
@media (max-width: 1399px) {
  .prdet .prdetPrcRow {
    margin-bottom: 10px;
  }
}
@media (max-width: 539px) {
  .prdet .prdetPrcRow {
    row-gap: 15px;
  }
}
.prdet .prdetPrcRowBox {
  width: 150px;
}
.prdet .prdetPrcRowBox__p {
  font-size: 15px;
  margin-bottom: 3px;
  color: #959595;
}
@media (max-width: 1399px) {
  .prdet .prdetPrcRowBox__p {
    font-size: 13px;
  }
}
.prdet .prdetPrcRowBox__input {
  font-size: 24px;
  border: 1px solid #e4e4e4;
  padding: 3px 10px;
  color: #4a4a4a;
  width: 100%;
}
.prdet .prdetPrcRowBox__input::-moz-placeholder {
  color: #4a4a4a;
}
.prdet .prdetPrcRowBox__input::placeholder {
  color: #4a4a4a;
}
@media (max-width: 1399px) {
  .prdet .prdetPrcRowBox__input {
    font-size: 20px;
  }
}
.prdet .prdetPrcRow__btn {
  padding: 7px 15px;
  width: calc(100% - 220px);
  color: #fff;
  font-size: 24px;
  text-align: center;
  border-bottom: 5px solid #038ec5;
  background-color: #00aef1;
  border-radius: 60px;
}
.prdet .prdetPrcRow__btn:hover {
  background-color: var(--primary-color);
  border-bottom: 5px solid #b81f70;
}
@media (max-width: 1399px) {
  .prdet .prdetPrcRow__btn {
    width: calc(100% - 200px);
    font-size: 20px;
  }
}
@media (max-width: 539px) {
  .prdet .prdetPrcRow__btn {
    width: 100%;
    font-size: 18px;
    padding: 5px 15px;
  }
}

.prdetRel {
  padding: 50px 0;
}
@media (max-width: 1399px) {
  .prdetRel {
    padding: 30px 0;
  }
}
@media (max-width: 539px) {
  .prdetRel {
    padding: 0px 0 30px 0;
  }
}
.prdetRel .prdetRel__hdng {
  font-size: 30px;
  color: #00aef1;
  margin-bottom: 15px;
}
@media (max-width: 1399px) {
  .prdetRel .prdetRel__hdng {
    margin-bottom: 10px;
  }
}
@media (max-width: 767px) {
  .prdetRel .prdetRel__hdng {
    font-size: 24px;
    margin-bottom: 10px;
  }
}
.prdetRel .prdetRelSl {
  padding: 20px 20px;
}
@media (max-width: 1399px) {
  .prdetRel .prdetRelSl {
    padding: 15px 15px;
  }
}
@media (max-width: 767px) {
  .prdetRel .prdetRelSl {
    padding: 15px 2px;
  }
}
@media (max-width: 539px) {
  .prdetRel .prdetRelSl {
    padding: 20px;
  }
}
.prdetRel .ourlibraryCrd {
  width: 100%;
}/*# sourceMappingURL=product-details.css.map */


.ourlibrary {
  padding: 40px 0 60px 0;
}
@media (max-width: 1399px) {
  .ourlibrary {
    padding: 20px 0 40px 0;
  }
}
.ourlibrary .ourlibrary__img {
  width: 100%;
  height: auto;
  margin-bottom: 50px;
}
@media (max-width: 1399px) {
  .ourlibrary .ourlibrary__img {
    margin-bottom: 30px;
  }
}
.ourlibrary .section-hdng--subbanner {
  margin-bottom: 50px;
}
@media (max-width: 1399px) {
  .ourlibrary .section-hdng--subbanner {
    margin-bottom: 30px;
  }
}
.ourlibrary .ourlibraryWrpr {
  display: flex;
  flex-wrap: wrap;
  -moz-column-gap: 2.5%;
       column-gap: 2.5%;
  row-gap: 35px;
  margin-bottom: 70px;
}
@media (max-width: 1399px) {
  .ourlibrary .ourlibraryWrpr {
    row-gap: 30px;
  }
}
@media (max-width: 1199px) {
  .ourlibrary .ourlibraryWrpr {
    -moz-column-gap: 3.5%;
         column-gap: 3.5%;
  }
}
@media (max-width: 767px) {
  .ourlibrary .ourlibraryWrpr {
    -moz-column-gap: 4%;
         column-gap: 4%;
    row-gap: 20px;
    margin-bottom: 40px;
  }
}

.pagination {
  display: flex;
  align-items: center;
  -moz-column-gap: 10px;
       column-gap: 10px;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 auto;
}
@media (max-width: 539px) {
  .pagination {
    -moz-column-gap: 5px;
         column-gap: 5px;
  }
}
.pagination .page {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 35px;
  height: 35px;
  background-color: #eb2690;
  border-bottom: 4px solid #b81f70;
  color: #fff;
  border-radius: 50%;
}
.pagination .page.active, .pagination .page:hover {
  background-color: #ffcc2a;
  border-bottom: 4px solid #e2b626;
}
@media (max-width: 539px) {
  .pagination .page {
    width: 28px;
    height: 28px;
    font-size: 15px;
  }
}
.pagination .page__next,
.pagination .page__prev {
  font-size: 14px;
  background-color: #00a85a;
  border-bottom: 4px solid #128c53;
}
@media (max-width: 539px) {
  .pagination .page__next,
  .pagination .page__prev {
    font-size: 12px;
  }
}

.ourlibraryCrd {
  width: 23%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.06);
}
.ourlibraryCrd:hover {
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.1);
}
@media (max-width: 1199px) {
  .ourlibraryCrd {
    width: 31%;
  }
}
@media (max-width: 1023px) {
  .ourlibraryCrd {
    width: 48%;
  }
}
@media (max-width: 539px) {
  .ourlibraryCrd {
    width: 100%;
  }
}
.ourlibraryCrd .ourlibraryCrd__hdr {
  height: 360px;
  position: relative;
}
.ourlibraryCrd .ourlibraryCrd__hdr::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.6);
}
.ourlibraryCrd .ourlibraryCrd__hdr .ourlibraryCrd__hdr-tab {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 40px;
  border-radius: 30px;
  position: absolute;
  min-width: -moz-max-content;
  min-width: max-content;
  color: var(--light-color);
  border: 2px solid #fff;
  font-size: 17px;
  display: none;
  cursor: pointer;
}
.ourlibraryCrd .ourlibraryCrd__hdr:hover::after {
  display: block;
}
.ourlibraryCrd .ourlibraryCrd__hdr:hover .ourlibraryCrd__hdr-tab {
  display: block;
}
@media (max-width: 1399px) {
  .ourlibraryCrd .ourlibraryCrd__hdr {
    height: 280px;
  }
}
@media (max-width: 1023px) {
  .ourlibraryCrd .ourlibraryCrd__hdr {
    height: 320px;
  }
}
@media (max-width: 767px) {
  .ourlibraryCrd .ourlibraryCrd__hdr {
    height: 270px;
  }
}
@media (max-width: 539px) {
  .ourlibraryCrd .ourlibraryCrd__hdr {
    height: 310px;
  }
}
.ourlibraryCrd .ourlibraryCrd__hdr-img {
  width: 100%;
  height: 100%;
}
.ourlibraryCrd .ourlibraryCrdBody {
  padding: 15px 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.ourlibraryCrd .ourlibraryCrdBodyBox1 {
  width: 50%;
}
.ourlibraryCrd .ourlibraryCrdBodyBox1__h3 {
  font-size: 18px;
  display: block;
  margin-bottom: 2px;
}
.ourlibraryCrd .ourlibraryCrdBodyBox1__h3:hover {
  color: #eb2690;
}
.ourlibraryCrd .ourlibraryCrdBodyBox1-price {
  font-size: 20px;
  color: var(--secondary-color);
}
.ourlibraryCrd .ourlibraryCrdBodyBtn {
  width: 45%;
  background-color: #eb2690;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 16px;
  color: #fff;
  border-bottom: 3px solid #b81f70;
}
.ourlibraryCrd .ourlibraryCrdBodyBtn:hover {
  border-bottom: 3px solid #e2b626;
  background-color: #ffcc2a;
}
@media (max-width: 1399px) {
  .ourlibraryCrd .ourlibraryCrdBodyBtn {
    width: 42%;
    font-size: 14px;
  }
}
</style>
