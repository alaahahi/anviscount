<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
</script>
<template>
	<MainLayout>
	<!-- subbanner end -->
	<section class="ourstory">
		<div class="container">
			<h2 class="section-hdng section-hdng--ourstory">حكايتنا</h2>
			<h4 class="ourstory__subHdng">حكاية بيت عربي و انطلاقته</h4>
			<ul class="ourstoryList"  role="tablist">
				<li class="ourstoryList__item" role="presentation">
					<div class="ourstoryList__btn active" data-bs-toggle="pill" data-bs-target="#b1" type="button" role="tab" aria-selected="true">
						رسالتنا
					</div>
				</li>
				<li class="ourstoryList__item" role="presentation">
					<div class="ourstoryList__btn" data-bs-toggle="pill" data-bs-target="#b2" type="button" role="tab" aria-selected="false">
						رؤيتنا
					</div>
				</li>
				<li class="ourstoryList__item" role="presentation">
					<div class="ourstoryList__btn" data-bs-toggle="pill" data-bs-target="#b3" type="button" role="tab" aria-selected="false">
						أهدافنا
					</div>
				</li>
			</ul>
			<div class="tab-content" id="pills-tabContent">
				<div class="tab-pane fade show active" id="b1" role="tabpanel" tabindex="0">
					<p class="ourstory__tabPara">
						"بيت عربي" مشروع مجتمعيّ ثقافيّ ينطلق من أهمّيّة القراءة والحكايات والتّعلّم النّشط والتّعبير الإبداعيّ، لتأكيد استخدامها كمنجيّة للمعرفة والمتعة من جهة، وتعزيز علاقة أطفالنا بلغتهم العربيّة الأمّ من جهة أخرى
					</p>
				</div>
				<div class="tab-pane fade" id="b2" role="tabpanel" tabindex="0">
					<p class="ourstory__tabPara">
						بيت عربي يفتح لأطفال العالم أبواب الحكايات والفنون لقراءةٍ أكثر متعة وعربي أجمل وطفولة أكثر إبداعًا
					</p>
				</div>
				<div class="tab-pane fade" id="b3" role="tabpanel" tabindex="0">
					<p class="ourstory__tabPara">
						تقديم وإيصال اللّغة العربيّة للأطفال النّاطقين وغير النّاطقين بها بــمنهجيّة تفاعليّة وسلسة، رفع وعي الأهالي عموماً والأمّهات خصوصاً بــأهمّيّة استعادة الحكايات وسردها، تدريب المعلّمات والمعلّمين والأمّهات لــسرد القصص، وتعليم اللّغة العربيّة بــطريقة ممتعة ومحبّبة.
					</p>
				</div>
			</div>
			<img src="/assets/images/out-story/1.png" alt="" class="ourstory__img">
			<div class="ourstoryCard">
				<div class="row">
					<div class="col-md-2 col-sm-12">
						<h2 class="ourstoryCard__hdng"> مرحلة التّأسيس </h2>
					</div>
					<div class="col-md-10 col-sm-12">
						<p class="ourstoryCard__desc">
							بدأتُ المشروع مع مجموعة من المُختصّات بتعليــــم اللّغـــــــة والفنــــــون مــــن الصّديقات، أمّهات ومعلّمات ومدرّبات، جمعنا الإيمان بأهمّيّة رسالتنا لأطفالنا وكلّ أطفال العالم العربيّ كانت أنشطتنا في البداية عبارة عن مجموعة فعاليّات صغيرة تتضمّن سرد قصّة باللّغة العربيّة ترافقها ورشة فنّيّة صغيرة وأغانٍ ونشاط حركيّ وكلّها مرتبطة بالقصّة نقدّمها في دور الحضانة المبكّرة والمدارس في أبوظبي بشكل تطوّعيّ. وبدأ العمل يأخذ شكلًا أكبر . والفعاليّات تتضمّن عروض مسرح دمى وظل للأطفال من تأليف الفريق وتمثيله وتنفيذه، معارض كتب، والكثير من الأنشطة والأندية الثّقافيّة الفنّيّة لإعادة بريق الحكايات باللّغة العربيّة.
						</p>
					</div>
				</div>
			</div>
			<div class="ourstoryCard">
				<div class="row">
					<div class="col-md-2 col-sm-12">
						<h2 class="ourstoryCard__hdng">بداية العمل</h2>
					</div>
					<div class="col-md-10 col-sm-12">
						<p class="ourstoryCard__desc">
							وصلت أنشطتنا وفعاليّاتنا حتّى الآن إلى أكثر من خمسة عشر ألف طفل داخل دولة الإمارات العربيّة المتّحدة في الكثير من المراكز الثّقافيّة والتّربويّة الخاصّة والعامّة، كالمراكز التّجاريّة، الحدائق، المدارس، والمهرجانات، وكان ذلك بالتّعاون مع العديد من الهيئات والمؤسّسات الحكوميّة والخاصّة.
						</p>
					</div>
				</div>
			</div>
			<div class="ourstoryCard">
				<div class="row">
					<div class="col-md-2 col-sm-12">
						<h2 class="ourstoryCard__hdng">انطلاقة المشروع</h2>
					</div>
					<div class="col-md-10 col-sm-12">
						<p class="ourstoryCard__desc">
							في سبتمبر 2018 تمّ افتتاح مركزنا في أبو ظبي لتقديم العديد من أنشطتنا وأنديتنا المستمرّة على مدار العام، والّتي تهدف إلى تعزيز اللّغة العربيّة وتعليمها للنّاطقين بها وغير النّاطقين بها، بطريقة مرحة تفاعليّة ومبتكرة.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--  ourstory end -->
	<section class="ourteam">
		<div class="container">
			<h3 class="ourteam__h3">فريق بيت عربي</h3>
			<div class="row ourteam-row">
				<div class="col-lg-4 col-xl-4 col-md-6 col-sm-12">
					<div class="ourteamCrd">
						<img src="/assets/images/team/1.jpeg" alt="" class="ourteamCrd__img">
						<h2 class="ourteamCrd__h2">سماح السباعنة</h2>
						<h2 class="ourteamCrd__h6"> مؤسِّس شركة البوابة العربية ومشروع بيت عربي </h2>
						<p class="ourteamCrd__par">
							أمّ، باحثة اجتماعيّة، مدرّبة، وقاصّة، مؤسِّسة مشروع بيت عربي ومديرة مؤسَّسَة البوّابة العربيّة لإدارة الفعاليّات، حاصلة على بكالوريوس علم الاجتماع من جامعة دمشق، عملت بعدّة مؤسّسات دوليّة ومنظّمات غير ربحيّة، مختصّة بالتّنمية الاجتماعيّة والثّقافيّة في كلّ من سوريا والأردن ولبنان.
						</p>
					</div>
				</div>
				<div class="col-lg-4 col-xl-4 col-md-6 col-sm-12">
					<div class="ourteamCrd">
						<img src="/assets/images/team/2.jpeg" alt="" class="ourteamCrd__img">
						<h2 class="ourteamCrd__h2">مرح نصر صوفان</h2>
						<h2 class="ourteamCrd__h6"> مسؤولة قسم التّسجيل </h2>
						<p class="ourteamCrd__par">
							خرّيجة أدب إنكليزي كلّيّة الآداب والعلوم الإنسانيّة جامعة دمشق، خبرة بالتّعامل مع الأطفال من عمر 4 حتى 15 وتدريس اللّغتين العربيّة والإنكليزيّة، أؤمن باللّغة العربيّة (لغتنا الأمّ) على أنّها أغنى لغات العالم، وهذا هو شغفنا في بيت عربي، من أعظم لحظاتي في بيت عربي رؤية طفل متصالح مع اللّغة العربيّة، ويستمتع باستخدامها للتّعبير عن نفسه.
						</p>
					</div>
				</div>
				<div class="col-lg-4 col-xl-4 col-md-6 col-sm-12">
					<div class="ourteamCrd">
						<img src="/assets/images/team/3.jpeg" alt="" class="ourteamCrd__img">
						<h2 class="ourteamCrd__h2"> رؤى خالد سوّاحه </h2>
						<h2 class="ourteamCrd__h6"> مسؤولة قسم التّقنية </h2>
						<p class="ourteamCrd__par">
							مبرمجة تطبيقات موبايل، مدرّبة برمجة وربوتيك للأطفال والبالغين، خرّيجة كلّيّة الهندسة الكهربائيّة والإلكترونيّة قسم هندسة الحواسيب جامعة حلب، أفتخر بعملي كمتطوّعة وصول ميدانيّ في جمعيّة التّآلف بالتّشارك مع المفوضيّة السّاميّة للآجئين UNHCR، أحبُّ الطّبيعة والبحر، أحلم بزيارة دول العالم والتّعرف على الأماكن الجميلة فيها، أحبُّ اللّغة العربيّة وأؤمن بأهمّيّة المحافظة عليها وتعليمها لأجيال التّكنولوجيا والحواسيب المحمولة، وهذا ما نؤمن به في بيت عربي.
						</p>
					</div>
				</div>
				<div class="col-lg-4 col-xl-4 col-md-6 col-sm-12">
					<div class="ourteamCrd">
						<img src="/assets/images/team/4.jpeg" alt="" class="ourteamCrd__img">
						<h2 class="ourteamCrd__h2"> نيرمين عارف عبدالله </h2>
						<h2 class="ourteamCrd__h6"> معلّمة لغة عربيّة </h2>
						<p class="ourteamCrd__par">
							حاصلة على إجازة جامعيّة في اللّغة العربيّة -كليّة الآداب والعلوم الإنسانيّة، وإجازة دبلوم التّأهيل التّربويّ- كليّة التّربية.
							أؤمن بالخير الذي سيعمُّ العالم إن أحببنا بعضنا، وقدّمنا الدّعم لأنفسنا وللآخرين، فكلّ يومٍ جديدٍ في حياتنا هو هبةٌ من الله تعالى لنكون أفضل..
						</p>
					</div>
				</div>
				<div class="col-lg-4 col-xl-4 col-md-6 col-sm-12">
					<div class="ourteamCrd">
						<img src="/assets/images/team/5.jpeg" alt="" class="ourteamCrd__img">
						<h2 class="ourteamCrd__h2"> جوليا فادي العلي </h2>
						<h2 class="ourteamCrd__h6"> طفلة بيت عربي </h2>
						<p class="ourteamCrd__par">
							أنا اسمي جوليا، لون عيوني بنّيّ وأحبّ المثلّجات، عمري أحد عشر عامًا، ولا أحبّ أنّني أصغر طفلة في صفّي، أنا الآن في الصّفّ السّادس، قصّتي المفضّلة هي البطّيخة، ولا أحبّ الرّوايات الطّويلة.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	</MainLayout>
