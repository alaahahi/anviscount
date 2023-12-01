<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import ContactUs from '@/Components/ContactUs.vue';
import Mapsec from '@/Components/Mapsec.vue';
import {ref} from "vue";

function toggleAnswer(question) {
  question.isOpen = !question.isOpen;

}

// Example usage:
const questions = ref([{
  id: 1,
  isOpen: false,
  question:  'Lorem ipsum dolor sit amet.' ,
  answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' 
},
{
  id: 2,
  isOpen: false,
  question:  'Lorem ipsum dolor sit amet.' ,
  answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' 
},
{
  id: 3,
  isOpen: false,
  question:  'Lorem ipsum dolor sit amet.' ,
  answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' 
}]);
</script>
<template>
    <MainLayout>
      <div class="subbanner">
        <div class="container-fluid">
          <ol class="breadcrumb" data-aos="fade-up" data-aos-delay="50"  v-scroll-reveal-fade-up="{delay:'50'}">
            <li class="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li aria-current="page" class="breadcrumb-item active">F&Q</li>
          </ol>
        </div>
      </div>
      <section class="faq">
        <div class="container">
			<div class="row faq-row">
				<div class="col-lg-6">
					<div class="faqbox" data-aos="fade-up" data-aos-delay="50" v-scroll-reveal-fade-up="{delay:'250'}">
						<h6 class="faqbox__h6">FREQUENTLY ASKED QUESTIONS</h6>
						<h6 class="faqbox__h2">Things you need to know and we know your’s</h6>
						<div class="faqbox-row flex">
							<div class="faqbox-mini flex-a">
								<i class="fa-solid fa-arrow-right-long"></i>
							</div>
							<div class="faqbox-content">
								<h3 class="faqbox-content__h3">Lorem ipsum dolor sit amet.</h3>
								<p class="faqbox-content__p">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe vel labore tenetur ad ipsam exercitationem.
								</p>
							</div>
						</div>
						<div class="faqbox-row flex">
							<div class="faqbox-mini flex-a">
								<i class="fa-solid fa-arrow-right-long"></i>
							</div>
							<div class="faqbox-content">
								<h3 class="faqbox-content__h3">Lorem ipsum dolor sit amet.</h3>
								<p class="faqbox-content__p">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe vel labore tenetur ad ipsam exercitationem.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="faqbox2" data-aos="fade-up" data-aos-delay="250" v-scroll-reveal-fade-up="{delay:'500'}">
                        <div>
                            <div
                            class="accordian-box"
                            v-for="(item, index) in questions"
                            :key="index"
                            @click="toggleAnswer(item)"
                            >
                            <div class="accordian-box__header"  :class="{ 'active': item.isOpen }">
                                <h2 class="accordian-box__h">{{ item.question }}</h2>
                                <i class="fa-solid fa-plus" v-show="!item.isOpen"></i>
                                <i class="fa-solid fa-minus" v-show="item.isOpen"></i>
                            </div>
                            <div class="accordian-box__body" :class="{ 'd-block': item.isOpen }">
                                <p class="accordian-box__p">{{ item.answer }}</p>
                            </div>
                            </div>
                        </div>

					</div>
				</div>
			</div>
        </div>
    </section>
    </MainLayout>
</template>
<style scoped>
.subbanner {
  height: 280px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.616), rgba(0, 0, 0, 0.548)), url("./assets/images/iso3.jpg");
}
.subbanner .breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 1rem;
  list-style: none;
}
.subbanner .breadcrumb li a {
  color: #fff;
}
.subbanner .breadcrumb li.active {
  color: #005abb;
}

