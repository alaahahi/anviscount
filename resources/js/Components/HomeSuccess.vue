<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import Vue3AutoCounter from 'vue3-autocounter';
import { ref, onMounted,onUnmounted  } from "vue";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const scrollPosition = ref(0);
const counter1 = ref(null)
const counter2 = ref(null)
const counter3 = ref(null)
const counter4 = ref(null)

const run = ref(true);

// Function to handle the scroll event
const handleScroll = () => {
  // Get the scroll position from the window object
  scrollPosition.value = window.scrollY || window.pageYOffset;
  if(scrollPosition.value>1000 && run.value==true) {
   counter1.value.start();
   counter2.value.start();
   counter3.value.start();
   counter4.value.start();

	run.value=false;
  }
};

// Attach the scroll event listener when the component is mounted
onMounted(() => {
if(!cookies.get('lnag')){
    cookies.set("lnag", "en");
}
if(!localStorage.getItem('lang')){
	localStorage.setItem('lang', "en");
}
  window.addEventListener('scroll', handleScroll);
});

// Remove the scroll event listener when the component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>
<template>
  	<section class="hmsuccess">
		<div class="container">
			<h2 class="section-hdng section-hdng--hmsuccess"> ما أنجزناه بالأرقام </h2>
			<p class="hmsuccess__para">
				تأسَّسَ مركز بيت عربي في حزيران في أبوظبي عام 2015، ونأمل أن نصل لقلب كل بيت في العالم.
			</p>
			<div class="row hmsuccessRow">
				<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
					<div class="numBox numBox1">
						<h2 class="num__h3">
							<span>+</span>
							<span class="num">
								<vue3-auto-counter ref="counter1" :startAmount="0" :endAmount="200" :duration="3"  :autoinit="false" />
							</span>
						</h2>
						<p class="numBox__p">
							متطوع ومتطوعة
						</p>
					</div>
				</div>
				<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
					<div class="numBox numBox2">
						<h2 class="num__h3">
							<span>+</span>
							<span class="num">
								<vue3-auto-counter ref="counter2" :startAmount="0" :endAmount="55" :duration="3"  :autoinit="false" />
							</span>
						</h2>
						<p class="numBox__p">
							منسق ومدرب
						</p>
					</div>
				</div>
				<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
					<div class="numBox numBox3">
						<h2 class="num__h3">
							<span>+</span>
							<span class="num">
								<vue3-auto-counter ref="counter3" :startAmount="0" :endAmount="160" :duration="3"  :autoinit="false" />
							</span>
						</h2>
						<p class="numBox__p">
							فعالية وعرض
						</p>
					</div>
				</div>
				<div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
					<div class="numBox numBox4">
						<h2 class="num__h3">
							<span>+</span>
							<span class="num">
								<vue3-auto-counter ref="counter4" :startAmount="0" :endAmount="2000" :duration="3"  :autoinit="false" />
							</span>
						</h2>
						<p class="numBox__p">
							طفل وطفلة
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>