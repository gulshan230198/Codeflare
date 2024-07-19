<template>
  <div>
    <div class="">
      <div class="dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px justify-center gap-0 md:gap-4" role="tablist">
          <li class="mr-2" role="presentation">
            <button
              class="inline-block capitalize text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              :class="{ '!border-primary !text-primary': activeTab === 'frontend' }" @click="setActiveTab('frontend')"
              role="tab" aria-controls="frontend" :aria-selected="activeTab === 'frontend'">
              Frontend
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              class="inline-block capitalize text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              :class="{ '!border-primary !text-primary': activeTab === 'backend' }" @click="setActiveTab('backend')"
              role="tab" aria-controls="backend" :aria-selected="activeTab === 'backend'">
              backend
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              class="inline-block capitalize text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              :class="{ '!border-primary !text-primary': activeTab === 'cms' }" @click="setActiveTab('cms')"
              role="tab" aria-controls="cms" :aria-selected="activeTab === 'cms'">
              CMS
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              class="inline-block capitalize text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              :class="{ '!border-primary !text-primary': activeTab === 'ecommerce' }" @click="setActiveTab('ecommerce')"
              role="tab" aria-controls="ecommerce" :aria-selected="activeTab === 'ecommerce'">
              e-commerce
            </button>
          </li>
          <li class="mr-2" role="presentation">
            <button
              class="inline-block capitalize text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              :class="{ '!border-primary !text-primary': activeTab === 'db' }" @click="setActiveTab('db')"
              role="tab" aria-controls="db" :aria-selected="activeTab === 'db'">
              Database
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div v-if="activeTab === 'frontend'" class="p-4 rounded-lg dark:bg-gray-800">
          <div class="tech grid grid-cols-2 md:grid-cols-5 gap-6 items-start">
            <router-link to="" v-for="tech in technologies" :key="tech.name"
              class="p-4 border flex flex-col gap-3 items-center hover:bg-white hover:shadow-sm ">
              <img :src="tech.src" :alt="tech.name" class="w-10 h-10">
              <span class="mt-2 text-sm capitalize">{{ tech.name }}</span>
            </router-link>
          </div>
        </div>
        <div v-if="activeTab === 'backend'" class="p-4 rounded-lg dark:bg-gray-800">
          <div class="tech grid grid-cols-2 md:grid-cols-5 gap-6 items-start">
            <router-link to="" v-for="tech in backtechnologies" :key="tech.techName"
              class="p-4 border flex flex-col items-center justify-center hover:bg-white hover:shadow-sm">
              <img :src="tech.imgSrc" :alt="tech.altText" class="w-10 h-10">
              <span class="mt-2 text-sm capitalize">{{ tech.techName }}</span>
            </router-link>
          </div>
        </div>
        <div v-if="activeTab === 'cms'" class="p-4 rounded-lg dark:bg-gray-800">
          <div class="tech grid grid-cols-2 md:grid-cols-5 gap-6 items-start">
            <router-link to="" v-for="tech in cms" :key="tech.techName"
              class="p-4 border flex flex-col items-center justify-center hover:bg-white hover:shadow-sm">
              <img :src="tech.imgSrc" :alt="tech.altText" class="w-10 h-10">
              <span class="mt-2 text-sm capitalize">{{ tech.techName }}</span>
            </router-link>
          </div>
        </div>
        <div v-if="activeTab === 'ecommerce'" class="p-4 rounded-lg dark:bg-gray-800">
          <div class="tech grid grid-cols-2 md:grid-cols-5 gap-6 items-start">
            <router-link to="" v-for="tech in ecommerce" :key="tech.techName"
              class="p-4 border flex flex-col items-center justify-center hover:bg-white hover:shadow-sm">
              <img :src="tech.imgSrc" :alt="tech.altText" class="w-10 h-10">
              <span class="mt-2 text-sm capitalize">{{ tech.techName }}</span>
            </router-link>
          </div>
        </div>
        <div v-if="activeTab === 'db'" class="p-4 rounded-lg dark:bg-gray-800">
          <div class="tech grid grid-cols-2 md:grid-cols-5 gap-6 items-start">
            <router-link to="" v-for="tech in db" :key="tech.techName"
              class="p-4 border flex flex-col items-center justify-center hover:bg-white hover:shadow-sm">
              <img :src="tech.imgSrc" :alt="tech.altText" class="w-10 h-10">
              <span class="mt-2 text-sm capitalize">{{ tech.techName }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activeTab: 'frontend',
      technologies: [
        { src: "/assets/home/html.svg", name: "HTML" },
        { src: "/assets/home/css.svg", name: "CSS" },
        { src: "/assets/home/tailwind.svg", name: "Tailwind CSS" },
        { src: "/assets/home/sass.svg", name: "Sass" },
        { src: "/assets/home/bootstrap.png", name: "Bootstrap" },
        { src: "/assets/home/javaScript.svg", name: "JavaScript" },
        { src: "/assets/home/jquery.svg", name: "jQuery" },
        { src: "/assets/home/angular.svg", name: "Angular" },
        { src: "/assets/home/react.svg", name: "React" },
        { src: "/assets/home/vue.svg", name: "Vue.js" },
        { src: "/assets/home/nuxt.svg", name: "Nuxt.js" },
        { src: "/assets/home/next.svg", name: "Next.js" },
        { src: "/assets/home/svelte.svg", name: "Svelte" },
        { src: "/assets/home/backbonejs.svg", name: "Backbone.js" },
        { src: "/assets/home/ember.svg", name: "Ember.js" },
        { src: "/assets/home/flutter.svg", name: "Flutter" },
        { src: "/assets/home/ionic.svg", name: "Ionic" },
        { src: "/assets/home/threejs.png", name: "Three.js" }
      ],
      backtechnologies: [
        {
          "imgSrc": "/assets/home/nodejs.svg",
          "altText": "Node.js",
          "techName": "Node.js"
        },
        {
          "imgSrc": "/assets/home/asp.svg",
          "altText": "ASP.NET",
          "techName": "ASP.NET"
        },
        {
          "imgSrc": "/assets/home/codeigniter.svg",
          "altText": "codeigniter",
          "techName": "codeigniter"
        },
        {
          "imgSrc": "/assets/home/django.svg",
          "altText": "Django",
          "techName": "Django"
        },
        {
          "imgSrc": "/assets/home/laravel.svg",
          "altText": "Laravel",
          "techName": "Laravel"
        },
        {
          "imgSrc": "/assets/home/nestjs.svg",
          "altText": "NestJS",
          "techName": "NestJS"
        },
        {
          "imgSrc": "/assets/home/php.svg",
          "altText": "PHP",
          "techName": "PHP"
        },
        {
          "imgSrc": "/assets/home/python.svg",
          "altText": "Python",
          "techName": "Python"
        },
        {
          "imgSrc": "/assets/home/docker.png",
          "altText": "Docker",
          "techName": "Docker"
        },
        {
          "imgSrc": "/assets/home/spring.png",
          "altText": "spring",
          "techName": "spring"
        },
      ],
      cms: [
        {
          "imgSrc": "/assets/home/drupal.svg",
          "altText": "drupal",
          "techName": "drupal"
        },
        {
          "imgSrc": "/assets/home/wordpress.svg",
          "altText": "wordpress",
          "techName": "wordpress"
        },
        {
          "imgSrc": "/assets/home/webflow.svg",
          "altText": "webflow",
          "techName": "webflow"
        },
        {
          "imgSrc": "/assets/home/hubspot.svg",
          "altText": "hubspot",
          "techName": "hubspot"
        },
      ],
      ecommerce: [
        {
          "imgSrc": "/assets/home/magento.svg",
          "altText": "magento",
          "techName": "magento"
        },
        {
          "imgSrc": "/assets/home/shopify.svg",
          "altText": "shopify",
          "techName": "shopify"
        },
        {
          "imgSrc": "/assets/home/woocommerce.svg",
          "altText": "woocommerce",
          "techName": "woocommerce"
        },
        {
          "imgSrc": "/assets/home/drupal-commerce.svg",
          "altText": "drupal commerce",
          "techName": "drupal commerce"
        },
      ],
      db: [
        {
          "imgSrc": "/assets/home/mariadb.svg",
          "altText": "MariaDB",
          "techName": "MariaDB"
        },
         {
          "imgSrc": "/assets/home/postgresql.svg",
          "altText": "PostgreSQL",
          "techName": "PostgreSQL"
        },
        {
          "imgSrc": "/assets/home/firebase.svg",
          "altText": "Firebase",
          "techName": "Firebase"
        },
        {
          "imgSrc": "/assets/home/mongodb.svg",
          "altText": "MongoDB",
          "techName": "MongoDB"
        },
        {
          "imgSrc": "/assets/home/mysql.svg",
          "altText": "MySQL",
          "techName": "MySQL"
        },
      ],
    }
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script>

<style scoped></style>
