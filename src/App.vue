<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data(){
    return{
      showModal: false,
    }
  }
}
</script>



<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

@font-face {
  font-family: 'Poppins';
  src: url('/public/assets/fonts/Poppins-Thin.ttf');
  font-weight: 100;
}

@font-face {
  font-family: 'Poppins';
  src: url('/public/assets/fonts/Poppins-Light.ttf');
  font-weight: 200;
}

@font-face {
  font-family: 'Poppins';
  src: url('/public/assets/fonts/Poppins-Black.ttf');
  font-weight: 300;
}

@font-face {
  font-family: 'Poppins';
  src: url('/public/assets/fonts/Poppins-Regular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Poppins';
  src: url('/public/assets/fonts/Poppins-Medium.ttf');
  font-weight: 500;
}

@font-face {
  font-family: 'Poppins';
  src: url('/public/assets/fonts/Poppins-SemiBold.ttf');
  font-weight: 600;
}

@font-face {
  font-family: 'Poppins';
  src: url('/public/assets/fonts/Poppins-Bold.ttf');
  font-weight: 700;
}

@font-face {
  font-family: 'Poppins';
  src: url('/public/assets/fonts/Poppins-ExtraBold.ttf');
  font-weight: 800;
}

body {
  /* background-color: #1E1E1E; */
  font-family: 'Poppins';
}

/* Carousel CSS For Testimonial card  */
 .new_slide .carousel__pagination-button:hover::after,
 .new_slide .carousel__pagination-button--active::after {
  background: linear-gradient(180deg, rgba(124, 108, 228, 1) 0%,
   var(--token-21c381bc-664b-4277-97a1-69816b34b276, rgb(98, 77, 227))  100%);
}

 .new_slide .carousel__pagination-button::after {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #9394957f;
}


 .new_slide .carousel__prev,
 .new_slide .carousel__next {
  border: 1px solid var(--primary);
  width: 70px;
  height: 70px;
  border-radius: 50%;
}


:is(.nav_link:hover img , .router-link-active img){
 opacity: 1;
}


@media screen and (max-width:1200px){
  .testimonial .carousel__prev {
    left: 0;
}

.testimonial .carousel__next {
    right: 0;
}

}

:is(.page-BlogView .menu li .nav_link,
 .page-BlogDeatilView .menu li .nav_link,
 .page-ContactView .menu li .nav_link,
 .page-PortfolioView .menu li .nav_link ){
  color: #000;
}

:is(.page-BlogView .mobile-menu,
 .page-BlogDeatilView .mobile-menu,
 .page-ContactView .mobile-menu,
 .page-PortfolioView .mobile-menu ){
  filter: brightness(0) saturate(100%)
}

/* ::-webkit-scrollbar{
  display: none;
} */

.purple__filter{
  filter: brightness(0) saturate(100%) invert(44%) sepia(100%) saturate(3772%) hue-rotate(236deg) brightness(103%) contrast(99%);
}
</style>
