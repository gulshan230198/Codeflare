<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="(item, index) in feature" :key="index" class="border p-4 rounded-20 flex flex-col md:flex-row bg-white shadow-sm">
      <div
        class="w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0" :class="item.class">
        <img :src="item.icon" alt=""/>
      </div>
      <div class="flex-grow md:pl-6">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">{{ item.title }}</h2>
        <p class="leading-relaxed text-base">{{ item.content }}</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      feature: [
        {
          "class":"bg-red-100",
          "icon": "/assets/home/lamp-charge.svg",
          "title": "Innovative Solutions",
          "content": "At CodeFlare Softtech, we leverage the latest in technology to provide innovative solutions that drive efficiency and growth. From AI-driven analytics to cloud-based systems, we ensure your business stays ahead of the curve."
        },
        {
          "class":"bg-indigo-100",
          "icon": "/assets/home/code-circle.svg",
          "title": "Custom Development",
          "content": "We specialize in creating custom software solutions tailored to meet the unique needs of your business. Our expert team works closely with you to develop applications that streamline processes and enhance user experience."
        },
        {
          "class":"bg-orange-100",
          "icon": "/assets/home/security-safe.svg",
          "title": "Cybersecurity",
          "content": "Protecting your data is our top priority. Our comprehensive cybersecurity services include threat detection, risk assessment, and round-the-clock monitoring to ensure your information is always secure."
        },
        {
          "class":"bg-yellow-100",
          "icon": "/assets/home/cloud-add.svg",
          "title": "Cloud Services",
          "content": "Experience the power of cloud computing with our scalable infrastructure solutions. We offer seamless integration, migration services, and ongoing support to help your business harness the full potential of the cloud."
        },
        {
          "class":"bg-lime-100",
          "icon": "/assets/home/trend-up.svg",
          "title": "Expert Consultation",
          "content": "Our team of IT experts provides strategic consultation to help you make informed technology decisions. Whether you need advice on system upgrades or guidance on digital transformation, we’re here to assist."
        },
        {
          "class":"bg-teal-100",
          "icon": "/assets/home/headphone.svg",
          "title": "24/7 Customer Support",
          "content": "Our dedicated support team is available around the clock to assist you with any technical issues. We pride ourselves on delivering exceptional customer service and ensuring your operations run smoothly."
        },
      ],
    };
  }
};
</script>

<style scoped></style>
