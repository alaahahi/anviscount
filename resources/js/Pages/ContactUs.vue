<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
</script>
<template>
    <MainLayout>
        <section class="contactus">
		<div class="container">
			<div class="row contactus-wrpr">
				<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
					<div class="contactusBox1">
						<h2 class="contactusBox1__h2"> تواصل معنا </h2>
						<p class="contactusBox1__p">يرجى ملء النّموذج أدناه وسنتواصل معك في أقرب وقت ممكن</p>
						<form action="" class="contactForm">
							<input type="text" class="contactForm__input" placeholder="الاسم" />
							<input type="text" class="contactForm__input" placeholder="رقم الهاتف" />
							<input type="text" class="contactForm__input" placeholder="البريد الالكتروني" />
							<textarea type="text" class="contactForm__input contactForm__textarea" placeholder="الرسالة"></textarea>
							<button type="button" class="contactForm__btn flex-a">أرسل</button>
						</form>
					</div>
				</div>
				<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
					<div class="contactusBox2">
						<iframe class="contactusBox2__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.3497429904473!2d54.36924998462842!3d24.47333596669004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e658fc2d8e1d9%3A0xde8671cca9b467d5!2zQmVpdCBBcmFiaSBDZW50ZXIg2YXYsdmD2LIg2KjZitiqINi52LHYqNmKINmE2KrYudmE2YrZhSDYp9mE2YTYutipINin2YTYudix2KjZitipINmIINij2YbYtNi32Kkg2KfZhNij2LfZgdin2YQ!5e0!3m2!1sar!2sae!4v1663250478821!5m2!1sar!2sae"></iframe>
					</div>
					<h3 class="contactusBox2__h3">تابعنا على مواقع التواصل الإجتماعي</h3>
					<ul class="blogBox2List">
						<li class="blogBox2List__item">
							<a href="#" class="blogBox2List__link blogBox2List__link1 flex-a">
								<i class="fa-brands fa-facebook-f"></i>
							</a>
						</li>
						<li class="blogBox2List__item">
							<a href="#" class="blogBox2List__link blogBox2List__link2 flex-a">
								<i class="fa-brands fa-twitter"></i>
							</a>
						</li>
						<li class="blogBox2List__item">
							<a href="#" class="blogBox2List__link blogBox2List__link3 flex-a">
								<i class="fa-brands fa-instagram"></i>
							</a>
						</li>
						<li class="blogBox2List__item">
							<a href="#" class="blogBox2List__link blogBox2List__link4 flex-a">
								<i class="fa-brands fa-linkedin"></i>
							</a>
						</li>
						<li class="blogBox2List__item">
							<a href="#" class="blogBox2List__link blogBox2List__link5 flex-a">
								<i class="fa-brands fa-tiktok"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
    </MainLayout>
</template>
<style scoped>
.contactus {
  padding: 70px 0;
}
@media (max-width: 1023px) {
  .contactus .contactus-wrpr {
    flex-wrap: wrap;
    row-gap: 25px;
  }
}
@media (max-width: 1799px) {
  .contactus {
    padding: 50px 0;
  }
}
@media (max-width: 1599px) {
  .contactus {
    padding: 40px 0;
  }
}
@media (max-width: 1399px) {
  .contactus {
    padding: 30px 0;
  }
}

