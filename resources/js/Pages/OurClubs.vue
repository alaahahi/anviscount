<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
</script>
<template>
    <MainLayout>
        <section class="clubs-sec">
		<div class="container">
			<h2 class="section-hdng section-hdng--clubs-sec">النوادي والدورات</h2>
			<ul class="clubs-secList"  role="tablist">
				<li class="orPagList__item" role="presentation">
					<div class="clubs-secList__btn active" data-bs-toggle="pill" data-bs-target="#allorders" type="button" role="tab" aria-selected="true">
						نوادي اللّغة العربيّة
					</div>
				</li>
				<li class="orPagList__item" role="presentation">
					<div class="clubs-secList__btn" data-bs-toggle="pill" data-bs-target="#toshippingorders" type="button" role="tab" aria-selected="false">
						نوادٍ إبداعية
					</div>
				</li>
				<li class="orPagList__item" role="presentation">
					<div class="clubs-secList__btn" data-bs-toggle="pill" data-bs-target="#completeorders" type="button" role="tab" aria-selected="false">
						النادي الصّيفي
					</div>
				</li>
				<li class="orPagList__item" role="presentation">
					<div class="clubs-secList__btn" data-bs-toggle="pill" data-bs-target="#canceledorders" type="button" role="tab" aria-selected="false">
						دورات تدريبيّة للكبار
					</div>
				</li>
			</ul>
			<div class="tab-content clubsContent" id="pills-tabContent">
				<div class="tab-pane fade show active" id="allorders" role="tabpanel" tabindex="0">
					<div class="clubsContentTab">
						<div class="clubsContentTabBox1">
							<img src="/assets/images/clubs/1.png" alt="" class="clubsContentTabBox1__img">
						</div>
						<div class="clubsContentTabBox2">
							<h3 class="clubsContentTabBox2__h3">نوادي اللّغة العربيّة</h3>
							<p class="clubsContentTabBox2__p">
								نقدّم منهجاً مبسّطاً بأسلوب تفاعليّ يتضمّن الكثير من الألعاب التّعليميّة والفنون والقصص والدّراما؛ لنوفّر للطّفل فرصة التّعبير عن نفسهِ وتعلّم مهارات إبداعيّة جديدة باللّغة العربيّة، لكلّ من النّاطقين باللّغة العربيّة وغير الناطقين بها.
							</p>
							<p class="clubsContentTabBox2__p">
								من سنّ 4 سنوات فما فوق
							</p>
							<p class="clubsContentTabBox2__p">
								في المركز أو عن بعد أو في البيوت
							</p>
							<a href="contact-us.html" class="clubsContentTabBox2-btn flex-a"> التسجيل في النادي</a>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="toshippingorders" role="tabpanel" tabindex="0">
					<div class="clubsContentTab">
						<div class="clubsContentTabBox1">
							<img src="/assets/images/clubs/2.png" alt="" class="clubsContentTabBox1__img">
						</div>
						<div class="clubsContentTabBox2">
							<h3 class="clubsContentTabBox2__h3">نوادٍ إبداعية</h3>
							<p class="clubsContentTabBox2__p">
								وفيها كلّ ما يجمع الثّقافة العربيّة بفنونها وأصالتها بأسلوب إبداعيّ مرح مميّز يحاكي فكر الطّفل في مراحله المختلفة، وتشمل: الكتابة الإبداعيّة، الدّراما، سطور من القرآن، الكورال.
							</p>
							<a href="contact-us.html" class="clubsContentTabBox2-btn flex-a"> التسجيل في النادي</a>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="completeorders" role="tabpanel" tabindex="0">
					<div class="clubsContentTab">
						<div class="clubsContentTabBox1">
							<img src="/assets/images/clubs/3.png" alt="" class="clubsContentTabBox1__img">
						</div>
						<div class="clubsContentTabBox2">
							<h3 class="clubsContentTabBox2__h3">النادي الصّيفي</h3>
							<p class="clubsContentTabBox2__p">
								يتضمن 4 نواد:
							</p>
							<p class="clubsContentTabBox2__p">
								1- نـادي الــقــراءة والــكــتــابــة الإبــداعــيــة: ( الحروف الأبجدية - تكوين الكلمات - ألعاب تفاعلية - كتابة إبداعية - محادثة ومفردات - قصص وخيال )
							</p>
							<p class="clubsContentTabBox2__p">
								2- نـادي ســطــور مــن الــقــرآن: ( مخارج الحروف - تحليل الكلمات صوتياً -  إدراك الفصاحة والبلاغة - قصص من القرآن و قصص الأنبياء )
							</p>
							<p class="clubsContentTabBox2__p">
								3- نـادي الــــدرامـــــا : (  دعم لغة الجسد - لعب الأدوار - التعبير عن الذات -  كسر الجمود والخجل والخوف - الارتجال )
							</p>
							<p class="clubsContentTabBox2__p">
								4- نادي الفنون والمهارات الإبداعية : ( موسيقى - أشغال يدوية -  أغانٍ عربية للأطفال - فن تزيين الطعام - سحر التفاعلات العلمية -  مهارات الحياة العملية - صناعة دمى )
							</p>
							<a href="contact-us.html" class="clubsContentTabBox2-btn flex-a"> التسجيل في النادي</a>
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="canceledorders" role="tabpanel" tabindex="0">
					<div class="clubsContentTab">
						<div class="clubsContentTabBox1">
							<img src="/assets/images/clubs/4.png" alt="" class="clubsContentTabBox1__img">
						</div>
						<div class="clubsContentTabBox2">
							<h3 class="clubsContentTabBox2__h3">دورات تدريبيّة للكبار</h3>
							<p class="clubsContentTabBox2__p">
								ورشات ودورات باللّغة العربيّة للموظّفين والعاملين والأمّهات والمعلّمات، مثل: القراءة أسلوب حياة، التّعليم الإبداعيّ للّغة العربيّة، الكتابة الإبداعيّة، منهجيّات سرد القصّة.
							</p>
							<a href="contact-us.html" class="clubsContentTabBox2-btn flex-a"> التسجيل في النادي</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--  ourstory end -->
	<section class="arabicClub">
		<h2 class="arabicClub__bg arabicClub__bg1">ض</h2>
		<h2 class="arabicClub__bg arabicClub__bg2">د</h2>
		<div class="container">
			<h3 class="arabicClub__h3">مراحل نوادي اللّغة العربيّة</h3>
			<p class="arabicClub__p">
				نحدّد مستوى مهارات الطّفل باللّغة العربيّة بناءً على المحاور التّالية: الفهم والتّعبير والقراءة والكتابة والنّحو، ثمّ نحدّد مرحلته الحاليّة سواء كانت تأسيسًا أو تقويةً،
				ليصل إلى المستوى المطلوب منه في عمره والّذي يؤهّله إما إلى منهج إبداعيّ أو متابعة للمنهج المدرسيّ.
			</p>
			<div class="arabicClubBox">
				<div class="arabicClubBoxNumber">
					<span class="arabicClubBoxNumber__num arabicClubBoxNumber__num1">1</span>
					<p class="arabicClubBoxNumber__p">تأسيس حتى التمكين</p>
				</div>
				<div class="arabicClubBoxLine"></div>
				<div class="arabicClubBoxNumber">
					<span class="arabicClubBoxNumber__num arabicClubBoxNumber__num2">2</span>
					<p class="arabicClubBoxNumber__p">تأسيس حتى التمكين</p>
				</div>
				<div class="arabicClubBoxLine"></div>
				<div class="arabicClubBoxNumber">
					<span class="arabicClubBoxNumber__num arabicClubBoxNumber__num3">3</span>
					<p class="arabicClubBoxNumber__p">تأسيس حتى التمكين</p>
				</div>
			</div>
			<div class="row arabicClubRow">
				<div class="col-lg-6 col-xl-6 col-md-12 col-sm-12">
					<div class="arabicClubInfo">
						<h3 class="arabicClubInfo__h3">طريقة التّسجيل في نوادي بيت عربي</h3>
						<p class="arabicClubInfo__desc">
							1. تحديد مستوى مهارات الطّفل باللّغة العربيّة بناءً على المحاور الآتية: الفهم، التّعبير، القراءة، الكتابة، النّحو
						</p>
						<p class="arabicClubInfo__desc">
							2. نضع له الخطّة المناسبة.
						</p>
						<p class="arabicClubInfo__desc">
							3. نقترح النّادي الأفضل له، إن كان خاصّاً أو ثنائيّاً أو مجموعةً.
						</p>
						<a href="#" target="_blank" class="arabicClubInfo__btn">احجز موعداَ لتحديد مستوى طفلك</a>
					</div>
				</div>
				<div class="col-lg-6 col-xl-6 col-md-12 col-sm-12">
					<img src="/assets/images/clubs/5.webp" alt="" class="arabicClub__img">
				</div>
			</div>
		</div>
	</section>
    </MainLayout>
