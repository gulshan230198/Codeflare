<template>
  <div class="bg-primaryGradient">
      <div class="services1 p-4 cursor-pointer bg-service m-0.5" :class="isOpen ? 'active' : '' ">
        <div class="main-title flex items-center justify-between mb-2" @click="toggleAccordion">
          <div class="flex items-center gap-3">
              <img :src="img" alt="" class="w-8 h-8 md:w-12 md:h-12" />
              <h4 class="font-semibold text-sm md:text-lg">{{ title }}</h4>
          </div>
          <div>
            <img :src="isOpen ? '/assets/home/minus.svg' : '/assets/home/plus.svg'" alt="" class="w-4 h-4">
          </div>
        </div>
        <transition name="slide">
          <div v-show="isOpen" :class="isOpen ? 'mt-10 h-24' : 'content' ">
            <p class="text-gray-600">{{ content }}</p>
          </div>
        </transition>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    title: String,
    content: String
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleAccordion() {
      this.$emit('closeAllAccordions');
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  max-height: 0;
  overflow: hidden;
}

</style>
