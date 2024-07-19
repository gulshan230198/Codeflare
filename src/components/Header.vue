<template>
  <div>
    <header class="border-white z-10 relative">
      <div class="">
        <div class="container mx-auto">
          <nav class="p-2 flex w-full justify-between items-center">
              <a href="/" class="main-logo z-999">
                <img src="/Logo.png" alt="" class="max-w-40 w-full">
              </a>
            <ul class="menu xl:flex justify-center gap-12 items-center  px-20 rounded-20 py-4 z-999 hidden">
              <li class="menu-item1">
                <router-link to="/"
                  class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2">Home
                  <img src="/assets/home/menu-arrow.svg" alt="" class="opacity-0 ">
                </router-link>
              </li>
              <li class="menu-item2">
                <router-link to="/about"
                  class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2">About
                  <img src="/assets/home/menu-arrow.svg" alt="" class="opacity-0 ">
                </router-link>
              </li>
              <li class="menu-item3">
                <span
                @click="showMenu"
                  class="cursor-pointer nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 ">Services
                  <img src="/assets/home/down-arrow.svg" alt="" class="transition duration-300 ease-in" :class="menuVisible ? 'rotate-180' : 'rotate-0'">
                </span>
              </li>
              <li class="menu-item4">
                <router-link to="/blog"
                  class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2">Blogs
                  <img src="/assets/home/menu-arrow.svg" alt="" class="opacity-0 ">
                </router-link>
              </li>
              <li class="menu-item5">
                <router-link to="/contact"
                  class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2">Contact
                  <img src="/assets/home/menu-arrow.svg" alt="" class="opacity-0 ">
                </router-link>
              </li>
            </ul>

            <div class="quote-btn z-999 hidden xl:block">
              <router-link to="/contact"
                class="bg-btnGradient py-3 px-4 rounded-lg font-semibold shadow-btnShadow text-sm capitalize text-white flex justify-center items-center tracking-widest">
                <img src="/assets/home/phone.gif" alt="" class="w-4 h-4 mr-2" /> Let's Talk
            </router-link>
            </div>
            <div class="block xl:hidden mobile-menu">
              <img src="/assets/home/hamburger.svg" alt="" class="w-8 h-8">
            </div>
          </nav>
        </div>
      </div>

      <!-- service -->
      <div class="hidden xl:block" :class="menuVisible ? '' : 'hidden'" @mouseover="showMenu" @mouseleave="hideMenu" >
        <div v-show="menuVisible" class="main grid grid-cols-3 bg-white rounded-30 shadow-xl fixed top-24 left-0 right-0 z-9999 w-full max-w-7xl mx-auto">
          <div class="menu_item p-6 w-full bg-gray-50 rounded-s-30">
            <nav>
              <ul class="service flex flex-col gap-5">
                <li
                  v-for="(item, index) in NavMenu"
                  :key="index"
                  @mouseover="setHoveredItem(index)"
                  @mouseleave="setHoveredItem(index)"
                  class="cursor-pointer"
                  :class="{ 'active': index === hoveredItem }"
                >
                  <span class="text-xl cursor-pointer tracking-wide font-semibold flex gap-2 items-center"  :class="{ 'text-primary': index === hoveredItem }">{{ item.title }} <img v-show="index === hoveredItem" src="/assets/home/new-arrow.svg" alt=""></span>
                </li>
              </ul>
            </nav>
          </div>
          <div class="menu_item w-full">
            <div class="content menu-items-content p-6 w-full h-full">
              <div v-if="hoveredItem !== null && menuContent[hoveredItem]">
                <h2 class="font-semibold text-2xl mb-2">{{ menuContent[hoveredItem].title }}</h2>
                <p class="font-medium mb-4">{{ menuContent[hoveredItem].text }}</p>
                <ul class="grid grid-cols-2 gap-4">
                  <li v-for="(link, linkIndex) in menuContent[hoveredItem].links" :key="linkIndex">
                    <a :href="link.url" class="hover:text-primary">{{ link.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> 
          <div class="menu_item h-full overflow-hidden">
            <div class="h-full">
                <img src="/assets/home/service.jpg" alt="" class="w-full rounded-e-30 h-full object-cover brightness-70">
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  components: {},
  data() {
    return {
      menuVisible: false,
      hoveredItem: 0,
      NavMenu:[
        {
          title:'Mobile App Development'
        },
        {
          title:'Web Development'
        },
        {
          title:'CMS Development'
        },
        {
          title:'E-commerce'
        },
        {
          title:'Software Development'
        },
        {
          title:'Digital Marketing'
        },
        {
          title:'AI/ML/GenAI'
        },
        {
          title:'UI/UX'
        },
      ],
      menuContent: [
        {
          title: "Mobile App Development",
          text: "Creating user-friendly and feature-rich mobile applications for both iOS and Android platforms. Our solutions ensure optimal performance and user engagement.",
          links: [
            { name: "iOS Development", url: "#" },
            { name: "Android Development", url: "#" },
            { name: "Cross-Platform Apps", url: "#" },
            { name: "Mobile UI/UX Design", url: "#" }
          ]
        },
        {
          title: "Web Development",
          text: "Developing responsive and scalable web applications tailored to your business needs. From front-end to back-end, we cover all aspects of web development.",
          links: [
            { name: "Front-End Development", url: "#" },
            { name: "Back-End Development", url: "#" },
            { name: "Full-Stack Development", url: "#" },
            { name: "Web Maintenance", url: "#" }
          ]
        },
        {
          title: "CMS Development",
          text: "Providing custom CMS solutions to manage your content efficiently. We specialize in popular CMS platforms to ensure easy content updates and management.",
          links: [
            { name: "WordPress", url: "#" },
            { name: "Drupal", url: "#" },
            { name: "Joomla", url: "#" },
            { name: "Custom CMS", url: "#" }
          ]
        },
        {
          title: "E-commerce",
          text: "Building robust e-commerce platforms that drive innovation and generate rapid revenues. Turn every click into a customer with our diverse e-commerce solutions.",
          links: [
            { name: "Magento", url: "#" },
            { name: "Bigcommerce", url: "#" },
            { name: "Ubercart", url: "#" },
            { name: "CSCart", url: "#" }
          ]
        },
        {
          title: "Software Development",
          text: "Creating custom software solutions that streamline your business processes. From desktop to cloud-based applications, we cover a wide range of software development services.",
          links: [
            { name: "Custom Software", url: "#" },
            { name: "Enterprise Solutions", url: "#" },
            { name: "SaaS Development", url: "#" },
            { name: "API Development", url: "#" }
          ]
        },
        {
          title: "Digital Marketing",
          text: "Enhancing your online presence with strategic digital marketing services. Our expertise covers SEO, SEM, social media marketing, and content marketing.",
          links: [
            { name: "SEO", url: "#" },
            { name: "SEM", url: "#" },
            { name: "Social Media", url: "#" },
            { name: "Content Marketing", url: "#" }
          ]
        },
        {
          title: "AI/ML/GenAI",
          text: "Leveraging artificial intelligence and machine learning to drive innovation and efficiency. Our solutions include predictive analytics, natural language processing, and more.",
          links: [
            { name: "Machine Learning", url: "#" },
            { name: "AI Development", url: "#" },
            { name: "GenAI Solutions", url: "#" },
            { name: "Data Science", url: "#" }
          ]
        },
        {
          title: "UI/UX",
          text: "Designing intuitive and engaging user interfaces and experiences. Our focus is on creating designs that not only look good but also offer a seamless user experience.",
          links: [
            { name: "UI Design", url: "#" },
            { name: "UX Research", url: "#" },
            { name: "Prototyping", url: "#" },
            { name: "User Testing", url: "#" }
          ]
        }
      ]
    };
  },
  watch: {
    menuVisible(newValue) {
      if (newValue) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    },
  },
  methods: {
    // showMenu(){
    //   this.menuVisible = !this.menuVisible;
    // },
      showMenu() {
      this.menuVisible = true;
    },
    hideMenu() {
      this.menuVisible = false;
      this.hoveredItem = null;
    },
    setHoveredItem(index) {
      this.hoveredItem = index;
    }
  }
};
</script>


<style scoped></style>
