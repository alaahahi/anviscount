<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import { Link } from '@inertiajs/inertia-vue3';

</script>
<template>
    <MainLayout>
  <div class="subbanner">
		<div class="container-fluid">
			<ol class="breadcrumb" data-aos="zoom-in" data-aos-delay="50"  v-scroll-reveal-fade-up="{delay:'50'}">
				<li class="breadcrumb-item">
					<a href="index.html">Home</a>
				</li>
				<li aria-current="page" class="breadcrumb-item active">Blog</li>
			</ol>
		</div>
	</div>
	<!-- hero end -->
	<section class="blog">
		<div class="container">
			<h2 class="section-hdng section-hdng--blog">
				Blog
			</h2>
			<div class="blog-wrpr">
				<div class="blogBox1">
					<div class="blogCard" data-aos="zoom-in" data-aos-delay="50" v-scroll-reveal-zoom-in="{delay:'50'}">
						<img src="assets/images/iso.jpg" alt="" class="blogCard__img" />
						<a href="blog-details.html" class="blogCard__link"> ANSI National Accreditation Board (ANAB) </a>
						<div class="blogCardRow flex-i">
							<div class="blogCardBox1">
								<i class="fa-regular fa-comment"></i>
								<span>0</span>
								<span>comment</span>
							</div>
							<div class="blogCardBox1">
								<i class="fa-regular fa-clock"></i>
								<span>2023/2/1</span>
							</div>
						</div>
						<p class="blogCard__p">
							ANSI National Accreditation Board (ANAB) 
						</p>
					</div>
					<div class="blogCard" data-aos="zoom-in" data-aos-delay="150" v-scroll-reveal-zoom-in="{delay:'150'}">
						<img src="assets/images/iso2.jpg" alt="" class="blogCard__img" />
						<a href="blog-details.html" class="blogCard__link"> ANSI National Accreditation Board (ANAB) </a>
						<div class="blogCardRow flex-i">
							<div class="blogCardBox1">
								<i class="fa-regular fa-comment"></i>
								<span>0</span>
								<span>comment</span>
							</div>
							<div class="blogCardBox1">
								<i class="fa-regular fa-clock"></i>
								<span>2023/2/1</span>
							</div>
						</div>
						<p class="blogCard__p">
							ANSI National Accreditation Board (ANAB) 
						</p>
					</div>
					<div class="blogCard" data-aos="zoom-in" data-aos-delay="250" v-scroll-reveal-zoom-in="{delay:'250'}">
						<img src="assets/images/iso3.jpg" alt="" class="blogCard__img" />
						<a href="blog-details.html" class="blogCard__link"> ANSI National Accreditation Board (ANAB) </a>
						<div class="blogCardRow flex-i">
							<div class="blogCardBox1">
								<i class="fa-regular fa-comment"></i>
								<span>0</span>
								<span>comment</span>
							</div>
							<div class="blogCardBox1">
								<i class="fa-regular fa-clock"></i>
								<span>2023/2/1</span>
							</div>
						</div>
						<p class="blogCard__p">
							ANSI National Accreditation Board (ANAB) 
						</p>
					</div>
					<div class="blogCard" data-aos="zoom-in" data-aos-delay="350" v-scroll-reveal-zoom-in="{delay:'350'}">
						<img src="assets/images/iso4.jpg" alt="" class="blogCard__img" />
						<a href="blog-details.html" class="blogCard__link"> ANSI National Accreditation Board (ANAB) </a>
						<div class="blogCardRow flex-i">
							<div class="blogCardBox1">
								<i class="fa-regular fa-comment"></i>
								<span>0</span>
								<span>comment</span>
							</div>
							<div class="blogCardBox1">
								<i class="fa-regular fa-clock"></i>
								<span>2023/2/1</span>
							</div>
						</div>
						<p class="blogCard__p">
							ANSI National Accreditation Board (ANAB) 
						</p>
					</div>
					<div class="pagination pagination--blog">
						<a href="#" class="page page__prev">
							<i class="fa-sharp fa-solid fa-chevron-left"></i>
						</a>
						<a href="#" class="page active flex-a">1</a>
						<a href="#" class="page flex-a">2</a>
						<a href="#" class="page flex-a">3</a>
						<a href="#" class="page flex-a">4</a>
						<a href="#">
							.......
						</a>
						<a href="#" class="page flex-a">10</a>
						<a href="#" class="page page__next">
							<i class="fa-sharp fa-solid fa-chevron-right"></i>
						</a>
					</div>
				</div>
				<div class="blogBox2Holder">
					<div class="blogBox2">
						<h6 class="blogBox2__h6">Our latest</h6>
						<div class="blogBox2Card" data-aos="fade-up" data-aos-delay="50">
							<div class="blogBox2CardBox1">
								<img src="assets/images/iso.jpg" alt="" class="blogBox2CardBox1__img">
							</div>
							<div class="blogBox2CardBox2">
								<a href="blog-details.html" class="blogBox2CardBox2__link">ANSI National Accreditation Board (ANAB)</a>
								<div class="blogBox2CardBox2-row">
									<i class="fa-regular fa-clock"></i>
									<span>2023/1/2</span>
								</div>
							</div>
						</div>
						<div class="blogBox2Card" data-aos="fade-up" data-aos-delay="150">
							<div class="blogBox2CardBox1">
								<img src="assets/images/iso2.jpg" alt="" class="blogBox2CardBox1__img">
							</div>
							<div class="blogBox2CardBox2">
								<a href="blog-details.html" class="blogBox2CardBox2__link">ANSI National Accreditation Board (ANAB)</a>
								<div class="blogBox2CardBox2-row">
									<i class="fa-regular fa-clock"></i>
									<span>2023/1/2</span>
								</div>
							</div>
						</div>
						<div class="blogBox2Card" data-aos="fade-up" data-aos-delay="250">
							<div class="blogBox2CardBox1">
								<img src="assets/images/iso3.jpg" alt="" class="blogBox2CardBox1__img">
							</div>
							<div class="blogBox2CardBox2">
								<a href="blog-details.html" class="blogBox2CardBox2__link">ANSI National Accreditation Board (ANAB)</a>
								<div class="blogBox2CardBox2-row">
									<i class="fa-regular fa-clock"></i>
									<span>2023/1/2</span>
								</div>
							</div>
						</div>
						<div class="blogBox2Card" data-aos="fade-up" data-aos-delay="350">
							<div class="blogBox2CardBox1">
								<img src="assets/images/iso4.jpg" alt="" class="blogBox2CardBox1__img">
							</div>
							<div class="blogBox2CardBox2">
								<a href="blog-details.html" class="blogBox2CardBox2__link">ANSI National Accreditation Board (ANAB)</a>
								<div class="blogBox2CardBox2-row">
									<i class="fa-regular fa-clock"></i>
									<span>2023/1/2</span>
								</div>
							</div>
						</div>

					</div>
					<div class="blogBox2">
						<h6 class="blogBox2__h6"> Follow Us </h6>
						<ul class="blogBox2List" data-aos="fade-up" data-aos-delay="50">
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
  font-size: 15px;
  width: 35px;
  height: 35px;
  background-color: #f2f7ff;
  color: var(--main);
  font-weight: 500;
}
.pagination .page.active, .pagination .page:hover {
  background-color: var(--main);
  color: #fff;
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
  background-color: var();
}
@media (max-width: 539px) {
  .pagination .page__next,
  .pagination .page__prev {
    font-size: 12px;
  }
}

