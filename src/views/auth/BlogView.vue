<template>
  <div>
    <section class="py-10 px-2 md:px-0">
      <div class="container mx-auto flex flex-col gap-10">
        <div class="main-heading flex justify-between items-center">
          <h1 class="text-3xl lg:text-5xl leading-normal font-bold text-black">Blog</h1>
          <div class="dropdown">
            <select name="sort" id="sort" class="Filter__Dropdown px-4 p-2 min-w-48 w-full text-xs appearance-none focus:outline-gray-200 rounded-30 bg-gray-200 focus:outline-offset-2 text-black shadow-newshadow">
              <option value="" selected disabled>Sort by</option>
              <option value="content.title:asc">Name: Asc</option>
              <option value="content.title:desc">Name: Desc</option>
              <option value="first_published_at:asc">Date: Asc</option>
              <option value="first_published_at:desc">Date: Desc</option>
            </select>
          </div>
        </div>
        <div class="blog_wrap">
          <BlogCardView />
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import BlogCardView from '@/components/BlogCardView.vue';
// import BlogDeatilView from '@/components/BlogDeatilView.vue';

export default {
  name: "BlogView",
  components:{
    BlogCardView,
    // BlogDeatilView
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>


<style scoped>
.coin_neww:hover img {
  filter: brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(13%) hue-rotate(37deg) brightness(104%) contrast(104%);
}
</style>