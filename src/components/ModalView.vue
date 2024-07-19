<template>
  <div v-if="isVisible" @click.self="close" class="modal_new fixed flex z-999 top-0 left-0 right-0 bottom-0 bg-modal justify-center items-center">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
      <button type="button" @click="close" class="absolute top-2 right-2 z-9999">
        <i class="bi bi-x text-3xl cursor-pointer text-black"></i>
      </button>
      <h2 class="text-2xl font-bold text-primary mb-4 text-left">Hold On!</h2>
      <p class="text-xl font-semibold mb-6 text-left">Let Your Idea Shine<br>Consult with Our Experts!</p>
      <p class="mb-6 text-left">Let's discuss your idea and create something amazing together.</p>
      <form @submit.prevent="sendEmail">
        <div class="mb-4">
          <input v-model="form.fullName" type="text" placeholder="Full Name" class="w-full p-3 border rounded-lg focus:outline-primary" required>
        </div>
        <div class="mb-4">
          <input v-model="form.businessEmail" type="email" placeholder="Business Email" class="w-full p-3 border rounded-lg focus:outline-primary" required>
        </div>
        <div class="mb-4 flex">
          <!-- <select v-model="form.countryCode" class="p-3 border rounded-l-lg focus:outline-primary">
            <option value="+91">+91</option>
          </select> -->
          <input v-model="form.contactNumber" type="tel" placeholder="Contact Number" class="w-full p-3 border rounded-lg focus:outline-primary" required>
        </div>
        <div class="mb-4">
          <textarea v-model="form.idea" placeholder="What's your idea?" class="w-full p-3 border rounded-lg focus:outline-primary" required></textarea>
        </div>
        <div class="flex justify-between items-center">
          <button type="submit" class="bg-btnGradient animate-Newpulse2 flex gap-3 py-4 px-4 rounded-lg font-bold shadow-btnShadow text-sm capitalize text-white justify-center items-center tracking-widest z-999">Request a Call Back!</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ModalView',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      form: {
        fullName: '',
        businessEmail: '',
        // countryCode: '+91',
        contactNumber: '',
        idea: ''
      }
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    sendEmail() {
      const serviceID = 'service_a91rdbr';
      const templateID = 'template_er45iyq';
      const userID = 'jjhpYJ1RS_0moTmO9';

      emailjs.send(serviceID, templateID, this.form, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.clearForm();
          alert('Message sent successfully!');
          this.close(); // Close the modal after successful submission
        }, (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again.');
        });
    },
    clearForm() {
      this.form.fullName = '';
      this.form.businessEmail = '';
      this.form.countryCode = '+91';
      this.form.contactNumber = '';
      this.form.idea = '';
    }
  }
}
</script>

<style scoped></style>
