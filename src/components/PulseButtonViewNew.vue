<template>
  <div class="z-999 relative" >
    <button  @click="handleClick"  type="button" id="cotactBtn" class="bg-btnGradient animate-Newpulse flex gap-3 py-4 px-4 rounded-lg font-bold shadow-btnShadow text-sm capitalize text-white justify-center items-center tracking-widest z-999">{{title}}  <img src="/assets/home/arrow.svg" alt=""></button>
  </div>
</template>

<script>
export default {
  components:{
    // ModalView
  },
 props: {
  title: {
    type: String,
    required: true
  },
  type: {
    type: Boolean,
    default: false
  },
  link: {
    type: String,
    required: false
  }
},
  data() {
    return {
     
    }
  },
  methods: {
    handleClick() {
      this.$emit('button-clicked');
    }
    
  }
};
</script>

<style scoped>

</style>
