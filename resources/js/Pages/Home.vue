<script setup>
import {ref, onMounted} from "vue";
import "intersection-observer"; // for cross-browser support
import MainLayout from '@/Layouts/MainLayout.vue';
import HomeBanner from '@/Components/HomeBanner.vue';
import HomeStory from '@/Components/HomeStory.vue';
import HomeClients from '@/Components/HomeClients.vue';
import HomeClubs from '@/Components/HomeClubs.vue';
import HomeEvents from '@/Components/HomeEvents.vue';
import HomeParentOpinion from '@/Components/HomeParentOpinion.vue';
import HomeSuccess from '@/Components/HomeSuccess.vue';
import HomeTesting from '@/Components/HomeTesting.vue';
import { Link } from '@inertiajs/inertia-vue3';
import Vue3AutoCounter from 'vue3-autocounter';

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import { useForm } from '@inertiajs/vue3'

const openForm = ref(0);

// Toggle the value of openForm
const toggleOpenForm = () => {
  openForm.value = openForm.value === 1 ? 0 : 1;
}

defineProps({
    meta: String,
    slider: Object,
    contact_us: Object,
    abouts: Object,
    services: Object,
    clients: Object,
    types_members: Object,
    members: Object,
    types_project: Object,
    projects: Object,
    questions: Object,
    projects_count: Object,
    clients_count: Object,
    locale: {
        type: String,
    },
})

const modules = [Autoplay];

// Import Swiper styles
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

const showContent = ref(true);

// const questions = ref([
//   {
//     id: 1,
//     text: "Question 1",
//     answer: "It is a long established fact that a reader will be distracted...",
//     isOpen: false,
//   },
//   {
//     id: 2,
//     text: "Question 2",
//     answer: "It is a long established fact that a reader will be distracted...",
//     isOpen: false,
//   },
//   // Add more questions and answers
// ]);

const toggleAnswer = (question) => {
  question.isOpen = !question.isOpen;
};



const form = useForm({
  from: '',
  email: '',
  phone: '',
  message: '',
})

function submit() {
  openForm.value =0
  form.post('/message')

}


</script>



<template>
  <MainLayout :isHome="true">
    <HomeBanner />
    <HomeStory />
    <HomeClubs />
    <HomeParentOpinion />
    <HomeTesting />
    <HomeEvents />
    <HomeClients />
    <HomeSuccess />
  </MainLayout>
</template>