<template>
    <div>
        <div class="portfolio__wrapper container mx-auto">
            <div class="main-heading flex flex-col items-center text-newpurple font-semibold md:mb-10">
                    <span class="flex gap-1 items-center text-newpurple font-semibold text-xs uppercase">
                        <img src="/assets/home/about.svg" alt="" class="w-4 h-4" />Portfolio</span>
                    <h2 class="text-3xl lg:text-5xl !leading-snug font-semibold text-center mb-2">Our<span
                            class="text-primary"> Work</span></h2>
                </div>
            <carousel :items-to-show="3" snapAlign="center" class="relative new_slide" :breakpoints="breakpoints">
                <slide v-for="slide in slides" :key="slide.id">
                    <div :class="slide.bgColor" class="p-6 rounded-lg shadow-lg w-[95%]">
                        <img :src="slide.image" class="rounded-md mb-4">
                        <div class="mb-4">
                            <span v-for="tag in slide.tags" :key="tag"
                                class="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                {{ tag }}
                            </span>
                        </div>
                        <h3 class="text-xl font-bold mb-2">{{ slide.title }}</h3>
                        <p class="text-gray-600">{{ slide.description }}</p>
                    </div>
                </slide>
                <template #addons>
                    <pagination />
                </template>
            </carousel>
        </div>
    </div>
</template>


<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data(){
    return{
      breakpoints: {
     0:{
      itemsToShow: 1,
      snapAlign: 'center',
     },
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
        slides:[
        {
            id: 1,
            image: '/assets/portfolio/port1.webp',
            bgColor: 'bg-gray-100',
            tags: ['Web', 'E-commerce'],
            title: 'HVMN',
            description: 'Our client is a US-based company that manufactures and sells products for the ketogenic diet. The client needed a robust development ...'
          },
          {
            id: 2,
            image: '/assets/portfolio/port2.webp',
            bgColor: 'bg-gray-100',
            tags: ['Web'],
            title: 'Pyroscope',
            description: 'Partnering with Dashbouquet, Pyroscope increased revenue by 2x and the number of DAU by ~30%. The company raised a seed round in 202...'
          },
          {
            id: 3,
            image: '/assets/portfolio/port3.webp',
            bgColor: 'bg-gray-100',
            tags: ['Mobile', 'Finance', 'SaaS'],
            title: 'Airr',
            description: 'AIRR is one SaaS solution for all investment management needs that consolidates data from any front or back-office systems you use on a dai...'
          },
          {
            id: 3,
            image: '/assets/portfolio/port4.webp',
            bgColor: 'bg-gray-100',
            tags: ['Mobile', 'Finance', 'SaaS'],
            title: 'Airr',
            description: 'AIRR is one SaaS solution for all investment management needs that consolidates data from any front or back-office systems you use on a dai...'
          },
          {
            id: 3,
            image: '/assets/portfolio/port5.webp',
            bgColor: 'bg-gray-100',
            tags: ['Mobile', 'Finance', 'SaaS'],
            title: 'Airr',
            description: 'AIRR is one SaaS solution for all investment management needs that consolidates data from any front or back-office systems you use on a dai...'
          },
        ]
    }
  }
}
</script>