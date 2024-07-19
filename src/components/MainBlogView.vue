<template>
  <div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
      <div v-for="(item, index) in blogs" :key="index" class="rounded-20 p-4 bg-white" :style="{ backgroundColor: backgroundColor }">
        <div class="rounded-lg h-64 overflow-hidden">
          <img :src="item.imageSrc" alt="content" class="object-cover object-center h-full w-full">
        </div>
        <h2 class="text-xl font-semibold title-font text-gray-900 mt-5 ">{{ item.title }}</h2>
        <p class="text-sm  leading-relaxed mt-2 line-clamp-2 text-gray-500 ">{{ item.content }}</p>
        <router-link :to="item.link" class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    backgroundColor: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      blogs: [
        {
          "imageSrc": "/assets/home/wordpress.png",
          "title": "Unlocking the Power of WordPress: Tips and Tricks for Beginners",
          "content": "Dive into the world of WordPress and learn how to create stunning websites, customize themes, and optimize performance. Whether you're a beginner or an experienced developer, this guide will help you harness the full potential of WordPress",
          "link":"blog/unlocking-the-power-of-wordpress-tips-and-tricks-for-beginners"
        },
        {
          "imageSrc": "/assets/home/web-development.webp",
          "title": "Exploring Web Development: From Basics to Advanced Techniques",
          "content": "Exploring Web Development: From Basics to Advanced Techniques' delves into the comprehensive journey of web development, covering foundational concepts to sophisticated methodologies. It navigates through HTML, CSS, JavaScript, and beyond, unraveling intricacies of frameworks, libraries, and best practices. Dive into a comprehensive exploration of the evolving landscape of web development",
          "link":"/blog/exploring-web-development-from-basics-to-advanced-techniques"
        },
        // {
        //   "imageSrc": "/assets/home/ui.jpg",
        //   "title": "Essential UI Design Principles for Success",
        //   "content": "Effective UI design principles are vital for success in digital projects. Key principles include consistency, simplicity, clarity, and user-centeredness. Prioritize intuitive navigation, clear typography, and visual hierarchy. Optimize for accessibility and responsiveness across devices. Continuous testing and iteration are crucial for refining user experiences and achieving project goals."
        // }
      ]
    };
  }
};
</script>

<style scoped>
</style>