.contactusBox1 {
  padding: 35px 30px 50px 30px;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.06);
  border-radius: 20px;
}
@media (max-width: 1199px) {
  .contactusBox1 {
    padding: 20px 20px 30px 20px;
  }
}
@media (max-width: 767px) {
  .contactusBox1 {
    border-radius: 12px;
  }
}
@media (max-width: 539px) {
  .contactusBox1 {
    padding: 15px 14px 20px 14px;
  }
}
.contactusBox1 .contactusBox1__h2 {
  font-size: 40px;
  color: #00aef1;
  margin-bottom: 5px;
  font-weight: bold;
}
@media (max-width: 1199px) {
  .contactusBox1 .contactusBox1__h2 {
    font-size: 30px;
  }
}
@media (max-width: 539px) {
  .contactusBox1 .contactusBox1__h2 {
    font-size: 24px;
  }
}
.contactusBox1 .contactusBox1__p {
  font-size: 20px;
  color: #666;
  margin-bottom: 30px;
}
@media (max-width: 1199px) {
  .contactusBox1 .contactusBox1__p {
    font-size: 18px;
    margin-bottom: 20px;
  }
}
@media (max-width: 539px) {
  .contactusBox1 .contactusBox1__p {
    font-size: 16px;
    margin-bottom: 15px;
  }
}
.contactusBox1 .contactForm {
  width: 100%;
}
.contactusBox1 .contactForm__input {
  width: 100%;
  height: 50px;
  padding: 10px 18px;
  border-radius: 5px;
  color: #666;
  background-color: #f0f0f0;
  margin-bottom: 15px;
  border: none;
  outline: none;
}
.contactusBox1 .contactForm__input::-moz-placeholder {
  color: #666;
}
.contactusBox1 .contactForm__input::placeholder {
  color: #666;
}
@media (max-width: 1199px) {
  .contactusBox1 .contactForm__input {
    height: 44px;
    padding: 8px 16px;
  }
}
@media (max-width: 539px) {
  .contactusBox1 .contactForm__input {
    height: 40px;
    padding: 8px 14px;
    font-size: 14px;
  }
}
.contactusBox1 .contactForm__textarea {
  height: 126px;
}
.contactusBox1 .contactForm__btn {
  width: 100%;
  padding: 9px 0;
  color: var(--light-color);
  border-radius: 30px;
  border: none;
  border-bottom: 5px solid #038ec5;
  background-color: #00aef1;
  font-size: 22px;
}
.contactusBox1 .contactForm__btn:hover {
  border-bottom: 5px solid #e2b626;
  background-color: #ffcc2a;
}
@media (max-width: 1199px) {
  .contactusBox1 .contactForm__btn {
    padding: 7px 0;
    font-size: 18px;
  }
}
@media (max-width: 539px) {
  .contactusBox1 .contactForm__btn {
    padding: 6px 0;
    font-size: 16px;
  }
}

.contactusBox2 {
  padding: 20px;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  margin-bottom: 30px;
}
@media (max-width: 767px) {
  .contactusBox2 {
    padding: 12px;
    border-radius: 12px;
  }
}
@media (max-width: 539px) {
  .contactusBox2 {
    margin-bottom: 20px;
  }
}
.contactusBox2 .contactusBox2__map {
  width: 100%;
  height: 550px;
  border-radius: 15px;
}
@media (max-width: 1199px) {
  .contactusBox2 .contactusBox2__map {
    height: 465px;
  }
}
@media (max-width: 1023px) {
  .contactusBox2 .contactusBox2__map {
    height: 400px;
  }
}
@media (max-width: 767px) {
  .contactusBox2 .contactusBox2__map {
    height: 320px;
  }
}
@media (max-width: 539px) {
  .contactusBox2 .contactusBox2__map {
    border-radius: 10px;
    height: 260px;
  }
}

.contactusBox2__h3 {
  font-size: 24px;
  color: #00aef3;
  font-weight: bold;
  margin-bottom: 20px;
}
@media (max-width: 1199px) {
  .contactusBox2__h3 {
    font-size: 21px;
  }
}
@media (max-width: 539px) {
  .contactusBox2__h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }
}/*# sourceMappingURL=contact-us.css.map */

.blogBox2List {
  display: flex;
  align-items: center;
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.blogBox2List .blogBox2List__link {
  width: 40px;
  height: 40px;
  background-color: #f2f2f2;
  font-size: 16px;
  border-radius: 4px;
}
.blogBox2List .blogBox2List__link:hover {
  background-color: transparent;
}
@media (max-width: 539px) {
  .blogBox2List .blogBox2List__link {
    width: 34px;
    height: 34px;
    font-size: 14px;
  }
}
.blogBox2List .blogBox2List__link .fa-facebook-f {
  color: #1279a2;
}
.blogBox2List .blogBox2List__link .fa-twitter {
  color: #00aef3;
}
.blogBox2List .blogBox2List__link .fa-instagram {
  color: #eb258f;
}
.blogBox2List .blogBox2List__link .fa-linkedin {
  color: #076b92;
}
.blogBox2List .blogBox2List__link .fa-tiktok {
  color: #333;
}
</style>