.blog {
  padding: 50px 0;
}
@media (max-width: 1799px) {
  .blog {
    padding: 30px 0;
  }
}
@media (max-width: 539px) {
  .blog {
    padding: 20px 0;
  }
}
.blog .section-hdng--blog {
  text-align: center;
  color: var(--main);
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 10px;
  margin-bottom: 50px;
}
@media (max-width: 1799px) {
  .blog .section-hdng--blog {
    margin-bottom: 20px;
  }
}
@media (max-width: 1599px) {
  .blog .section-hdng--blog {
    font-size: 26px;
    margin-bottom: 40px;
  }
}
@media (max-width: 1399px) {
  .blog .section-hdng--blog {
    font-size: 21px;
  }
}
@media (max-width: 539px) {
  .blog .section-hdng--blog {
    font-size: 19px;
  }
}
.blog .blog-wrpr {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
@media (max-width: 1023px) {
  .blog .blog-wrpr {
    flex-wrap: wrap;
    row-gap: 35px;
  }
}
.blog .blogBox1 {
  width: calc(100% - 420px);
}
@media (max-width: 1199px) {
  .blog .blogBox1 {
    width: calc(100% - 340px);
  }
}
@media (max-width: 1023px) {
  .blog .blogBox1 {
    width: 100%;
  }
}
.blog .blogCard {
  padding: 25px 25px;
  width: 100%;
  margin-bottom: 15px;
  text-align: initial;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.05);
}
@media (max-width: 1199px) {
  .blog .blogCard {
    padding: 15px 15px;
  }
}
@media (max-width: 539px) {
  .blog .blogCard {
    padding: 10px 10px;
  }
}
.blog .blogCard__img {
  height: 350px;
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  margin-bottom: 20px;
}
@media (max-width: 1799px) {
  .blog .blogCard__img {
    height: 300px;
  }
}
@media (max-width: 1199px) {
  .blog .blogCard__img {
    height: 250px;
  }
}
@media (max-width: 539px) {
  .blog .blogCard__img {
    height: 150px;
    margin-bottom: 10px;
  }
}
.blog .blogCard__link {
  color: var(--main);
  font-size: 22px;
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
}
.blog .blogCard__link:hover {
  color: #f75a5a;
}
@media (max-width: 1799px) {
  .blog .blogCard__link {
    font-size: 21px;
  }
}
@media (max-width: 1199px) {
  .blog .blogCard__link {
    font-size: 19px;
  }
}
@media (max-width: 539px) {
  .blog .blogCard__link {
    font-size: 16px;
    margin-bottom: 5px;
  }
}
.blog .blogCardRow {
  -moz-column-gap: 20px;
       column-gap: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #343434;
  font-weight: 500;
}
@media (max-width: 1199px) {
  .blog .blogCardRow {
    font-size: 15px;
  }
}
@media (max-width: 539px) {
  .blog .blogCardRow {
    font-size: 14px;
  }
}
.blog .blogCardBox1 {
  display: flex;
  align-items: center;
  -moz-column-gap: 7px;
       column-gap: 7px;
}
.blog .blogCardBox1 i {
  color: #f75a5a;
}
.blog .blogCard__p {
  font-size: 16px;
  color: #343434;
  font-weight: 500;
}
@media (max-width: 1199px) {
  .blog .blogCard__p {
    font-size: 15px;
  }
}
@media (max-width: 539px) {
  .blog .blogCard__p {
    font-size: 14px;
  }
}
@media (max-width: 1023px) {
  .blog .blogBox2Holder {
    width: 100%;
  }
}
.blog .blogBox2 {
  width: 390px;
  padding: 25px 25px;
  margin-bottom: 30px;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.05);
}
@media (max-width: 1199px) {
  .blog .blogBox2 {
    width: 320px;
    padding: 15px 15px;
  }
}
@media (max-width: 1023px) {
  .blog .blogBox2 {
    width: 100%;
  }
}
@media (max-width: 539px) {
  .blog .blogBox2 {
    padding: 10px 10px;
    margin-bottom: 15px;
  }
}
.blog .blogBox2__h6 {
  color: #343434;
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
}
@media (max-width: 1199px) {
  .blog .blogBox2__h6 {
    font-size: 17px;
    margin-bottom: 10px;
  }
}
.blog .blogBox2Card {
  padding: 14px;
  background-color: #f8fbff;
  display: flex;
  align-items: flex-start;
  -moz-column-gap: 15px;
       column-gap: 15px;
  margin-bottom: 15px;
}
.blog .blogBox2Card:nth-last-child(1) {
  margin-bottom: 0;
}
.blog .blogBox2CardBox1 {
  width: 120px;
  height: 100px;
  background-color: #fff;
  overflow: hidden;
}
@media (max-width: 1799px) {
  .blog .blogBox2CardBox1 {
    width: 100px;
    height: 90px;
  }
}
.blog .blogBox2CardBox2 {
  width: calc(100% - 140px);
}
@media (max-width: 1799px) {
  .blog .blogBox2CardBox2 {
    width: calc(100% - 120px);
  }
}
.blog .blogBox2CardBox1__img {
  width: 100%;
  height: 100%;
}
.blog .blogBox2CardBox2__link {
  color: var(--main);
  transition: all 0.3s ease-in-out;
  font-size: 15px;
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
}
.blog .blogBox2CardBox2__link:hover {
  color: #00aef1;
}
@media (max-width: 1799px) {
  .blog .blogBox2CardBox2__link {
    font-size: 14px;
  }
}
.blog .blogBox2CardBox2-row {
  display: flex;
  align-items: center;
  -moz-column-gap: 7px;
       column-gap: 7px;
  font-size: 15px;
  font-weight: 500;
}
@media (max-width: 1799px) {
  .blog .blogBox2CardBox2-row {
    font-size: 15px;
  }
}
.blog .blogBox2CardBox2-row i {
  color: #f75a5a;
}
@media (max-width: 1799px) {
  .blog .blogBox2CardBox2-row i {
    font-size: 14px;
  }
}
.blog .pagination--blog {
  margin-top: 60px;
}
@media (max-width: 1199px) {
  .blog .pagination--blog {
    margin-top: 40px;
  }
}
.blog .blogDetCard__h2 {
  color: var(--main);
  font-size: 22px;
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
}
@media (max-width: 1799px) {
  .blog .blogDetCard__h2 {
    font-size: 30px;
  }
}
@media (max-width: 1399px) {
  .blog .blogDetCard__h2 {
    font-size: 24px;
  }
}
@media (max-width: 1199px) {
  .blog .blogDetCard__h2 {
    font-size: 21px;
  }
}
@media (max-width: 539px) {
  .blog .blogDetCard__h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }
}
.blog .blogDetCardRow {
  font-size: 18px;
  font-weight: 500;
}
@media (max-width: 539px) {
  .blog .blogDetCardRow {
    font-size: 14px;
  }
}
.blog .blogCard__det {
  line-height: 1.6;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 500;
}
@media (max-width: 1399px) {
  .blog .blogCard__det {
    font-size: 17px;
  }
}
@media (max-width: 1199px) {
  .blog .blogCard__det {
    font-size: 16px;
  }
}
@media (max-width: 539px) {
  .blog .blogCard__det {
    font-size: 15px;
  }
}
.blog .blogDetCardBox {
  margin-bottom: 30px;
}
@media (max-width: 768px) {
  .blog .blogDetCardBox {
    margin-bottom: 20px;
  }
}
.blog .blogDetCardBox__h6 {
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 7px;
}
@media (max-width: 1399px) {
  .blog .blogDetCardBox__h6 {
    font-size: 19px;
  }
}
@media (max-width: 1199px) {
  .blog .blogDetCardBox__h6 {
    font-size: 18px;
  }
}
@media (max-width: 539px) {
  .blog .blogDetCardBox__h6 {
    font-size: 16px;
  }
}
.blog .blogCard__det2 {
  line-height: 1.6;
  font-size: 20px;
  margin-bottom: 10px;
}
@media (max-width: 1399px) {
  .blog .blogCard__det2 {
    font-size: 18px;
  }
}
@media (max-width: 1199px) {
  .blog .blogCard__det2 {
    font-size: 16px;
  }
}
@media (max-width: 539px) {
  .blog .blogCard__det2 {
    font-size: 15px;
  }
}
.blog .blogBox1List__item {
  line-height: 1.6;
  font-size: 20px;
}
@media (max-width: 1399px) {
  .blog .blogBox1List__item {
    font-size: 18px;
  }
}
@media (max-width: 1199px) {
  .blog .blogBox1List__item {
    font-size: 16px;
  }
}
@media (max-width: 539px) {
  .blog .blogBox1List__item {
    font-size: 15px;
  }
}

