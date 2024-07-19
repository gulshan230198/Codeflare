<template>
  <div class="pb-20 px-2 md:px-0">
      <div class="blog-card bg-gray-100 max-w-6xl p-5 lg:p-10 rounded-30 mx-auto">
    <div class="blog_heading border-b border-gray-600 lg:pt-8 pb-12 flex flex-col md:flex-row gap-5 md:gap-10 items-start">
      <div class="back-btn cursor-pointer text-black flex gap-2 items-center" @click="$router.go(-1)">
        <img src="/assets/blog/back-arrow-icon.svg" alt="" class="w-12 h-12">
      </div>
      <div class="main flex flex-col gap-5">
        <span class="text-black text-sm">Getting Started · <span class="text-primary">5 min read</span> </span>
        <h1 class="blog-title text-black text-2xl md:text-4xl font-semibold">{{ blog?.title }}</h1>
        <p class="short-text text-black text-lg tracking-wide leading-7">{{ blog?.shortText }}</p>
        <div class="published-date">
          <strong class="text-gray-400 text-xs">PUBLISHED ON : </strong>
          <strong class="text-gray-400 text-xs">{{ blog?.date }}</strong>
        </div>
      </div>
    </div>

    <div class="blog_image py-10">
      <img :src="blog?.image" alt="" class="max-w-6xl mx-auto w-full lg:h-[550px] rounded-30">
    </div>

    <div class="blog_content flex flex-col gap-6">
      <div class="blog-content" v-html="blog?.content" ></div>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      blog:{},
      blogs: [
        {
          
          image: "/assets/blog/wordpress.png",
          title: "Unlocking the Power of WordPress: Tips and Tricks for Beginners",
          slug: "unlocking-the-power-of-wordpress-tips-and-tricks-for-beginners",
          authorImage: "/assets/blog/wordpress.png",
          authorName: " User",
          date: "Nov. 30th 2022",
          content: `<p class="leading-7 mb-5 text-black text-lg tracking-wide">WordPress is a powerful and versatile platform that powers over 40% of websites on the internet. Its ease of use, flexibility, and a vast array of plugins and themes make it the go-to choice for beginners and professionals alike. If you're new to WordPress, this guide will help you unlock its potential with essential tips and tricks.</p><h2 class="font-semibold mb-4 text-3xl text-black">Why Choose WordPress?</h2><h3 class="font-semibold mb-4 text-xl text-black">User-Friendly Interface</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">WordPress offers an intuitive interface that allows even non-technical users to create and manage websites with ease. Its simple dashboard layout provides quick access to all necessary features, from writing posts to customizing the site’s appearance.</p><h3 class="font-semibold mb-4 text-xl text-black">Extensive Customization Options</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">With thousands of themes and plugins available, WordPress allows you to customize your website to fit your brand and functionality needs. Whether you want a blog, an e-commerce store, or a portfolio, there's a theme and plugin for you.</p><h3 class="font-semibold mb-4 text-xl text-black">SEO-Friendly</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">WordPress is built with search engine optimization (SEO) in mind. It offers several SEO-friendly features, including clean permalink structures, easy content management, and plugins like Yoast SEO to help you optimize your site further.</p><h2 class="font-semibold mb-4 text-3xl text-black">Getting Started with WordPress</h2><h3 class="font-semibold mb-4 text-xl text-black">1. Choosing a Domain and Hosting Provider</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">Your journey begins with selecting a domain name and a reliable hosting provider. Opt for a domain name that reflects your brand and is easy to remember. Popular hosting providers for WordPress include Bluehost, SiteGround, and WP Engine.</p><h3 class="font-semibold mb-4 text-xl text-black">2. Installing WordPress</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">Most hosting providers offer one-click WordPress installations. Follow the instructions provided by your host to install WordPress on your domain. Once installed, you'll receive login details for your WordPress dashboard.</p><h3 class="font-semibold mb-4 text-xl text-black">3. Selecting a Theme</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">Choose a theme that aligns with your website’s purpose. WordPress offers both free and premium themes. For beginners, free themes such as Astra or Neve provide excellent customization options and responsive design.</p><h3 class="font-semibold mb-4 text-xl text-black">4. Essential Plugins</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">Plugins extend the functionality of your WordPress site. Some must-have plugins for beginners include:</p><ul><li><strong>Yoast SEO</strong>: Helps optimize your content for search engines.</li><li><strong>Akismet</strong>: Protects your site from spam comments.</li><li><strong>Jetpack</strong>: Offers security, performance, and site management features.</li><li><strong>WooCommerce</strong>: Essential for e-commerce sites.</li></ul><h2 class="font-semibold mb-4 text-3xl text-black">Tips and Tricks for WordPress Beginners</h2><h3 class="font-semibold mb-4 text-xl text-black">1. Keep Your Site Secure</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">Security is crucial for any website. Regularly update your themes, plugins, and WordPress version to protect against vulnerabilities. Use strong passwords and consider installing a security plugin like Wordfence.</p><h3 class="font-semibold mb-4 text-xl text-black">2. Optimize for Speed</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">A fast-loading site improves user experience and boosts SEO. Optimize your images, use caching plugins like W3 Total Cache, and choose a reliable hosting provider.</p><h3 class="font-semibold mb-4 text-xl text-black">3. Use Categories and Tags Wisely</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">Organize your content using categories and tags. Categories are broad topics, while tags are specific keywords. This helps visitors navigate your site and improves SEO.</p><h3 class="font-semibold mb-4 text-xl text-black">4. Create Quality Content</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">Content is king. Regularly publish high-quality, informative, and engaging content that provides value to your audience. Use headings, bullet points, and images to make your posts readable and attractive.</p><h3 class="font-semibold mb-4 text-xl text-black">5. Backup Your Site</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">Regular backups ensure you can quickly restore your site in case of data loss. Use plugins like UpdraftPlus to schedule automatic backups.</p><h2 class="font-semibold mb-4 text-3xl text-black">Conclusion</h2><p class="leading-7 mb-5 text-black text-lg tracking-wide">WordPress is a powerful tool for creating a professional and functional website. By following these tips and tricks, beginners can unlock its full potential and build a successful online presence. Whether you're starting a blog, an online store, or a business website, WordPress offers the flexibility and resources you need to succeed.</p><p class="leading-7 mb-5 text-black text-lg tracking-wide">For more detailed guides and expert assistance, feel free to contact our IT service team. We’re here to help you make the most of your WordPress experience.</p>`
        },
        {
          image: "/assets/blog/web-development.webp",
          title: "Exploring Web Development: From Basics to Advanced Techniques",
          slug: "exploring-web-development-from-basics-to-advanced-techniques",
          authorImage: "/assets/blog/blog-user.png",
          authorName: "Jane Doe",
          date: "Dec. 15th 2022",
          content: `<p class="leading-7 mb-5 text-black text-lg tracking-wide">In today's digital age, having a strong online presence is crucial for any business. One of the key components of establishing this presence is web development. This blog post will guide you through the fundamentals of web development and gradually introduce more advanced techniques. Whether you're a beginner or looking to enhance your skills, this comprehensive guide will help you navigate the world of web development.</p><h2 class="font-semibold mb-4 text-3xl text-black">Table of Contents</h2><ul class="list-none"><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">Introduction to Web Development</a></li><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">Basic Web Development Concepts</a><ul class="list-none"><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">HTML</a></li><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">CSS</a></li><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">JavaScript</a></li></ul></li><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">Intermediate Web Development</a><ul class="list-none"><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">Responsive Design</a></li><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">Frameworks and Libraries</a></li><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">Version Control with Git</a></li></ul></li><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">Advanced Web Development Techniques</a><ul class="list-none"><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">Progressive Web Apps (PWAs)</a></li><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">Server-Side Rendering (SSR)</a></li><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">Web Performance Optimization</a></li></ul></li><li><a class="leading-7 mb-5 text-primary text-base tracking-wide" href="/">Conclusion</a></li></ul><h2 id="introduction-to-web-development">Introduction to Web Development</h2><p class="leading-7 mb-5 text-black text-lg tracking-wide">Web development involves building and maintaining websites. It encompasses several aspects, including web design, web content development, client-side/server-side scripting, and network security configuration. The primary goal is to create user-friendly and high-performing websites that provide an excellent user experience.</p><h2 id="basic-web-development-concepts">Basic Web Development Concepts</h2><h3 class="font-semibold mb-4 text-xl text-black" id="html">HTML</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">HTML (HyperText Markup Language) is the foundation of any website. It structures the content on the web, using elements like headings, paragraphs, lists, links, and images. Learning HTML is the first step in web development.</p><h3 class="font-semibold mb-4 text-xl text-black" id="css">CSS</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">CSS (Cascading Style Sheets) is used to style and layout web pages. With CSS, you can control the color, font, spacing, and positioning of elements. It enhances the visual appeal of your website.</p><h3 class="font-semibold mb-4 text-xl text-black" id="javascript">JavaScript</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">JavaScript is a powerful programming language that allows you to add interactivity to your website. From form validation to dynamic content updates, JavaScript is essential for creating engaging user experiences.</p><h2 id="intermediate-web-development">Intermediate Web Development</h2><h3 class="font-semibold mb-4 text-xl text-black" id="responsive-design">Responsive Design</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">With the increasing use of mobile devices, responsive design has become a necessity. It ensures that your website looks and functions well on all screen sizes. Techniques like flexible grids, flexible images, and media queries are used to create responsive designs.</p><h3 class="font-semibold mb-4 text-xl text-black" id="frameworks-and-libraries">Frameworks and Libraries</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">Frameworks and libraries like Bootstrap, React, and Angular simplify the web development process. They provide pre-written code and components, allowing you to build complex applications more efficiently.</p><h3 class="font-semibold mb-4 text-xl text-black" id="version-control-with-git">Version Control with Git</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">Git is a version control system that helps you track changes to your codebase. It facilitates collaboration among developers and allows you to revert to previous versions if needed. Platforms like GitHub and GitLab provide cloud-based hosting for your repositories.</p><h2 id="advanced-web-development-techniques">Advanced Web Development Techniques</h2><h3 class="font-semibold mb-4 text-xl text-black" id="progressive-web-apps-pwas">Progressive Web Apps (PWAs)</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">PWAs combine the best of web and mobile apps. They are fast, reliable, and can work offline. PWAs use modern web technologies like service workers and manifests to deliver a native app-like experience.</p><h3 class="font-semibold mb-4 text-xl text-black" id="server-side-rendering-ssr">Server-Side Rendering (SSR)</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">SSR involves rendering web pages on the server instead of the client. This technique improves the performance and SEO of your website. Frameworks like Next.js and Nuxt.js are popular for implementing SSR.</p><h3 class="font-semibold mb-4 text-xl text-black" id="web-performance-optimization">Web Performance Optimization</h3><p class="leading-7 mb-5 text-black text-lg tracking-wide">Optimizing web performance is crucial for providing a fast and seamless user experience. Techniques include minimizing HTTP requests, compressing files, using a content delivery network (CDN), and optimizing images and code.</p><h2 id="conclusion">Conclusion</h2><p class="leading-7 mb-5 text-black text-lg tracking-wide">Web development is a dynamic field that requires continuous learning and adaptation. By understanding the basics and gradually moving to more advanced techniques, you can create high-quality websites that meet the needs of users and businesses alike. Whether you're starting with HTML and CSS or diving into PWAs and SSR, there's always something new to explore in web development.</p>`
        },
        // {
        //   image: "/assets/blog/blog3.jpg",
        //   title: "Cryptocurrency Market Trends in 2023",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "John Smith",
        //   date: "Jan. 10th 2023",
        //   content: "An in-depth analysis of the cryptocurrency market trends for the year 2023. Stay updated with the latest market movements."
        // },
        // {
        //   image: "/assets/blog/blog4.jpg",
        //   title: "How to Secure Your Digital Wallet",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Alice Johnson",
        //   date: "Feb. 5th 2023",
        //   content: "Digital wallets are essential for managing cryptocurrencies. Learn how to secure your digital wallet to protect your assets."
        // },
        // {
        //   image: "/assets/blog/blog5.jpg",
        //   title: "Top 10 Cryptocurrencies to Watch",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Robert Brown",
        //   date: "Mar. 12th 2023",
        //   content: "A list of the top 10 cryptocurrencies to watch in 2023. Understand why these cryptocurrencies are gaining popularity."
        // },
        // {
        //   image: "/assets/blog/blog6.jpg",
        //   title: "Decentralized Finance Explained",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Laura White",
        //   date: "Apr. 22nd 2023",
        //   content: "Decentralized finance (DeFi) is a revolutionary concept in the financial world. This blog explains what DeFi is and how it works."
        // },
        // {
        //   image: "/assets/blog/blog7.jpg",
        //   title: "The Future of NFTs",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Michael Green",
        //   date: "May. 19th 2023",
        //   content: "Non-fungible tokens (NFTs) are changing the art and entertainment industries. Learn about the future of NFTs in this blog."
        // },
        // {
        //   image: "/assets/blog/blog8.jpg",
        //   title: "Guide to Initial Coin Offerings",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Emma Davis",
        //   date: "Jun. 8th 2023",
        //   content: "Initial coin offerings (ICOs) are a popular way to raise funds for new projects. This guide provides an overview of ICOs and how they work."
        // },
        // {
        //   image: "/assets/blog/blog9.jpg",
        //   title: "Smart Contracts: What You Need to Know",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "William Harris",
        //   date: "Jul. 27th 2023",
        //   content: "Smart contracts are self-executing contracts with the terms directly written into code. This blog explains how smart contracts work."
        // },
        // {
        //   image: "/assets/blog/blog10.jpg",
        //   title: "Blockchain in Healthcare",
        //   authorImage: "/assets/blog/blog-user.png",
        //   authorName: "Sophia Martin",
        //   date: "Aug. 14th 2023",
        //   content: "Blockchain technology is being used in healthcare to improve data security and patient outcomes. Learn about the applications of blockchain in healthcare."
        // }
      ]
    };
  },
  mounted(){
    const slug = this.$route.params.slug; 
    
    this.blog =  this.blogs.find((e)=>{
      return e.slug == slug
    });
    console.log(this.blog);
   
  }
  // computed: {
  //   blog() {
  //     const slug = this.$route.params.slug;

  //    let x =   this.blogs.find((e)=>{
  //       return e.slug = slug
  //     });
  //     console.log(x);
  //     return x;
  //   }
  // }
};
</script>

<style>
/* Add your styles here */
</style>