.faq{
    padding: 70px 0;
    background-color: #fff;
    position: relative;
    z-index: 0;

}
.faq::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(../../images/bgrs5.jpg) no-repeat center;
    background-size: cover;
    opacity: 0.06;
    z-index: -1;
}
.faqbox{
    width: 97%;
    box-shadow: 0 3px 15px 0 rgba(0,0,0,0.05);
    padding: 30px 30px;
}
.faqbox__h6{
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 1px;
    color: var(--main);
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
}
.faqbox__h2{
    color: #000000;
    font-size: 28px;
    margin-bottom: 40px;
    font-weight: 700;
    line-height: 1.5;
}
.faqbox-mini{
    width: 60px;
    height: 60px;
    background-color: var(--main);
    border-radius: 50%;
    color: #fff;
    font-size: 18px;
}
.faqbox-row{
    column-gap: 20px;
    margin-bottom: 48px;
}
.faqbox-content__h3{
    color: #000000;
    font-size: 1.1rem;
    margin-bottom: 10px;
    font-weight: 700;
}
.faqbox-content{
    width: calc(100% - 100px);
}
.faqbox-content__p{
    font-size: 16px;
    color: #92939e;
    font-weight: 500;
}
.faqbox2{
    padding: 20px 30px;
    background-color: #fff;
    box-shadow: 0 3px 15px 0 rgba(0,0,0,0.05);
}
.accordian-box__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 5px;
    border-bottom: 1px solid #c9d5db;
    cursor: pointer;
}
.accordian-box__header .fa-minus{
    display: none;
}
.accordian-box__header.active .fa-plus{
    display: none;
}
.accordian-box__header.active .fa-minus{
    display: block;
}
.accordian-box__h{
    width: calc(100% - 15px);
    font-size: 1.05rem;
    font-weight: 700;
}
.accordian-box__header i{
    font-size: 15px;
    color: #ff6d2e;
}
.accordian-box__body{
    padding: 20px 5px;
    border-bottom: 1px solid #c9d5db;
    display: none;
}
.accordian-box__p{
    color: #7a838b;
    font-size: 1.02rem;
    line-height: 1.8em;
}
.accordian-box:nth-last-child(1) .accordian-box__body,
.accordian-box:nth-last-child(1) .accordian-box__header{
    border-bottom: 0;
}
@media(max-width:1199px){
    .faq{
        padding: 40px 0;
    }
    .faqbox{
        width: 100%;
    }
    .faqbox__h6 {
        margin-bottom: 5px;
    }
    .faqbox__h2 {
        font-size: 22px;
        margin-bottom:40px;
    }
    .faqbox-mini {
        width: 45px;
        height: 45px;
    }
    .faqbox-content__h3 {
        font-size: 1rem;
        margin-bottom: 10px;
    }
    .faqbox-content {
        width: calc(100% - 60px);
    }
 
    .faqbox2 {
        padding: 15px 18px;
    }
    .accordian-box__header {
        padding: 20px 5px;
    }

}
@media(max-width:1023px){
    .faqbox{
        margin-bottom: 25px;
    }
}
@media(max-width:539px){
    .faq {
        padding: 25px 0;
    }
    .faqbox {
        width: 97%;
        box-shadow: 0 3px 15px 0 rgba(0,0,0,0.05);
        padding: 18px 18px;
    }
    .faqbox__h6{
        font-size: 14px;
    }
    .faqbox__h2 {
        font-size: 19px;
        margin-bottom: 20px;
    }
    .faqbox-content__p{
        font-size: 14px;
    }
    .faqbox-row {
        column-gap: 10px;
        margin-bottom: 25px;
    }
    .faqbox-mini {
        width: 34px;
        font-size: 12px;
        height: 34px;
    }
    .faqbox-content__h3 {
        font-size: 15px;
    }
    .accordian-box__h{
        font-size: 14px;
    }
    .accordian-box__p{
        font-size: 14px;
    }
    .accordian-box__body{
        padding: 10px 5px;
    }
    .accordian-box__header {
        padding: 13px 5px;
    }
}
.rtl .faqbox-mini i{
    transform: scaleX(-1);
}
.dark .faq{
    background-color: var(--dark-background-color1);
}
.dark .faqbox-content__p,
.dark .accordian-box__p{
    color: var(--dark-para-color);
}
.dark .accordian-box__h,
.dark .faqbox-content__h3,
.dark .faqbox__h2{
    color: #fff;
}
.dark .faqbox2{
    background-color: var(--dark-background-color1);
}
.dark .accordian-box__body,
.dark .accordian-box__header{
    border-color: var(--dark-border-color);
}
</style>