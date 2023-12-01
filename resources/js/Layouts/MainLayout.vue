<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import Header from "@/Layouts/Header.vue";
import Footer from "@/Layouts/Footer.vue";

defineProps({
    isHome: {
        type: Boolean,
        default: false,
    },})


</script>

<template>
    <Header></Header>
      	<!-- header end -->
	<div class="subbanner" v-if="!isHome">
		<h2 class="subbanner__bg1">ض</h2>
		<h2 class="subbanner__bg2">أ</h2>
	</div>
        <slot ></slot>
    <Footer></Footer>
</template>
