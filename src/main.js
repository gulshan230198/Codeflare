import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './index.css'
import Vue3Autocounter from 'vue3-autocounter';

router.beforeEach((to, from, next) => {
    // Remove existing body classes
    document.body.className = '';
  
    // Add class based on the route name
    if (to.name) {
      document.body.classList.add(`page-${to.name}`);
    }
  
    next();
  });
  
  const app = createApp(App);

  app.component('vue3-autocounter', Vue3Autocounter)

createApp(App).use(router).mount('#app')
