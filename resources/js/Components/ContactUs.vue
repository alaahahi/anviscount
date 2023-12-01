<template>
    	<section class="hcont">
		<div class="container">
			<h2 class="hcont__h">CONTACT US</h2>
			<div class="row">
				<div class="col-lg-6">
					<form class="hcontBox" data-aos="fade-up" data-aos-delay="50" v-scroll-reveal-fade-up="{delay:'50'}">
						<input type="text" placeholder="Name..." class="form-control hcontBox__input">
						<input type="text" placeholder="E-mail..." class="form-control hcontBox__input">
						<input type="text" placeholder="Phone..." class="form-control hcontBox__input">
						<textarea type="text" placeholder="Message..." class="form-control hcontBox__input hcontBox__textarea"></textarea>
						<button class="hcontBox__btn">SEND</button>
					</form>
				</div>
				<div class="col-lg-6">
					<div class="hcontBox2" data-aos="fade-up" data-aos-delay="150" v-scroll-reveal-fade-up="{delay:'150'}">
						<ul class="hcontList"  role="tablist">
							<li class="hcontList__item" role="presentation">
							  	<div class="hcontList__btn active" data-bs-toggle="pill" data-bs-target="#a1" type="button" role="tab" aria-selected="true">All Orders</div>
							</li>
							<li class="hcontList__item" role="presentation">
							  	<div class="hcontList__btn" data-bs-toggle="pill" data-bs-target="#a2" type="button" role="tab" aria-selected="false">To Shipping</div>
							</li>
						</ul>
						<div class="tab-content" id="pills-tabContent">
							<div class="tab-pane fade show active" id="a1" role="tabpanel" tabindex="0">
								<div class="hcontRow">
									<i class="fa-duotone fa-location-dot"></i>
									<span class="hcontRow__text">
										P.O. Box 50346, Mezzanine Floor M-11, Dar Al Maha Bldg., Hor Al Anz East, Dubai, United Arab Emirates
									</span>
								</div>
								<h3 class="hcontBox2__h">Email</h3>
								<div class="hcontRow">
									<i class="fa-duotone fa-envelope"></i>
									<a href="mailto:cert@viscount.ae" class="hcontRow__text">
										cert@viscount.ae
									</a>
								</div>
								<h3 class="hcontBox2__h">Telephone</h3>
								<div class="hcontRow hcontRow2">
									<i class="fa-duotone fa-phone-rotary"></i>
									<a href="tel:+97142975085" class="hcontRow__text">
										+971 4 297 5085
									</a>
								</div>
								<div class="hcontRow hcontRow2">
									<i class="fa-duotone fa-phone-rotary"></i>
									<a href="tel:+971042975086" class="hcontRow__text">
										+971 04 2975086
									</a>
								</div>
							</div>
							<div class="tab-pane fade" id="a2" role="tabpanel" tabindex="0">
								<div class="hcontRow">
									<i class="fa-duotone fa-location-dot"></i>
									<span class="hcontRow__text">
										Contact Us: Abu Dhabi address : P.O. Box 9848, Abu Dhabi Office No.12, First Floor, Sector M-13, Plot 76 Mussafah, Abu Dhabi, UAE.
									</span>
								</div>
								<h3 class="hcontBox2__h">Email</h3>
								<div class="hcontRow">
									<i class="fa-duotone fa-envelope"></i>
									<a href="mailto:cert@viscount.ae" class="hcontRow__text">
										cert@viscount.ae
									</a>
								</div>
								<h3 class="hcontBox2__h">Telephone</h3>
								<div class="hcontRow hcontRow2">
									<i class="fa-duotone fa-phone-rotary"></i>
									<a href="tel:+97142975085" class="hcontRow__text">
										+971 4 297 5085
									</a>
								</div>
								<div class="hcontRow hcontRow2">
									<i class="fa-duotone fa-phone-rotary"></i>
									<a href="tel:+971042975086" class="hcontRow__text">
										+971 04 2975086
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>