</template>
<style scoped>
img {
    display: unset; 
}

.ourstory {
  padding: 35px 0 50px 0;
}
@media (max-width: 1799px) {
  .ourstory {
    padding: 28px 0 20px 0;
  }
}
.ourstory .ourstory__subHdng {
  text-align: center;
  font-size: 32px;
  color: #00a85a;
  margin-bottom: 25px;
}
@media (max-width: 1799px) {
  .ourstory .ourstory__subHdng {
    font-size: 28px;
  }
}
@media (max-width: 1399px) {
  .ourstory .ourstory__subHdng {
    font-size: 24px;
  }
}
@media (max-width: 1199px) {
  .ourstory .ourstory__subHdng {
    font-size: 20px;
    margin-bottom: 20px;
  }
}
@media (max-width: 767px) {
  .ourstory .ourstory__subHdng {
    font-size: 17px;
    margin-bottom: 15px;
  }
}
.ourstory .ourstoryList {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 12px;
  background-color: #f0f6ff;
  border-radius: 100px;
  -moz-column-gap: 40px;
       column-gap: 40px;
  margin-bottom: 25px;
}
@media (max-width: 1799px) {
  .ourstory .ourstoryList {
    padding: 10px 10px;
    -moz-column-gap: 30px;
         column-gap: 30px;
  }
}
@media (max-width: 1199px) {
  .ourstory .ourstoryList {
    -moz-column-gap: 25px;
         column-gap: 25px;
  }
}
@media (max-width: 767px) {
  .ourstory .ourstoryList {
    padding: 9px 10px;
    margin-bottom: 15px;
  }
}
.ourstory .ourstoryList__btn {
  padding: 2px 15px;
  font-size: 26px;
}
.ourstory .ourstoryList__btn.active {
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 50px;
}
@media (max-width: 1799px) {
  .ourstory .ourstoryList__btn {
    padding: 2px 15px;
    font-size: 22px;
  }
}
@media (max-width: 1399px) {
  .ourstory .ourstoryList__btn {
    padding: 2px 13px;
    font-size: 19px;
  }
}
@media (max-width: 767px) {
  .ourstory .ourstoryList__btn {
    padding: 1px 10px;
    font-size: 17px;
  }
}
.ourstory .ourstory__tabPara {
  color: #333;
  font-size: 28px;
  line-height: 1.5;
  margin-bottom: 40px;
}
@media (max-width: 1799px) {
  .ourstory .ourstory__tabPara {
    font-size: 25px;
    margin-bottom: 30px;
  }
}
@media (max-width: 1399px) {
  .ourstory .ourstory__tabPara {
    font-size: 22px;
    margin-bottom: 30px;
  }
}
@media (max-width: 1199px) {
  .ourstory .ourstory__tabPara {
    font-size: 20px;
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .ourstory .ourstory__tabPara {
    font-size: 17px;
  }
}
.ourstory .ourstory__img {
  width: 100%;
  height: 448px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 10px;
  margin-bottom: 50px;
}
@media (max-width: 1399px) {
  .ourstory .ourstory__img {
    height: 378px;
    margin-bottom: 30px;
  }
}
@media (max-width: 1199px) {
  .ourstory .ourstory__img {
    height: 318px;
    margin-bottom: 20px;
  }
}
@media (max-width: 767px) {
  .ourstory .ourstory__img {
    height: 200px;
  }
}
.ourstory .ourstoryCard {
  min-height: 100px;
  height: -moz-max-content;
  height: max-content;
  padding: 30px 30px 50px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}
.ourstory .ourstoryCard:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}
@media (max-width: 1799px) {
  .ourstory .ourstoryCard {
    padding: 20px 25px 40px 25px;
  }
}
@media (max-width: 1199px) {
  .ourstory .ourstoryCard {
    padding: 20px 20px 30px 20px;
  }
}
@media (max-width: 1023px) {
  .ourstory .ourstoryCard {
    margin-bottom: 20px;
  }
}
.ourstory .ourstoryCard__hdng {
  font-size: 30px;
  color: var(--secondary-color);
}
@media (max-width: 1799px) {
  .ourstory .ourstoryCard__hdng {
    font-size: 27px;
  }
}
@media (max-width: 1199px) {
  .ourstory .ourstoryCard__hdng {
    font-size: 22px;
  }
}
.ourstory .ourstoryCard__desc {
  color: #333;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.7;
}
@media (max-width: 1799px) {
  .ourstory .ourstoryCard__desc {
    font-size: 20px;
  }
}
@media (max-width: 1199px) {
  .ourstory .ourstoryCard__desc {
    font-size: 18px;
  }
}
@media (max-width: 767px) {
  .ourstory .ourstoryCard__desc {
    font-size: 16px;
  }
}

