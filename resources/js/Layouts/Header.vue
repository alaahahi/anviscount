<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { Link } from '@inertiajs/inertia-vue3';
import ResponsiveNav from '@/Components/ResponsiveNav.vue';
import DarkModeToggle from '@/Components/DarkToggle.vue';
import axios from 'axios';
import {  onMounted, onBeforeUnmount } from "vue";

const navActive = ref(false);

const openNav = () => {
  navActive.value = true;
};

const closeNav = () => {
  navActive.value = false;
};



const i18n = useI18n();
let language =ref(i18n.locale.value);


const switchLocale = async (locale) => {
	
      try {
        const response = await axios.get(`/lang/${locale}`);
		language.value = locale; 
		i18n.locale.value = locale;
          localStorage.setItem('lang', locale);
		  window.location.reload();
  
      } catch (error) {
        console.error('An error occurred:', error);
      }
	};


</script>

<template>
	<header class="header" >
		<div class="container-fluid">
			<div class="headerWrpr">
				<a href="/" class="logo">
					<img src="/assets/images/logo.png" alt="" class="logo__img">
				</a>
				<ul class="navlist" :class="{'active':navActive}"  @click="closeNav">
					<div class="navlistCloseBtn flex-a" @click="closeNav"><i class="fa-solid fa-xmark"></i></div>
					<li class="navlist_item">
						<ResponsiveNav
							:href="route('/')"
							:active="route().current('/')"
						>
						{{ $t('home') }}
						
						</ResponsiveNav>
					</li>
					<li class="navlist_item">
						<ResponsiveNav
							:href="route('our-story')"
							:active="route().current('our-story')"
						>
						حكايتنا
						</ResponsiveNav>
					</li>
					<li class="navlist_item">
						<ResponsiveNav
							:href="route('our-clubs')"
							:active="route().current('our-clubs')"
						>
						النّوادي
						</ResponsiveNav>
					</li>
					<li class="navlist_item">
						<ResponsiveNav
							:href="route('our-events')"
							:active="route().current('our-events')"
						>
						الفعاليّات
						</ResponsiveNav>
					</li>
					<li class="navlist_item">
						<ResponsiveNav
							:href="route('our-library')"
							:active="route().current('our-library')"
						>
						المكتبة
						</ResponsiveNav>
					</li>
					<li class="navlist_item">
						<ResponsiveNav
							:href="route('blog')"
							:active="route().current('blog')"
						>
						المدوّنة
						</ResponsiveNav>
					</li>
					<li class="navlist_item">
						<ResponsiveNav
							:href="route('contact-us')"
							:active="route().current('contact-us')"
						>
						اتّصل بنا
						</ResponsiveNav>
					</li>
					<li class="navlist_item">
						<div class="navlist_item-wrpr flex-i">
							<a href="#" class="navlist__btn flex-a"> تحديد مستوى لطفلك </a>
							<a href="#" class="navlist__btn"> تحميل الملف التعريفي</a>
						</div>
					</li>
				</ul>
				<div class="hdrBox3 flex-i">
					<ResponsiveNav class="addtocrdBtn flex-a r-50"	:href="route('cart')">
						<span class="addtocrdBtn-ab">05</span>
						<i class="fa-duotone fa-cart-shopping" style="font-size: 16px;margin-top:10px;"></i>
					</ResponsiveNav>
					<div class="langbox">
                          <div class="langboxmini ar" @click="switchLocale('ar')" :class="{'active':language=='en'}">
                            <i class="fa-solid fa-earth-americas"></i>
                            <p class="langboxmini__p">Ar</p>
                        </div>
                        <div class="langboxmini en " @click="switchLocale('en')" :class="{'active':language=='ar'}">
                            <i class="fa-solid fa-earth-americas"></i>
                            <p class="langboxmini__p">En</p>
                        </div>
                    </div>
					<div class="hdrBox3NavListbtn" @click="openNav">
						<i class="fa-solid fa-bars-progress"></i>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>