.blogBoxCmnt {
  padding: 25px 25px;
  width: 100%;
  text-align: initial;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.05);
}
@media (max-width: 1199px) {
  .blogBoxCmnt {
    padding: 15px;
  }
}
.blogBoxCmnt .blogBoxCmnt__h2 {
  display: flex;
  align-items: center;
  -moz-column-gap: 10px;
       column-gap: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
}
@media (max-width: 1399px) {
  .blogBoxCmnt .blogBoxCmnt__h2 {
    font-size: 22px;
  }
}
@media (max-width: 1199px) {
  .blogBoxCmnt .blogBoxCmnt__h2 {
    font-size: 19px;
  }
}
@media (max-width: 539px) {
  .blogBoxCmnt .blogBoxCmnt__h2 {
    margin-bottom: 5px;
  }
}
.blogBoxCmnt .blogBoxCmnt__h2 i {
  color: #f75a5a;
}
.blogBoxCmnt .blogBoxCmntBox {
  padding: 22px 22px;
  background-color: #f9fafb;
  margin-bottom: 20px;
}
@media (max-width: 1199px) {
  .blogBoxCmnt .blogBoxCmntBox {
    padding: 18px 18px;
  }
}
.blogBoxCmnt .blogBoxCmntBox__row {
  -moz-column-gap: 10px;
       column-gap: 10px;
  margin-bottom: 10px;
}
.blogBoxCmnt .blogBoxCmntBox__row i {
  font-size: 34px;
  color: #f75a5a;
}
@media (max-width: 1399px) {
  .blogBoxCmnt .blogBoxCmntBox__row i {
    font-size: 29px;
  }
}
@media (max-width: 1199px) {
  .blogBoxCmnt .blogBoxCmntBox__row i {
    font-size: 24px;
  }
}
@media (max-width: 539px) {
  .blogBoxCmnt .blogBoxCmntBox__row i {
    font-size: 20px;
  }
}
.blogBoxCmnt .blogBoxCmntBox__row span {
  font-size: 20px;
}
@media (max-width: 1399px) {
  .blogBoxCmnt .blogBoxCmntBox__row span {
    font-size: 18px;
  }
}
@media (max-width: 1199px) {
  .blogBoxCmnt .blogBoxCmntBox__row span {
    font-size: 16px;
  }
}
.blogBoxCmnt .blogBoxCmntBox__date {
  font-size: 14px;
  color: var(--main);
  margin-bottom: 10px;
  font-weight: 500;
}
.blogBoxCmnt .blogBoxCmntBox__p {
  font-size: 18px;
  line-height: 1.8;
}
@media (max-width: 1399px) {
  .blogBoxCmnt .blogBoxCmntBox__p {
    font-size: 16px;
  }
}
@media (max-width: 539px) {
  .blogBoxCmnt .blogBoxCmntBox__p {
    font-size: 14px;
  }
}
.blogBoxCmnt .blogBoxCmnt__hr {
  width: 100%;
  height: 1px;
  background-color: #dee2e6;
  margin-bottom: 30px;
}
@media (max-width: 539px) {
  .blogBoxCmnt .blogBoxCmnt__hr {
    margin-bottom: 18px;
  }
}
.blogBoxCmnt .blogBoxCmnt__h3 {
  font-size: 26px;
  color: #00aef1;
  margin-bottom: 20px;
}
@media (max-width: 1399px) {
  .blogBoxCmnt .blogBoxCmnt__h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
}
@media (max-width: 539px) {
  .blogBoxCmnt .blogBoxCmnt__h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
}

