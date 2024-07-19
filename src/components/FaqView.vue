<template>
  <div class="mt-2 space-y-4">
    <div
      v-for="(faq, index) in faqs"
      :key="index"
      class="bg-white shadow rounded-lg max-w-6xl mx-auto"
    >
      <div
        :class="['flex justify-between items-center p-4 cursor-pointer rounded-t-lg', faq.open ? 'bg-gray-50' : 'bg-white']"
        @click="toggleFaq(index)"
      >
        <h6 class="text-lg font-medium">{{ faq.question }}</h6>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            :d="faq.open ? 'M19 13H5v-2h14z' : 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z'"
          ></path>
        </svg>
      </div>
      <div v-if="faq.open" class="p-4">
        <p>{{ faq.answer }}</p>
      </div>
      <hr v-if="index !== faqs.length - 1">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "What services does CodeFlare Softtech offer?",
          answer: "CodeFlare Softtech specializes in custom software development, mobile app development, web development, IT consulting, and software maintenance. We cater to various industries, including healthcare, finance, education, e-commerce, and more.",
          open: true
        },
        {
          question: "How can I get a quote for my project?",
          answer: "Yes, our team is equipped to handle both front-end and back-end development, ensuring a seamless and integrated solution for your project.",
          open: false
        },
        {
          question: "Does CodeFlare Softtech have experience in mobile full-stack development?",
          answer: "Absolutely! We have expertise in mobile full-stack development using React Native and Flutter, delivering high-quality and responsive mobile applications.",
          open: false
        },
        {
          question: "How does CodeFlare Softtech ensure the quality of its full-stack development services?",
          answer: "We follow best practices and industry standards, conduct thorough testing, and have a dedicated QA team to ensure the highest quality of our full-stack development services.",
          open: false
        },
        {
          question: "Can CodeFlare Softtech assist with migrating existing applications to a full-stack framework?",
          answer: "Yes, we can help migrate your existing applications to a full-stack framework, ensuring a smooth transition and improved performance.",
          open: false
        },
        {
          question: "Does CodeFlare Softtech offer support and maintenance for full-stack projects?",
          answer: "Yes, we provide ongoing support and maintenance services to ensure the continuous performance and up-to-date security of your full-stack projects.",
          open: false
        },
      ]
    };
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open;
    }
  }
};
</script>

<style>

</style>
