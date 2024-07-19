<template>
  <div>
    <footer class="bg-Newblack px-2 lg:p-0">
      <div class="container mx-auto">
        <div class="footer-heading py-16 flex flex-col gap-6 lg:flex-row justify-between items-center border-b border-gray-600">
          <h2 class="text-2xl lg:text-42 text-white font-semibold text-center md:text-left">Your Vision. Our Craft. Unforgettable Impact.</h2>
          <div class="btngroup flex justify-center">
            <router-link to="/contact"
              class="bg-btnGradient animate-Newpulse2 flex gap-3 py-4 px-4 rounded-lg font-bold shadow-btnShadow text-sm capitalize text-white justify-center items-center tracking-widest z-999">Let's
              Talk! <img src="/assets/home/arrow.svg" alt=""> </router-link>
          </div>
        </div>
        <div class="bottom-footer pt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:justify-between">
          <div class="footer_wrap">
            <div class="bottom-logo mb-5">
              <router-link to="/">
                <img src="/Logo.png" alt="" class="max-w-40 w-full">
              </router-link>
            </div>
            <div class="contact_detail flex flex-col gap-3">
              <a href="/" class="flex gap-3 items-center">
                <img src="/assets/home/location-pin.gif" alt="" class="w-6 h-6">
                <span class="text-white non-italic">Mohali, PB, India</span>
              </a>
              <a href="mailto:info@codeflare.in" class="flex gap-3 items-center">
                <img src="/assets/home/mail.gif" alt="" class="w-6 h-6">
                <span class="text-white non-italic">info@codeflare.in</span>
              </a>
              <a href="tel:+9176578 12422" class="flex gap-3 items-center">
                <img src="/assets/home/mobile.gif" alt="" class="w-6 h-6">
                <span class="text-white non-italic">+91 76578 12422</span>
              </a>
            </div>
          </div>
          <div class="menu_items">
            <h3 class="text-white font-semibold text-lg mb-4">Quick links</h3>
              <ul class="flex flex-col gap-4">
                <li class="menu-item1">
                  <router-link to="" class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 hover:text-primary">Home
                  </router-link>
                </li>
                <li class="menu-item2">
                  <router-link to="/about" class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 hover:text-primary">About
                  </router-link>
                </li>
                <li class="menu-item4">
                  <router-link to="/blog" class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 hover:text-primary">Blogs
                  </router-link>
                </li>
                <li class="menu-item5">
                  <router-link to="/portfolio" class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 hover:text-primary">portfolio
                  </router-link>
                </li>
                <li class="menu-item5">
                  <router-link to="/contact" class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 hover:text-primary">Contact
                  </router-link>
                </li>
              </ul>
          </div>

          <div class="menu_items">
            <h3 class="text-white font-semibold text-lg mb-4">Services</h3>
              <ul class="flex flex-col gap-4">
                <li class="menu-item1">
                  <router-link to="/" class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 hover:text-primary">Web development
                  </router-link>
                </li>
                <li class="menu-item2">
                  <router-link to="/" class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 hover:text-primary">CMS development
                  </router-link>
                </li>
                <li class="menu-item4">
                  <router-link to="/" class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 hover:text-primary">Mobile App development
                  </router-link>
                </li>
                <li class="menu-item5">
                  <router-link to="/" class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 hover:text-primary">E-commerce
                  </router-link>
                </li>
                <li class="menu-item5">
                  <router-link to="/" class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 hover:text-primary">AI/ML/GenAI
                  </router-link>
                </li>
                <li class="menu-item5">
                  <router-link to="/" class="nav_link transition duration-300 ease-in-out text-white capitalize font-medium flex items-center gap-2 hover:text-primary">Digital Marketing
                  </router-link>
                </li>
              </ul>
          </div>
          <div class="subscribe_letter">
            <h3 class="text-white font-semibold text-lg mb-4">Subscribe</h3>
            <div
              class="z-999 relative max-w-md mx-auto lg:bg-transparent lg:border border-gray-300 rounded-3xl max-lg:py-3 lg:rounded-full lg:h-12 lg:p-1.5 lg:flex-row gap-2 lg:gap-0  flex items-center justify-between">
              <input type="text" name="email"
                class="py-2 px-6 bg-transparent rounded-full max-lg:border border-gray-300  text-gray-100 max-lg:text-center placeholder:text-gray-400 placeholder:text-start focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
                placeholder="Enter your email..">
              <button type="submit"
                class="py-2 px-5 text-sm bg-indigo-500 shadow-md rounded-full absolute right-1 text-white font-semibold hover:bg-indigo-700">Subscribe</button>
            </div>
          </div>
        </div>
        <div class="bottom-copyright grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pb-10">
          <div class="social_icon">
            <ul class="flex items-center justify-center sm:justify-start gap-6">
              <li>
                <a href="https://www.facebook.com/codeflare.in/" target="_blank">
                  <img src="/assets/home/facebook.svg" alt="">
                </a>
              </li>
              <li>
                <a href="https://x.com/codeflare_in/" target="_blank">
                  <img src="/assets/home/twitter.svg" alt="">
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/code-flare/" target="_blank">
                  <img src="/assets/home/linkedin.svg" alt="">
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/codeflare.in/" target="_blank">
                  <img src="/assets/home/instagram.svg" alt="">
                </a>
              </li>
            </ul>
          </div>
          <div class="copy-right text-white text-sm text-center sm:text-end">
            © {{ currentYear }} <router-link to="/" class="font-medium underline underline-offset-4 text-primary">CodeFlare Softtech
            </router-link>  All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name:'FooterComponents',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>

</style>