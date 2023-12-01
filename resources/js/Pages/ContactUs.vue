<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import ContactUs from '@/Components/ContactUs.vue';
import Mapsec from '@/Components/Mapsec.vue';

</script>
<template>
    <MainLayout>
      <div class="subbanner">
        <div class="container-fluid">
          <ol class="breadcrumb" data-aos="fade-up" data-aos-delay="50" v-scroll-reveal-fade-up="{delay:'50'}">
            <li class="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li aria-current="page" class="breadcrumb-item active">Contact</li>
          </ol>
        </div>
      </div>
      <ContactUs />
      <Mapsec />
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
</style>