.ourteam {
  padding: 0 0 40px 0;
}
.ourteam .ourteam__h3 {
  font-size: 71px;
  text-align: center;
  color: var(--secondary-color);
  margin-bottom: 55px;
}
@media (max-width: 1799px) {
  .ourteam .ourteam__h3 {
    font-size: 60px;
    margin-bottom: 40px;
  }
}
@media (max-width: 1399px) {
  .ourteam .ourteam__h3 {
    font-size: 50px;
    margin-bottom: 30px;
  }
}
@media (max-width: 1199px) {
  .ourteam .ourteam__h3 {
    font-size: 40px;
  }
}
@media (max-width: 767px) {
  .ourteam .ourteam__h3 {
    font-size: 30px;
    margin-bottom: 15px;
  }
}
.ourteam .ourteam-row {
  row-gap: 50px;
}
@media (max-width: 1799px) {
  .ourteam .ourteam-row {
    row-gap: 40px;
  }
}
@media (max-width: 1199px) {
  .ourteam .ourteam-row {
    row-gap: 25px;
  }
}
.ourteam .ourteamCrd {
  text-align: center;
}
.ourteam .ourteamCrd__img {
  width: 180px;
  height: 180px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 50%;
  margin-bottom: 30px;
}
@media (max-width: 1799px) {
  .ourteam .ourteamCrd__img {
    width: 160px;
    height: 160px;
    margin-bottom: 20px;
  }
}
@media (max-width: 1399px) {
  .ourteam .ourteamCrd__img {
    width: 150px;
    height: 150px;
  }
}
@media (max-width: 1199px) {
  .ourteam .ourteamCrd__img {
    width: 120px;
    height: 120px;
  }
}
@media (max-width: 539px) {
  .ourteam .ourteamCrd__img {
    width: 110px;
    height: 110px;
    margin-bottom: 10px;
  }
}
.ourteam .ourteamCrd__h2 {
  font-size: 24px;
  margin-bottom: 5px;
  color: var(--secondary-color);
}
@media (max-width: 1799px) {
  .ourteam .ourteamCrd__h2 {
    font-size: 21px;
  }
}
@media (max-width: 1199px) {
  .ourteam .ourteamCrd__h2 {
    font-size: 19px;
  }
}
.ourteam .ourteamCrd__h6 {
  font-size: 21px;
  color: var(--primary-color);
  margin-bottom: 10px;
}
@media (max-width: 1799px) {
  .ourteam .ourteamCrd__h6 {
    font-size: 19px;
  }
}
@media (max-width: 1199px) {
  .ourteam .ourteamCrd__h6 {
    font-size: 17px;
  }
}
.ourteam .ourteamCrd__par {
  font-size: 19px;
  color: #6a6a6a;
  word-spacing: 5px;
  padding: 0 5px;
}
@media (max-width: 1799px) {
  .ourteam .ourteamCrd__par {
    font-size: 17px;
  }
}
@media (max-width: 1199px) {
  .ourteam .ourteamCrd__par {
    font-size: 15px;
  }
}/*# sourceMappingURL=our-story.css.map */
</style>