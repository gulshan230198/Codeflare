<template>
    <div class="flex flex-col gap-20 px-2 md:px-0">
        <div class="blog-card grid lg:grid-cols-2 gap-10"  >
            <div class="blog_image h-full">
                <img :src="recent_blogs.image" alt="" class="w-full h-full rounded-30 object-cover">
            </div>
            <div class="content border-b border-gray-300">
                <router-link :to="'blog/' + recent_blogs.slug" class="inline-block text-black font-semibold text-2xl md:text-4xl mb-4 leading-snug ">{{ recent_blogs.title }}</router-link>
                <p class="text-black text-base md:text-lg mb-4 tracking-wider">{{recent_blogs.content}} </p>
                <div class="flex justify-start items-center">
                    <div class="published_date">
                        <span class="date text-gray-400 tracking-wide not-italic text-xs">{{ recent_blogs.date }}</span>
                    </div>
                </div>
            </div>

        </div>

            <div>
                <div class="article_heading mb-10">
                    <h2 class="text-3xl lg:text-5xl leading-normal font-bold text-black">Latest articles</h2>
                </div>
                <div class="card_blogs grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    <div 
                    v-for="(blog, index) in all_blogs" 
                    :key="index" 
                    class="blog-card h-full flex flex-col shadow-newshadow bg-gray-100 rounded-xl"
                >
                    <div class="blog_image h-full">
                    <img :src="blog.image" alt="" class="w-full h-full rounded-t-xl">
                    </div>
                    <div class="content p-4 rounded-xl">
                    <router-link :to="{ name: 'BlogDeatilView', params: { slug: blog?.slug } }" class="!line-clamp-2 inline-block h-14 text-black font-semibold text-xl mb-3">
                        {{ blog.title }}
                    </router-link>
                    <div class="flex justify-between items-center">
                        <div class="user flex items-center gap-2">
                        <img :src="blog.authorImage" alt="" class="w-6 h-6">
                        <span class="text-black">{{ blog.authorName }}</span>
                        </div>
                        <div class="published_date">
                        <span class="date text-black tracking-normal not-italic">{{ blog.date }}</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

    </div>
</template>

<script>
    export default {
  data() {
    return {
      blogs: [
        {

          image: "/assets/blog/wordpress.png",
          title: "Unlocking the Power of WordPress: Tips and Tricks for Beginners",
          slug: "unlocking-the-power-of-wordpress-tips-and-tricks-for-beginners",
          authorImage: "/assets/blog/blog-user.png",
          authorName: " User",
          content: "WordPress is a powerful and versatile platform that powers over 40% of websites on the internet. Its ease of use, flexibility, and a vast array of plugins and themes make it the go-to choice for beginners and professionals alike. If you're new to WordPress, this guide will help you unlock its potential with essential tips and tricks.",
          date: "May 30th 2024",
          link: "#"
        },
        {
          image: "/assets/blog/web-development.webp",
          title: "Exploring Web Development: From Basics to Advanced Techniques",
          slug: "exploring-web-development-from-basics-to-advanced-techniques",
          authorImage: "/assets/blog/blog-user.png",
          authorName: "Jane Doe",
          date: "June 1st 2024",
          link: "#"
        },
        // {
        //   image: "/assets/blog/ui.jpg",
        //   title: "Cryptocurrency Market Trends in 2023",
        //   slug: "cryptocurrency-market-trends-in-2023",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "John Smith",
        //   date: "Jan. 10th 2023",
        //   link: "#"
        // },
        // {
        //   image: "/assets/blog/blog4.jpg",
        //   title: "How to Secure Your Digital Wallet",
        //    slug: "how-to-secure-your-digital-wallet",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Alice Johnson",
        //   date: "Feb. 5th 2023",
        //   link: "#"
        // },
        // {
        //   image: "/assets/blog/blog5.jpg",
        //   title: "Top 10 Cryptocurrencies to Watch",
        //    slug: "top-10-cryptocurrencies-to-watch",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Robert Brown",
        //   date: "Mar. 12th 2023",
        //   link: "#"
        // },
        // {
        //   image: "/assets/blog/blog6.jpg",
        //   title: "Decentralized Finance Explained",
        //    slug: "decentralized-finance-explained",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Laura White",
        //   date: "Apr. 22nd 2023",
        //   link: "#"
        // },
        // {
        //   image: "/assets/blog/blog7.jpg",
        //   title: "The Future of NFTs",
        //    slug: "the-future-of-nfts",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Michael Green",
        //   date: "May. 19th 2023",
        //   link: "#"
        // },
        // {
        //   image: "/assets/blog/blog8.jpg",
        //   title: "Guide to Initial Coin Offerings",
        //    slug: "guide-to-initial-coin-offerings",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Emma Davis",
        //   date: "Jun. 8th 2023",
        //   link: "#"
        // },
        // {
        //   image: "/assets/blog/blog9.jpg",
        //   title: "Smart Contracts: What You Need to Know",
        //    slug: "smart-contracts-what-you-need-to-know",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "William Harris",
        //   date: "Jul. 27th 2023",
        //   link: "#"
        // },
        // {
        //   image: "/assets/blog/blog10.jpg",
        //   title: "Blockchain in Healthcare",
        //    slug: "blockchain-in-healthcare",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Sophia Martin",
        //   date: "Aug. 14th 2023",
        //   link: "#"
        // }
      ]
    };
  },

  computed : {
    recent_blogs(){
        return this.blogs?.[0];
    },

    all_blogs(){
        return this.blogs.filter((el , index) => index != 0);
    }
  }
};

</script>

<style>
  
  </style>