.form {
  width: 100%;
  padding: 20px 20px;
  background-color: #ebf5ff;
}
@media (max-width: 767px) {
  .form {
    padding: 15px;
  }
}
.form .form__msg {
  width: 100%;
  border: none;
  outline: none;
  padding: 15px 15px;
  background-color: #fff;
  height: 150px;
  color: #b7b7b7;
  margin-bottom: 15px;
}
.form .form__msg::-moz-placeholder {
  color: #b7b7b7;
}
.form .form__msg::placeholder {
  color: #b7b7b7;
}
@media (max-width: 767px) {
  .form .form__msg {
    height: 120px;
    margin-bottom: 12px;
  }
}
.form .form__input {
  width: 100%;
  border: none;
  outline: none;
  padding: 15px 15px;
  background-color: #fff;
  height: 50px;
  color: #b7b7b7;
  margin-bottom: 15px;
}
.form .form__input::-moz-placeholder {
  color: #b7b7b7;
}
.form .form__input::placeholder {
  color: #b7b7b7;
}
@media (max-width: 1199px) {
  .form .form__input {
    font-size: 14px;
  }
}
@media (max-width: 767px) {
  .form .form__input {
    height: 44px;
    margin-bottom: 12px;
  }
}
@media (max-width: 539px) {
  .form .form__input {
    padding: 8px 15px;
    height: 40px;
  }
}
.form .form__btn {
  background-color: #00aef1;
  padding: 13px 50px;
  font-size: 18px;
  color: #fff;
}
.form .form__btn:hover {
  background-color: #fff;
  color: #00aef1;
}
@media (max-width: 1399px) {
  .form .form__btn {
    padding: 11px 40px;
    font-size: 16px;
  }
}
@media (max-width: 1199px) {
  .form .form__btn {
    padding: 10px 30px;
    font-size: 14px;
  }
}
@media (max-width: 539px) {
  .form .form__btn {
    padding: 8px 20px;
    font-size: 14px;
  }
}

.blogBox2List {
  display: flex;
  align-items: center;
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.blogBox2List .blogBox2List__link {
  width: 40px;
  height: 40px;
  background-color: #f8fbff;
  font-size: 16px;
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
  color: #f75a5a;
}
.blogBox2List .blogBox2List__link .fa-linkedin {
  color: #076b92;
}
.blogBox2List .blogBox2List__link .fa-tiktok {
  color: #333;
}/*# sourceMappingURL=blog.css.map */

</style>