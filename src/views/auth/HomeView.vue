<template>
    <div>
        <section class="md:pb-0 h-900 " ref="myElement">
            <div class="container mx-auto flex flex-col gap-20 h-full ">
                <div class="text-center max-w-xl lg:max-w-4xl mx-auto typing_text">
                    <h1
                        class="z-1 text-2xl md:text-4xl capitalize text-center text-white font-bold m-0 overflow-hidden leading-auto  mb-7 relative pt-28">
                        Dynamic Team for Your <br />
                        <span ref="typedText"
                            class="typed-text font-bold bg-primaryGradient gradient-text text-4xl md:text-6xl lg:text-7xl z-1"></span>
                        <span ref="cursor" class="cursor">&nbsp;</span>
                    </h1>
                    <p class="text-white font-normal md:text-xl mb-12  z-1 relative">
                        At CodeFlare Softtech, we innovate, design, and build scalable software solutions for
                        high-growth
                        startups and leading enterprise brands. We turn visionary ideas into cutting-edge digital
                        products and deliver high ROI business outcomes.
                    </p>
                    <div class="Getbtn flex justify-center z-1 relative">
                        <PulseButtonView @button-clicked="showModal = true" title="Book a call" />
                    </div>
                </div>
            </div>
            <div class="video_wrapp before:w-full before:h-900 before:absolute before:top-0 before:bg-blackNew">
                <video src="/assets/home/home.mp4" class="absolute top-0 -z-10 w-full  object-cover !h-900" width="100%"
                    muted autoplay loop playsinline>
                </video>
            </div>
        </section>

        <section class="aboutus pb-10 px-2 lg:pb-20 lg:px-0">
            <div class="container mx-auto flex flex-col gap-3 md:gap-6">
                <div class="main-heading flex flex-col items-center text-newpurple font-semibold md:mb-10">
                    <span class="flex gap-1 items-center text-newpurple font-semibold text-xs uppercase">
                        <img src="/assets/home/about.svg" alt="" class="w-4 h-4" />About</span>
                    <h2 class="text-3xl lg:text-5xl !leading-snug font-semibold text-center mb-2">Who We<span
                            class="text-primary"> Are!</span></h2>
                </div>
                <div class="about_us grid md:grid-cols-2 gap-10 lg:gap-20 items-center mb-10">
                    <div class="about_content max-w-2xl">
                        <h2 class="text-2xl text-center md:text-left lg:text-4xl !leading-snug font-semibold  mb-2">
                            <span
                                class="text-primary relative after:bg-contain after:bg-no-repeat after:w-full after:h-3 after:inline-block after:absolute after:bottom-0 after:left-0 after:bg-center">CodeFlare</span>
                            offers global
                            professional software development solutions and services.
                        </h2>
                        <p class="text-center md:text-left leading-7">
                            we're redefining digital experiences worldwide. From cutting-edge web design and development
                            to innovative digital products and marketing solutions, we serve clients across industries.
                            Our success stems from our visionary team driving technological advancements, delivering
                            top-notch expertise to a diverse global clientele.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-6">
                        <div v-for="(card, index) in aboutCards" :key="index"
                            class="about-card border-2 p-6 flex flex-col gap-2 items-center md:items-start"
                            :class="card.class">
                            <vue3-autocounter class="font-semibold text-2xl md:text-5xl" ref='counter' :startAmount='0'
                                :endAmount='card.number' :duration='3' suffix='+' :autoinit='true' />
                            <p class="text-sm md:text-base">{{ card.description }}</p>
                        </div>
                    </div>

                </div>
                <div class="btngroup flex justify-center">
                    <router-link to="/about"
                        class="bg-btnGradient animate-Newpulse flex gap-3 py-4 px-4 rounded-lg font-bold shadow-btnShadow text-sm capitalize text-white justify-center items-center tracking-widest z-999">More
                        About us <img src="/assets/home/arrow.svg" alt=""> </router-link>
                </div>
            </div>
        </section>

        <section class="services-section py-10 px-2 lg:py-20 lg:px-0 bg-[#eef3ff]">
            <div class="container mx-auto flex flex-col gap-3 md:gap-6">
                <div class="main-heading flex flex-col items-center text-newpurple font-semibold md:mb-10">
                    <span class="flex gap-1 items-center text-newpurple font-semibold text-xs uppercase">
                        <img src="/assets/home/service.svg" alt="" class="w-4 h-4" />Services</span>
                    <h2 class="text-3xl lg:text-5xl !leading-snug font-semibold text-center mb-2">We do few things,<span
                            class="text-primary"> extremely well</span></h2>
                </div>
                <div class="services mb-10">
                    <div class="grid sm:grid-cols-2  md:grid-cols-3 gap-6">
                        <div class="flex flex-col gap-6">
                            <ServiceView img="/assets/home/web.svg" title="Web Development"
                                content="Enhance your brand with tailor-made websites that drive engagement and growth." />
                            <ServiceView img="/assets/home/software.svg" title="Software Development"
                                content="Streamline operations with software perfectly aligned to your business goals." />
                            <ServiceView img="/assets/home/aiml.svg" title="AI/ML/GenAI"
                                content="Gain a competitive edge with AI-powered insights and automation" />
                        </div>
                        <div class="flex flex-col gap-6">
                            <ServiceView img="/assets/home/uiux.svg" title="UI/UX"
                                content="Captivate users with stunning designs and intuitive digital experiences." />
                            <ServiceView img="/assets/home/ecommerce.svg" title="E-commerce"
                                content="Boost your sales with customized, user-friendly eCommerce platforms." />
                            <ServiceView img="/assets/home/seo.svg" title="Digital Marketing"
                                content="Boost your sales with customized, user-friendly eCommerce platforms." />
                        </div>
                        <div class="flex flex-col gap-6">
                            <ServiceView img="/assets/home/cms.svg" title="CMS Development"
                                content="Engage customers anywhere with sleek, high-performance native and cross-platform mobile apps." />
                            <ServiceView img="/assets/home/mobile.svg" title="Mobile App Development"
                                content="Engage customers anywhere with sleek, high-performance native and cross-platform mobile apps." />
                            <ServiceView img="/assets/home/qa.svg" title="QA"
                                content="Guarantee flawless functionality with our comprehensive manual and automated quality assurance." />
                        </div>
                    </div>
                </div>
                <div class="btngroup flex justify-center">
                    <PulseButtonViewNew @button-clicked="showModal = true" title="Schedule
                        a Free Consultation" />
                </div>
            </div>
        </section>

        <section class="feature py-10 px-2 lg:py-20 lg:px-0">
            <div class="container mx-auto">
                <div class="main-heading flex flex-col items-center text-newpurple font-semibold md:mb-10">
                    <span class="flex gap-1 items-center text-newpurple font-semibold text-xs uppercase">
                        <img src="/assets/home/feature.svg" alt="" class="w-4 h-4" />Features</span>
                    <h2 class="text-3xl lg:text-5xl !leading-snug font-semibold text-center mb-2">Why Choose <span
                            class="text-primary">CodeFlare?</span></h2>
                </div>
                <div class="feature-wrap">
                    <FeautreView />
                </div>
            </div>
        </section>

        <section class="cta py-10 px-2 lg:py-20 lg:px-0">
            <div class="container mx-auto">
                <div
                    class="cta_form max-w-1024 mx-auto flex flex-col md:flex-row justify-between items-center gap-8 p-6 md:py-14 md:px-10 rounded-20 bg-cover bg-no-repeat bg-center relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-ctaBg before:rounded-20">
                    <h2 class="text-white text-2xl md:text-3xl z-999 font-semibold text-center md:text-left">Have a
                        project in mind? <br class="hidden md:block" />Schedule your free
                        consultation now.</h2>
                    <div class="btngroup flex justify-center z-999">
                        <router-link to="/contact"
                            class="bg-btnGradient animate-Newpulse2 flex gap-3 py-4 px-4 rounded-lg font-bold shadow-btnShadow text-sm capitalize text-white justify-center items-center tracking-widest z-999">Let's
                            Talk <img src="/assets/home/arrow.svg" alt=""> </router-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="technology py-10 px-2 lg:py-20 lg:px-0 bg-[#eef3ff]">
            <div class="container">
                <div class="main-heading flex flex-col items-center text-newpurple font-semibold md:mb-10">
                    <span class="flex gap-1 items-center text-newpurple font-semibold text-xs uppercase">
                        <img src="/assets/home/technology.svg" alt="" class="w-4 h-4" />EXPERTISE</span>
                    <h2 class="text-3xl lg:text-5xl !leading-snug font-semibold text-center mb-2">Technologies <span
                            class="text-primary">We Serve</span></h2>
                </div>

                <div class="mb-10">
                    <TechnologyView />
                </div>

                <div class="btngroup flex justify-center">
                    <!-- <a href="/"
                        class="bg-btnGradient animate-Newpulse flex gap-3 py-4 px-4 rounded-lg font-bold shadow-btnShadow text-sm capitalize text-white justify-center items-center tracking-widest z-999">Get
                        a Quote <img src="/assets/home/arrow.svg" alt=""> </a> -->
                    <PulseButtonViewNew @button-clicked="showModal = true" title="Get
                        a Quote" />
                </div>

            </div>
        </section>

        <section class="roadmap py-10 px-2 lg:py-20 lg:px-0">
            <div class="container mx-auto">
                <div class="main-heading flex flex-col items-center text-newpurple font-semibold md:mb-10">
                    <span class="flex gap-1 items-center text-newpurple font-semibold text-xs uppercase">
                        <img src="/assets/home/process.svg" alt="" class="w-4 h-4" />WORK PROCESS</span>
                    <h2 class="text-3xl lg:text-5xl !leading-snug font-semibold text-center mb-2">Our <span
                            class="text-primary">Development Process</span></h2>
                </div>
                <div class="roadmap">
                    <RoadmapView />
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

        <section class="cta_2 py-10 px-2 lg:py-20 lg:px-0">
            <div class="container mx-auto">
                <div
                    class="cta_form_2 max-w-1024 mx-auto flex flex-col md:flex-row justify-between items-center gap-8 p-6 md:py-14 md:px-10 rounded-20 bg-cover bg-no-repeat bg-bottom relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-cta2 before:rounded-20">
                    <div class="z-999 max-w-2xl flex flex-col gap-4">
                        <h2 class="text-white text-3xl font-semibold text-center md:text-left">Some
                            clients call us their "secret weapon"</h2>
                        <p class="text-white">Whether you need a team extension, an ongoing flexible
                            collaboration, or a small pilot to start with, let us guide you through the process and turn
                            your vision into reality.</p>
                    </div>
                    <div class="btngroup flex justify-center z-999">
                        <router-link to="/contact"
                            class="bg-btnGradient animate-Newpulse2 flex gap-3 py-4 px-4 rounded-lg font-bold shadow-btnShadow text-sm capitalize text-white justify-center items-center tracking-widest z-999">Get
                            in touch <img src="/assets/home/arrow.svg" alt=""> </router-link>
                    </div>
                </div>
            </div>
        </section>

        <section class="blogs py-10 px-2 lg:py-20 lg:px-0 bg-[#eef3ff]">
            <div class="container mx-auto">
                <div class="main-heading flex flex-col items-center text-newpurple font-semibold md:mb-10">
                    <span class="flex gap-1 items-center text-newpurple font-semibold text-xs uppercase">
                        <img src="/assets/home/blog.svg" alt="" class="w-4 h-4" />Blogs</span>
                    <h2 class="text-3xl lg:text-5xl !leading-snug font-semibold text-center mb-2">We write a <span
                            class="text-primary">few things</span></h2>
                </div>
                <div class="mb-10">
                    <MainBlogView />
                </div>

                <div class="btngroup flex justify-center">
                    <router-link to="/blog"
                        class="bg-btnGradient animate-Newpulse flex gap-3 py-4 px-4 rounded-lg font-bold shadow-btnShadow text-sm capitalize text-white justify-center items-center tracking-widest z-999">See
                        Our Blogs <img src="/assets/home/arrow.svg" alt=""> </router-link>
                </div>
            </div>
        </section>


        <!-- <section class="portfolio py-10 px-2 lg:py-20 lg:px-0">
            <div>
                <PortfolioHomeView/>
            </div>
        </section> -->

        <section class="faq py-10 px-2 lg:py-20 lg:px-0 bg-[#eef3ff]">
            <div class="container mx-auto">
                <div class="main-heading flex flex-col items-center text-newpurple font-semibold md:mb-10">
                    <span class="flex gap-1 items-center text-newpurple font-semibold text-xs uppercase">
                        <img src="/assets/home/blog.svg" alt="" class="w-4 h-4" />FAQ</span>
                    <h2 class="text-3xl lg:text-5xl !leading-snug font-semibold text-center mb-2 capitalize">frequently
                        asked <span class="text-primary">questions</span></h2>
                </div>
                <div class="faq">
                    <FaqView />
                </div>

            </div>
        </section>

        <section class="contact___form py-10 px-2 lg:py-20 lg:px-0">
            <div class="container mx-auto">
                <div class="heading">
                    <div class="main-heading flex flex-col items-center text-newpurple font-semibold md:mb-10">
                        <span class="flex gap-1 items-center text-newpurple font-semibold text-xs uppercase">
                            <img src="/assets/home/contact.svg" alt="" class="w-4 h-4" />Contact</span>
                        <h2 class="text-3xl lg:text-5xl !leading-snug font-semibold text-center mb-2">Get In <span
                                class="text-primary">Touch</span></h2>
                    </div>

                    <ContactForm />

                </div>
            </div>
        </section>

        <ModalView :isVisible="showModal" @close="showModal = false" />
    </div>
