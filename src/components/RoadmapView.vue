<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-6  shadow-md rounded-20 relative bg-white" v-for="(item, index ) in roadmap" :key="index">
          <div class="flex items-center justify-center rounded-full w-20 h-20 md:absolute left-3 mb-3 md:mb-0">
            <img :src="require(`/public/assets/home/${item.img}`)" :alt="item.img" />
          </div>
        <div class="mb-4 md:ml-20">
          <h2 class="text-xl font-semibold mb-3">{{ item.title }}</h2>
          <p class="text-gray-600 text-sm">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {

      roadmap: [
        {
          "img" : "roadmap1.svg",
          "title": "Analyze",
          "color": "purple",
          "description": "Our team reviews & analyzes the project requirements and prepares a statement of work document. Our SOW details out project cost and timeline of various use cases/modules of the applications."
        },
        {
          "img" : "roadmap2.svg",
          "title": "Design",
          "color": "pink",
          "description": "Once the Master Services Agreement (MSA) is in place, our design team works on application workflow & user experience. We provide low & high-fidelity designs of the applications."
        },
        {
          "img" : "roadmap3.svg",
          "title": "Develop",
          "color": "yellow",
          "description": "Our team of engineers, API, and Integration specialists, and Full Stack engineers work together to complete the application development. We follow agile methodology."
        },
        {
          "img" : "roadmap4.svg",
          "title": "Test",
          "color": "green",
          "description": "We deliver high-quality and defect-free applications to our clients. Our dedicated team of Quality Assurance Engineers & tester thoroughly test and validate the business requirement of the project."
        },
        {
          "img" : "roadmap5.svg",
          "title": "Launch",
          "color": "orange",
          "description": "We help our clients to go live with the application. We deploy API to our client’s cloud server (AWS, Google Cloud, Azure) and publish."
        },
        {
          "img" : "roadmap6.svg",
          "title": "Support",
          "color": "purple",
          "description": "We provide 30 days free support once you go live. Long term support can be offered on an affordable monthly cost."
        }
      ]

    };
  }
};
</script>

<style scoped></style>
