<template>
  <button @click="toggleDarkMode" class="px-2 py-1 rounded-full focus:outline-none dark:text-gray-400">
                <div class="darklight__box lightoff" v-if="!darkMode">
									<i class="fa-sharp fa-solid fa-light-ceiling"></i>
								</div>
                <div class="darklight__box lighton" v-if="darkMode">
									<i class="fa-regular fa-light-ceiling"></i>
								</div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  created() {
    // Retrieve dark mode status from local storage on component creation
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    // Apply dark mode class to the HTML element if dark mode is enabled
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      // Store dark mode status in local storage
      localStorage.setItem('darkMode', this.darkMode);
    },
  },
  computed: {
    iconClass() {
      return this.darkMode ? 'fas fa-sun' : 'fas fa-moon';
    },
  },
};
</script>