</template>


<script>
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, } from 'vue3-carousel'
// import { gsap } from 'gsap';
// import PortfolioHomeView from '@/components/PortfolioHomeView.vue'
import PulseButtonView from '@/components/PulseButtonView.vue'
import PulseButtonViewNew from '@/components/PulseButtonViewNew.vue'
import ServiceView from '@/components/ServiceView.vue'
import ModalView from '@/components/ModalView.vue'
import TestimonialsView from '@/components/TestimonialsView.vue'
import MainBlogView from '@/components/MainBlogView.vue'
import TechnologyView from '@/components/TechnologyView.vue'
import FeautreView from '@/components/FeautreView.vue'
import RoadmapView from '@/components/RoadmapView.vue'
import ContactForm from '@/components/ContactForm.vue'
import FaqView from '@/components/FaqView.vue'
import Vue3autocounter from 'vue3-autocounter';


export default {
    name: 'App',
    components: {
        // Carousel,
        // Slide,
        PulseButtonView,
        // PortfolioHomeView,
        PulseButtonViewNew,
        ServiceView,
        TestimonialsView,
        MainBlogView,
        TechnologyView,
        FeautreView,
        RoadmapView,
        ContactForm,
        FaqView,
        ModalView,
        'vue3-autocounter': Vue3autocounter,

    },
    data() {
        return {
            showModal: false,
            aboutCards: [
                {
                    number: 6,
                    description: "Years of Experience",
                    class: "bg-red-100 border-red-100",
                },
                {
                    number: 15,
                    description: "Happy Customer's",
                    class: "bg-yellow-100 border-yellow-100",
                },
                {
                    number: 30,
                    description: "Team Strength",
                    class: "bg-indigo-100 border-indigo-100",
                },
                {
                    number: 100,
                    description: "Project Completed",
                    class: "bg-lime-100 border-lime-100",
                }
            ]
        }
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


<script setup>
import { ref, onMounted } from 'vue';
const typedText = ref(null);
const cursor = ref(null);

const textArray = ["Web Development", "App Development ", "Software Development", "CMS Development"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (typedText.value && charIndex < textArray[textArrayIndex].length) {
        if (cursor.value && !cursor.value.classList.contains("typing")) {
            cursor.value.classList.add("typing");
        }
        typedText.value.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        if (cursor.value) {
            cursor.value.classList.remove("typing");
        }
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (typedText.value && charIndex > 0) {
        if (cursor.value && !cursor.value.classList.contains("typing")) cursor.value.classList.add("typing");
        typedText.value.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        if (cursor.value) cursor.value.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

onMounted(() => {
    if (textArray.length && typedText.value) {
        setTimeout(type, newTextDelay + 50);
    }
});
</script>


<style scoped>
.cta_form {
    background-image: url(/public/assets/home/cta.jpg);
}

.cta_2 .cta_form_2 {
    background-image: url(/public/assets/home/cta-2.jpg);
}

.typing_text h1 span.cursor {
    display: inline-block;
    background-color: #ccc;
    margin-left: 0.1rem;
    width: 3px;
    animation: blink 1s infinite;
}

.typing_text h1 span.cursor.typing {
    animation: none;
}

@keyframes blink {
    0% {
        background-color: #ccc;
    }

    49% {
        background-color: #ccc;
    }

    50% {
        background-color: transparent;
    }

    99% {
        background-color: transparent;
    }

    100% {
        background-color: #ccc;
    }
}


.about_content h2 span::after {
    background-image: url('/public/assets/home/underline-purple.svg');
}
</style>