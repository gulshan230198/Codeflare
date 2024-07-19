<template>
  <div class="dark:bg-slate-900">
      Service
  </div>
</template>

<script></script>

<style scoped>
.typing__text h1 span.typed-text {
  background-image: linear-gradient(270deg, #33b4ff 0%, #2b86b9 100%) !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.typing__text h1 span.cursor {
  display: inline-block;
  background-color: #ccc;
  margin-left: 0.1rem;
  width: 3px;
  animation: blink 1s infinite;
}

.typing__text h1 span.cursor.typing {
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

body.dark .counter-wrap {
  background: #1e293b;
}

/* sservices */
.top-small {
  background: -webkit-linear-gradient(#3eb8ff, #1b6893);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 14px;
}



.overview__img img {
  animation: 3s ease-in-out infinite updown2;
}


@keyframes updown2 {

  0%,
  100% {
    transform: translate(0, 0);
    -webkit-transition: .4s;
    -moz-transition: .4s;
    -o-transition: .4s;
    transition: .4s;
  }

  50% {
    transform: translate(0, 10px);
    -webkit-transition: .4s;
    -moz-transition: .4s;
    -o-transition: .4s;
    transition: .4s;
  }
}


.custom-dev img {
  animation: 5s linear infinite pulse;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }
}





/* overview */

/* .top-small::before {
    content: "";
    display: inline-block;
    width: 6px;
    aspect-ratio: 1/1;
    border-radius: 1rem;
    background: -webkit-linear-gradient(#3eb8ff, #1b6893);
  } */

/* .top-small::after {
    content: "";
    display: inline-block;
    width: 6px;
    aspect-ratio: 1/1;
    border-radius: 1rem;
    background: -webkit-linear-gradient(#3eb8ff, #1b6893);
  } */

.sec-title {
  /* font-size: 48px; */
  /* line-height: 1.3; */
  /* margin-bottom: 12px; */
}

.sub-text {
  color: var(--title);
}

.service_card {
  /* padding: 2rem; */
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  /* box-shadow: 2.4em 5.6em 3.2em rgba(0, 0, 0, .08); */
  /* transition: all 0.3s ease-in-out 0s; */
}

.service_card:hover::before {
  left: 0;
  right: auto;
  transform: scaleX(1);
  transform-origin: left;
}




/* :is(.service_card:hover .content-text h3, .service_card:hover .content-text p, .service_card:hover a) {
    color: #FFF !important;
  }

  .service_card:hover .service__icon {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(16deg) brightness(107%) contrast(104%);
  } */

.service_card::before {
  /* content: "";
    border-radius: inherit;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: auto;
    right: 0;
    transform: scaleX(0);
    transform-origin: right; */
  /* background: transparent linear-gradient(270deg, #65a7cd 0%, #2b86b9 100%) 0% 0% no-repeat padding-box !important; */
  /* z-index: -3; */
  /* transition: transform 0.5s ease 0s; */
}

/* 
  :is(path#Path_208) {
    color: var(--primary);
  } */

/* Overview */
/* .step-count {
    max-width: 4rem;
    min-height: 160px;
  } */

.overview-card {
  /* box-shadow: 2.4em 5.6em 3.2em rgba(0, 0, 0, .08); */
  /* transition: all 0.5s ease-in-out;
    cursor: pointer; */
}


/* choose us */
/* .stats-point span {
    background-image: linear-gradient(270deg, #33b4ff 0%, #2b86b9 100%) !important;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 62px;
  } */

/* .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;

  } */


.industry_wrap {
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  /* cursor: pointer;
    transition: all 0.5s ease-in-out;
    background: #fafafa; */
}

/* .industry_wrap:hover {
    transform: scale(1.03);
    filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.12));
    background: #FFF;
  } */


/* .blog-tags {
    color: var(--primary);
  } */

/* .blog-card {
    border-radius: 12px;
    background-color: #eee9e4;
    background-color: #fff;
  } */

/* .blog-card h4 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre;
  } */

/* .user-testimonials {
    box-shadow: 0 11px 22px 0 rgba(0, 0, 0, .05);
    width: 350px;
    height: 275px;
    padding: 24px;
    position: relative;
  } */

/* .new__testi{
    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) -2%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 111%);
    mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) -2%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 111%);
  } */

/* .review-message::before{
  content: "\201C";
    display: block;
    font-size: 24px;
    left: 16px;
    position: absolute;
    top: 5px;
} */

/* .testi-image {
    top: 28%;
    z-index: -1;
    max-width: 838px;
    right: 0;
    border-radius: 40px;
  } */

/* .stats {
    background: linear-gradient(0deg, rgb(0, 117, 185), rgb(183, 224, 247));
  } */
/* 
  .stats-point img {
    mix-blend-mode: darken;
    filter: grayscale(1);
  } */


.blog-card .readMore {
  /* background-color: #37377b08;
    border: 1px solid #0b0b2d17; */
  /* border-radius: 40px; */
  /* height: 40px; */
  /* transition: all 0.2s ease-in-out; */
}

/* .blog-card .readMore:hover {
    background-color: #0b0b2d17;
  } */

/* .techno-img img{
  filter: grayscale(1);
} */

/* :is(.testimonial, .portfolio ){
  background:url('') no-repeat ;
  background-size: cover;
  background-position: center center;
  padding: 80px 0;
} */

/* .portfolio .portfolio-wrap{
  gap: 120px;
} */


/* testimonial */
/* .testimonial-wrap {
    width: 100%;
    max-width: 1024px;
    border-radius: 30px;
} */

/* .home-about-bg{
  z-index: 0;
    width: 60%;
    position: absolute;
    top: auto;
    bottom: 0%;
    left: auto;
    right: 0%;
} */


/* input.form-control{
  height: 48px; 
} */
/* 
.form-control:focus{
  box-shadow: none;
  border-color: var(--primary);
} */

.form-bg {
  background-color: var(--primary);
  padding: auto;
}



</style>