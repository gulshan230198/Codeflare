<template>
  <div class="testimonial container mx-auto">
    <carousel :items-to-show="2.10" :breakpoints="breakpoints" >
      <slide v-for="(testimonial, index) in testimonials" :key="index"  >
        <div class="">
          <div class="bg-gray-100 p-4 rounded-20 w-[98%]" :style="{ backgroundColor: backgroundColor }">
            <div class="h-full text-center">
              <img :alt="testimonial.name"
                  :src="testimonial.img"
                  class="w-20 h-20 mb-8 object-cover object-top rounded-full inline-block border-2 border-gray-200 bg-gray-100 ">
              <i class="fa-solid fa-quote-left"></i><p class="leading-relaxed text-sm md:text-lg font-normal text-gray-500">{{ testimonial.content }}</p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{{ testimonial.name }}</h2>
              <p class="text-gray-500">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>


</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  props: {
    backgroundColor: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      breakpoints: {
      320: { 
        itemsToShow: 1,
      },
      425: { 
        itemsToShow: 2,
      },
      768: { 
        itemsToShow: 2,
      },
      1024: {
        itemsToShow: 2,
      },
      1440: {
        itemsToShow: 2,
      },
      1920: { 
        itemsToShow: 2,
      },
    },
      testimonials: [
        {
          "img": "/assets/home/user-1.jpg",
          "content": "Exceptional service! Their IT solutions boosted our productivity and security. Highly recommend this team for any tech needs",
          "name": "HOLDEN CAULFIELD",
          // "position": "Senior Product Designer"
        },
        {
          "img": "/assets/home/user-2.jpg",
          "content": "Professional and efficient. Their IT expertise transformed our operations, delivering seamless performance and outstanding support.",
          "name": "ALPER KAMU",
          // "position": "UI Developer"
        },
        {
          "img": "/assets/home/user-3.jpg",
          "content": "Innovative and reliable IT solutions. Their support team is always responsive and resolves issues promptly.",
          "name": "HENRY LETHAM",
          // "position": "CTO"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
