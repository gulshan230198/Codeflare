<template>
  <div class="bg-white min-h-screen py-20">
    <div class="container mx-auto px-2 md:px-0">
      <h1 class="text-3xl lg:text-5xl leading-normal font-bold text-black mb-2">Our Recent Work</h1>
      <p>
        Some of the projects we have developed and delivered for global organizations to help them <br class="hidden md:block"> scale up and forward.
      </p>
    </div>

    <section class="flex justify-center flex-wrap gap-4 p-4 md:p-6 container mx-auto">
      <button
        v-for="(category, index) in categories"
        :key="index"
        class=" flex gap-3 py-4 px-4 rounded-lg font-bold  text-sm capitalize justify-center items-center tracking-widest z-1"
        :class="['px-4 py-2 rounded-full', selectedCategory === category ? 'bg-btnGradient text-white shadow-btnShadow' : 'border border-gray-300 text-gray-700']"
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </section>

    <div class="border-t border-gray-300 my-6 container mx-auto"></div>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 container mx-auto">
      <div v-for="(item, index) in filteredItems" :key="index" class="flex flex-col gap-3">
        <img :src="item.image.src" :alt="item.image.alt" class="w-full ">
        <div class="mt-4">
          <h2 class="text-2xl font-bold">{{ item.title }}</h2>
          <p class="mt-2">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <section class="py-20 ">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="about-cta bg-cover bg-no-repeat bg-bottom relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-cta2 before:rounded-20  rounded-2xl p-5 md:p-8 xl:p-11">
          <h2 class="font-manrope text-2xl sm:text-4xl text-white text-center font-bold mb-4 z-999 relative">Looking to Become an Industry Leader?
          </h2>
          <p class="text-white text-center mb-6 md:mb-11 max-lg:max-w-2xl mx-auto z-999 relative">We can help you achieve that. Drop your queries below.</p>
          <div
            class="z-999 relative max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
            <input type="text" name="email"
              class="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300  text-gray-100 max-lg:text-center placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
              placeholder="Enter your email..">
            <button type="submit"
              class="py-2 px-5 text-sm bg-indigo-500 shadow-md rounded-full  text-white font-semibold hover:bg-indigo-700">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      selectedCategory: 'ALL',
      categories: ['ALL', 'Website', 'E-commerce', 'UI/UX', 'CMS',],
      items: [
        // {
        //   image: { src: '/assets/portfolio/port1.webp', alt: 'Health Image' },
        //   title: 'Empowering musicians with an intuitive audio tool',
        //   description: 'Easy-to-use audio production tool turns any device into a virtual band experience.',
        //   category: 'Mobile APP'
        // },
        {
          image: { src: '/assets/portfolio/port1.webp', alt: 'Mobility Image' },
          title: 'Connecting over a million monthly users to Philips smart home appliances',
          description: 'A sophisticated IoT platform that unifies the smart home experience.',
          category: 'Website'
        },
        {
          image: { src: '/assets/portfolio/port2.webp', alt: 'Finance Image' },
          title: 'Finance Title',
          description: 'Finance description here.',
          category: 'E-commerce'
        },
        {
          image: { src: '/assets/portfolio/port3.webp', alt: 'Smart Devices Image' },
          title: 'Smart Devices Title',
          description: 'Smart Devices description here.',
          category: 'UI/UX'
        },
        {
          image: { src: '/assets/portfolio/port4.webp', alt: 'Telecom Image' },
          title: 'Telecom Title',
          description: 'Telecom description here.',
          category: 'CMS'
        },
        // {
        //   image: { src: '/assets/portfolio/port1.webp', alt: 'Entertainment Image' },
        //   title: 'Entertainment Title',
        //   description: 'Entertainment description here.',
        //   category: 'AI/ML'
        // },
      ]
    };
  },
  computed: {
    filteredItems() {
      if (this.selectedCategory === 'ALL') {
        return this.items;
      }
      return this.items.filter(item => item.category === this.selectedCategory);
    }
  }
};
</script>

<style scoped>

.about-cta {
  background-image: url(/public/assets/portfolio/cta.jpg);
}

</style>