</template>
<style scoped>
.arabicClub {
  padding: 50px 0 70px 0;
  position: relative;
  z-index: 1;
}
@media (max-width: 1199px) {
  .arabicClub {
    padding: 30px 0 40px 0;
  }
}
@media (max-width: 767px) {
  .arabicClub {
    padding: 20px 0 30px 0;
  }
}
.arabicClub .arabicClub__bg {
  opacity: 0.2;
  display: block;
  position: absolute;
  font-size: 335px;
  color: transparent;
  top: 0;
  z-index: -1;
  left: 10px;
  -webkit-text-stroke: 1px #00aef1;
  text-shadow: 15px 15px 1px #00aef1;
  line-height: 1;
}
@media (max-width: 1799px) {
  .arabicClub .arabicClub__bg {
    font-size: 250px;
  }
}
@media (max-width: 1199px) {
  .arabicClub .arabicClub__bg {
    font-size: 190px;
  }
}
@media (max-width: 1023px) {
  .arabicClub .arabicClub__bg {
    font-size: 140px;
    text-shadow: 5px 5px 1px #00aef1;
  }
}
@media (max-width: 767px) {
  .arabicClub .arabicClub__bg {
    font-size: 90px;
    left: 20px;
  }
}
.arabicClub .arabicClub__bg2 {
  top: auto;
  bottom: 200px;
  right: 20px;
  transform: rotate(-25deg);
  -webkit-text-stroke: 1px #eb258f;
  text-shadow: 15px 15px 1px #1892c1;
}
@media (max-width: 1023px) {
  .arabicClub .arabicClub__bg2 {
    bottom: 400px;
    right: 0;
  }
}
.arabicClub .arabicClub__h3 {
  font-size: 30px;
  text-align: center;
  color: var(--secondary-color);
  margin-bottom: 15px;
}
@media (max-width: 539px) {
  .arabicClub .arabicClub__h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
}
.arabicClub .arabicClub__p {
  font-size: 20px;
  line-height: 1.7;
  color: #333;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 50px auto;
}
@media (max-width: 1199px) {
  .arabicClub .arabicClub__p {
    margin: 0 auto 30px auto;
  }
}
@media (max-width: 539px) {
  .arabicClub .arabicClub__p {
    font-size: 16px;
    margin: 0 auto 20px auto;
  }
}
.arabicClub .arabicClubBox {
  width: 780px;
  margin: 0 auto 100px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 1199px) {
  .arabicClub .arabicClubBox {
    margin: 0 auto 60px auto;
  }
}
@media (max-width: 1023px) {
  .arabicClub .arabicClubBox {
    width: 100%;
  }
}
@media (max-width: 539px) {
  .arabicClub .arabicClubBox {
    margin-bottom: 20px;
  }
}
.arabicClub .arabicClubBoxNumber {
  width: 140px;
  text-align: center;
}
@media (max-width: 1023px) {
  .arabicClub .arabicClubBoxNumber {
    width: 110px;
  }
}
@media (max-width: 539px) {
  .arabicClub .arabicClubBoxNumber {
    width: 60px;
  }
}
.arabicClub .arabicClubBoxNumber__p {
  font-size: 18px;
}
@media (max-width: 1023px) {
  .arabicClub .arabicClubBoxNumber__p {
    font-size: 15px;
  }
}
@media (max-width: 539px) {
  .arabicClub .arabicClubBoxNumber__p {
    font-size: 12px;
  }
}
.arabicClub .arabicClubBoxNumber__num {
  font-size: 150px;
  line-height: 1;
  font-family: "Cabin Sketch", cursive;
}
@media (max-width: 1199px) {
  .arabicClub .arabicClubBoxNumber__num {
    font-size: 120px;
  }
}
@media (max-width: 1023px) {
  .arabicClub .arabicClubBoxNumber__num {
    font-size: 100px;
  }
}
@media (max-width: 539px) {
  .arabicClub .arabicClubBoxNumber__num {
    font-size: 50px;
  }
}
.arabicClub .arabicClubBoxNumber__num1 {
  color: #00aef1;
}
.arabicClub .arabicClubBoxNumber__num2 {
  color: #ffcc2a;
}
.arabicClub .arabicClubBoxNumber__num3 {
  color: #ec3137;
}
.arabicClub .arabicClubBoxLine {
  position: relative;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  border-bottom: 5px dashed #00aef1;
}
@media (max-width: 1023px) {
  .arabicClub .arabicClubBoxLine {
    width: 160px;
    height: 80px;
  }
}
@media (max-width: 539px) {
  .arabicClub .arabicClubBoxLine {
    width: 70px;
    height: 35px;
  }
}
.arabicClub .arabicClubInfo__h3 {
  font-size: 32px;
  color: var(--secondary-color);
  margin-bottom: 30px;
}
@media (max-width: 1399px) {
  .arabicClub .arabicClubInfo__h3 {
    font-size: 28px;
    margin-bottom: 20px;
  }
}
@media (max-width: 539px) {
  .arabicClub .arabicClubInfo__h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }
}
.arabicClub .arabicClubInfo__desc {
  font-size: 20px;
  color: #666;
  margin-bottom: 15px;
}
@media (max-width: 1399px) {
  .arabicClub .arabicClubInfo__desc {
    font-size: 18px;
  }
}
@media (max-width: 539px) {
  .arabicClub .arabicClubInfo__desc {
    font-size: 16px;
  }
}
.arabicClub .arabicClubInfo__btn {
  font-size: 28px;
  width: -moz-fit-content;
  width: fit-content;
  color: var(--light-color);
  padding: 8px 50px;
  text-decoration: none;
  border-radius: 50px;
  background-color: #00aef1;
  border-bottom: 6px solid #076b92;
  margin-top: 40px;
}
.arabicClub .arabicClubInfo__btn:hover {
  color: var(--light-color);
  background-color: #eb2690;
  border-bottom: 6px solid #b81f70;
}
@media (max-width: 1399px) {
  .arabicClub .arabicClubInfo__btn {
    padding: 8px 30px;
    font-size: 24px;
  }
}
@media (max-width: 1199px) {
  .arabicClub .arabicClubInfo__btn {
    padding: 8px 25px;
    font-size: 20px;
    margin-top: 30px;
  }
}
@media (max-width: 767px) {
  .arabicClub .arabicClubInfo__btn {
    padding: 7px 20px;
    font-size: 18px;
    margin-top: 15px;
  }
}
@media (max-width: 539px) {
  .arabicClub .arabicClubInfo__btn {
    padding: 6px 14px;
    font-size: 15px;
    margin-top: 15px;
  }
}
.arabicClub .arabicClub__img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 15px;
  height: 467px;
}
@media (max-width: 1399px) {
  .arabicClub .arabicClub__img {
    height: 370px;
  }
}
@media (max-width: 767px) {
  .arabicClub .arabicClub__img {
    height: 270px;
  }
}
@media (max-width: 539px) {
  .arabicClub .arabicClub__img {
    height: 200px;
    border-radius: 10px;
  }
}
.arabicClub .arabicClubRow {
  align-items: center;
}
@media (max-width: 1023px) {
  .arabicClub .arabicClubRow {
    row-gap: 25px;
  }
}/*# sourceMappingURL=our-clubs.css.map */
</style>