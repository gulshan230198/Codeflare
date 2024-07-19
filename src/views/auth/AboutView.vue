<template>
  <div class="dark:bg-slate-900 ">
    <section
      class="about_main bg-cover bg-no-repeat bg-bottom py-20 lg:py-24 relative -mt-[125.24px] z-0 h-900 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-cta2 before:rounded-b-20  rounded-b-2xl p-2 md:p-8 xl:pt-20 xl:pb-14">
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center h-full flex flex-col justify-center items-center">
        <h1
          class="max-w-4xl mx-auto text-center  font-bold text-4xl  text-white mb-5 md:text-5xl md:leading-normal">
          Crafting a Greener Digital <span class="text-indigo-600">Future</span>
        </h1>
        <p class="max-w-4xl mx-auto text-center text-base font-normal leading-7 text-white mb-9 capitalize">
          we're at the forefront of technological advancement, merging state-of-the-art solutions to create unparalleled
          value and uncover untapped opportunities for our clients. Our commitment is to deliver groundbreaking
          technologies that are set to reshape the global economy. Join our visionary pioneers and transform your
          industry with new, dynamic values.
        </p>
        <PulseButtonView @button-clicked="showModal = true" title="Let's Talk" />
      </div>
    </section>

    <section class="py-14 lg:py-24 relative">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8 relative ">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
          <div class="img-box">
            <img src="/assets/about/about_us.png" alt="About Us" class="max-lg:mx-auto rounded-xl h-full object-cover">
          </div>
          <div class="lg:pl-[100px] flex items-center">
            <div class="data w-full">
              <h2 class=" font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                About
                Us </h2>
              <p class="font-normal text-lg leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto text-justify">
                At CodeFlare Softtech, we are driven by a passion for seamless user experiences. Our meticulously
                curated platform empowers creators, designers, and developers to craft intuitive, beautiful interfaces.
                Our mission is to provide a comprehensive toolkit that enables you to build user-centric designs that
                resonate with every interaction. From ideation to execution, we support your creative journey, ensuring
                each project not only meets but exceeds user expectations. Join us at CodeFlare Softtech and transform
                the way you create digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 lg:py-24 relative bg-[#eef3ff]">
          <div class="container mx-auto flex flex-col gap-10">
            <div class="main-heading text-center">
              <h2 class="font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">Our Vision</h2>
              <p class="font-normal text-lg leading-8 text-gray-500 max-lg:text-center text-center">
                Your visions deserve to be seen, and our mission is to bring them to life in the digital realm. By partnering with CodeFlare Softtech, you’re not just working with a team of experts; you’re gaining a partner dedicated to showcasing your vision to the world.</p>
            </div>
            <div class="card_main grid grid-cols-4 gap-6">
              <div class="card bg-white p-6 shadow-lg border rounded-20">
                <div class="icon">
                  <img src="/assets/about/work-in-progress.gif" alt="" class="w-12 purple__filter">
                </div>
                <h4 class="my-4 text-2xl font-semibold">Progress </h4>
                <p>Our sole motivation is our clients' success, and we are dedicated to fostering enduring business partnerships.</p>
              </div>
              <div class="card bg-white p-6 shadow-lg border rounded-20">
                <div class="icon">
                  <img src="/assets/about/computer.gif" alt="" class="w-12 purple__filter">
                </div>
                <h4 class="my-4 text-2xl font-semibold">User Experience </h4>
                <p>From startups to enterprises, we design solutions that prioritize the needs and experiences of their users.</p>
              </div>
              <div class="card bg-white p-6 shadow-lg border rounded-20">
                <div class="icon">
                  <img src="/assets/about/idea-2.gif" alt="" class="w-12 purple__filter">
                </div>
                <h4 class="my-4 text-2xl font-semibold">Inventiveness  </h4>
                <p>In a rapidly evolving world, we stay ahead with our innovative approach to development.</p>
              </div>
              <div class="card bg-white p-6 shadow-lg border rounded-20">
                <div class="icon">
                  <img src="/assets/about/people.gif" alt="" class="w-12 purple__filter">
                </div>
                <h4 class="my-4 text-2xl font-semibold">Ethics and Values</h4>
                <p>Our commitment to strong ethics underpins our client relationships, ensuring trust and mutual success.</p>
              </div>
            </div>
          </div>
    </section>

    <section class="py-14 lg:py-24 relative ">
          <div class="max-w-7xl mx-auto grid grid-cols-2 gap-20 bg-primary p-20 rounded-20">
            <div class="main-heading text-left">
              <h2 class="heading font-bold text-4xl lg:text-5xl text-white mb-9 max-lg:text-center">How We Empower Your Business</h2>
              <p class="text font-normal text-lg leading-8 text-white">
                  Customer satisfaction is the driving force behind our growth. We go the extra mile, put in the extra hours, and do whatever it takes to elevate your business to the top.
              </p>
            </div>
            <div class="main_cardss grid grid-cols-3 gap-2">
              <div class="count p-4 flex justify-center items-center flex-col bg-white rounded-20">
                <h3 class="text-center text-2xl font-semibold">30%</h3>
                <p class="text-center text-sm">Boost Response Duration</p>
              </div>
              <div class="count p-4 flex justify-center items-center flex-col bg-white rounded-20 translate-y-14">
                <h3 class="text-center text-2xl font-semibold">90%</h3>
                <p class="text-center text-sm">Turbo Delivery</p>
              </div>
              <div class="count p-4 flex justify-center items-center flex-col bg-white rounded-20">
                <h3 class="text-center text-2xl font-semibold">42%</h3>
                <p class="text-center text-sm">Fulfilled Clients</p>
              </div>
            </div>
           
          </div>
    </section>

    <section class="industry py-14 lg:py-24 bg-[#eef3ff]">
      <div class="container mx-auto flex flex-col gap-10">
        <div class="main-heading text-center">
          <h2 class="heading font-bold text-4xl lg:text-5xl mb-2 max-lg:text-center">Industries We Serve</h2>
          <p class="text font-normal text-lg leading-8">
            Latest and Greatest Services
          </p>
        </div>
        <div class="tech grid grid-cols-4 max-w-1440 mx-auto">
          <div class="tech_one p-10 flex justify-center text-center items-center flex-col gap-4 border-r border-b hover:bg-white">
            <img src="/assets/about/real-estate.gif" class="w-12 purple__filter" alt="">
            <h5 class="font-semibold text-lg ">Real Estate</h5>
          </div>
          <div class="tech_one p-10 flex justify-center text-center items-center flex-col gap-4 border-r border-b hover:bg-white">
            <img src="/assets/about/mortarboard.gif" class="w-12 purple__filter" alt="">
            <h5 class="font-semibold text-lg ">Education</h5>
          </div>
          <div class="tech_one p-10 flex justify-center text-center items-center flex-col gap-4 border-r border-b hover:bg-white">
            <img src="/assets/about/shopping-cart.gif" class="w-12 purple__filter" alt=""> 
            <h5 class="font-semibold text-lg ">E-commerce</h5>
          </div>
          <div class="tech_one p-10 flex justify-center text-center items-center flex-col gap-4 border-b hover:bg-white">
            <img src="/assets/about/game.gif" class="w-12 purple__filter" alt="">
            <h5 class="font-semibold text-lg ">Game</h5>
          </div>
          <div class="tech_one p-10 flex justify-center text-center items-center flex-col gap-4 border-r hover:bg-white">
            <img src="/assets/about/medicine.gif" class="w-12 purple__filter" alt="">
            <h5 class="font-semibold text-lg ">Health care</h5>
          </div>
          <div class="tech_one p-10 flex justify-center text-center items-center flex-col gap-4 border-r hover:bg-white">
            <img src="/assets/about/idea.gif" class="w-12 purple__filter" alt="">
            <h5 class="font-semibold text-lg ">On-demand </h5>
          </div>
          <div class="tech_one p-10 flex justify-center text-center items-center flex-col gap-4 border-r hover:bg-white">
            <img src="/assets/about/groceries.gif" class="w-12 purple__filter" alt="">
            <h5 class="font-semibold text-lg ">Grocery</h5>
          </div>
          <div class="tech_one p-10 flex justify-center text-center items-center flex-col gap-4 hover:bg-white">
            <img src="/assets/about/fitness.gif" class="w-12 purple__filter" alt="">
            <h5 class="font-semibold text-lg ">Fitness center</h5>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 ">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="about-cta bg-cover bg-no-repeat bg-bottom relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-cta2 before:rounded-20  rounded-2xl p-8 xl:p-11">
          <h2 class=" text-4xl text-white text-center font-bold mb-4 z-999 relative">Subscribe to the latest
            offer
          </h2>
          <p class="text-white text-center mb-11 max-lg:max-w-2xl mx-auto z-999 relative">Join our community of
            subscribers
            and receive regular <br>
            updates delivered straight to your inbox. It's quick, easy, and free</p>
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

    <section class="testimonial py-10 px-2 lg:py-20 lg:px-0 bg-[#eef3ff]">
      <div class="container mx-auto">
        <div class="main-heading flex flex-col items-center text-newpurple font-semibold md:mb-10">
          <span class="flex gap-1 items-center text-newpurple font-semibold text-xs uppercase">
            <img src="/assets/home/client.svg" alt="" class="w-4 h-4" />Happy
            Clients</span>
          <h2 class="text-3xl lg:text-5xl !leading-snug font-semibold text-center mb-2">Our client's <span
              class="text-primary"> words</span></h2>
        </div>

        <div>
          <TestimonialsView backgroundColor="white" />
        </div>

      </div>
    </section>


    <section class="blogs py-10 px-2 lg:py-20 lg:px-0 ">
      <div class="container mx-auto">
        <div class="main-heading flex flex-col items-center text-newpurple font-semibold md:mb-10">
          <span class="flex gap-1 items-center text-newpurple font-semibold text-xs uppercase">
            <img src="/assets/home/blog.svg" alt="" class="w-4 h-4" />Blogs</span>
          <h2 class="text-3xl lg:text-5xl !leading-snug font-semibold text-center mb-2">We write a <span
              class="text-primary">few things</span></h2>
        </div>
        <div class="mb-10">
          <MainBlogView backgroundColor="#eef3ff" />
        </div>

        <div class="btngroup flex justify-center">
          <router-link to="/blog"
            class="bg-btnGradient animate-Newpulse flex gap-3 py-4 px-4 rounded-lg font-bold shadow-btnShadow text-sm capitalize text-white justify-center items-center tracking-widest z-999">See
            Our Blogs <img src="/assets/home/arrow.svg" alt=""> </router-link>
        </div>
      </div>
    </section>



    <ModalView :isVisible="showModal" @close="showModal = false" />

  </div>
</template>

<script>
import PulseButtonView from '@/components/PulseButtonView.vue'
import TestimonialsView from '@/components/TestimonialsView.vue'
import MainBlogView from '@/components/MainBlogView.vue'
import ModalView from '@/components/ModalView.vue'
// import PulseButtonViewNew from '@/components/PulseButtonViewNew.vue';

export default {
  name: 'App',
  components: {
    PulseButtonView,
    // PulseButtonViewNew,
    TestimonialsView,
    MainBlogView,
    ModalView
  },
  data() {
    return {
      showModal: false,
      currentSlide: 0,
      AboutCard: [
        {
          class: 'bg-indigo-100',
          title: 'Who',
          text: 'CodeFlare Softtech is a leading software consulting and development company based in India.',
        },
        {
          class: 'bg-yellow-100',
          title: 'Mission',
          text: 'To develop highly competitive cloud solutions that exceed client expectations and deliver substantial rewards.',
        },
        {
          class: 'bg-lime-100',
          title: 'How',
          text: 'Dedicated to ensuring process transparency and maintaining clear communication throughout product development.',
        },
      ]
    }
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
  watch: {
    showModal(newValue) {
      if (newValue) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }
  },
  beforeUnmount() {
    document.body.classList.remove('overflow-hidden');
  }

}
</script>

<style scoped>
.about-cta {
  background-image: url(/public/assets/about/cta-bg.jpg);
}

.about_main {
  background-image: url(/public/assets/about/main.jpg);
}
</style>