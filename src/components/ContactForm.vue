<template>
  <div>
    <div id="ContactForm" class="contact_form p-4 sm:p-6 lg:p-10 rounded-20 flex flex-col gap-6 sm:flex-row lg:gap-[135px] items-stretch md:items-center bg-cover bg-no-repeat bg-center relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-formOverlay before:rounded-20">
      <div class="border contact_box bg-Newblack sm:w-35 p-5 md:p-10 shadow-xl rounded-20 overflow-hidden relative over before:absolute before:w-96 before:h-96 before:left-2/4 before:bg-no-repeat before:bg-contain before:-bottom-40">
        <div class="ellipsis bg-contain w-40 h-40 absolute bottom-24 right-24"></div>
        <div class="information mb-8 md:mb-28">
          <h4 class="text-white text-xl md:text-28 md:mb-3.5 font-semibold">Contact Information</h4>
          <p class="text-newGrey text-sm md:text-lg">Say something to start a chat!</p>
        </div>
        <div class="contact_detail flex gap-6 md:gap-50 flex-col mb-20 md:mb-169">
          <div class="phone flex gap-3 md:gap-7">
            <img src="/assets/home/phone.svg" alt="">
            <a href="tel:+91 76578 12422" class="text-sm md:text-base text-white">+91 76578 12422</a>
          </div>
          <div class="email flex gap-3 md:gap-7">
            <img src="/assets/home/email.svg" alt="">
            <a href="mailto:info@codeflare.in" class="text-sm md:text-base text-white">info@codeflare.in</a>
          </div>
          <div class="address flex gap-3 md:gap-7">
            <img src="/assets/home/location.svg" alt="">
            <a href="/" class="text-sm md:text-base text-white">Mohali, PB, India</a>
          </div>
        </div>
        <div class="social-media flex gap-4">
          <a href="https://www.facebook.com/codeflare.in/" target="_blank" class="bg-primary w-10 h-10 rounded-full flex justify-center items-center group hover:bg-white">
            <i class="bi bi-facebook text-white group-hover:text-primary"></i>
          </a>
          <a href="https://x.com/codeflare_in/" target="_blank" class="bg-primary w-10 h-10 rounded-full flex justify-center items-center group hover:bg-white">
            <i class="bi bi-twitter-x text-white group-hover:text-primary"></i>
          </a>
          <a href="https://www.linkedin.com/company/code-flare/" target="_blank" class="bg-primary w-10 h-10 rounded-full flex justify-center items-center group hover:bg-white">
            <i class="bi bi-linkedin text-white group-hover:text-primary"></i>
          </a>
          <a href="https://www.instagram.com/codeflare.in/" target="_blank" class="bg-primary w-10 h-10 rounded-full flex justify-center items-center group hover:bg-white">
            <i class="bi bi-instagram text-white group-hover:text-primary"></i>
          </a>
        </div>
      </div>
      <div class="form sm:w-65 z-50">
        <form @submit.prevent="sendEmail" class="flex flex-col gap-3 md:gap-45">
          <div class="grid md:grid-cols-2 gap-3 md:gap-10">
            <div class="fName flex flex-col">
              <label class="text-white mb-1.5 font-medium text-sm" for="fName">First name</label>
              <input v-model="form.firstName" class="border rounded-md p-3 focus:outline-none focus:border-transparent text-sm group" type="text" id="fName">
            </div>
            <div class="lName flex flex-col">
              <label class="text-white mb-1.5 font-medium text-sm" for="lName">Last name</label>
              <input v-model="form.lastName" class="border rounded-md p-3 focus:outline-none focus:border-transparent text-sm group" type="text" id="lName">
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 md:gap-10">
            <div class="email flex flex-col">
              <label class="text-white mb-1.5 font-medium text-sm" for="email">Email</label>
              <input v-model="form.email" class="border rounded-md p-3 focus:outline-none focus:border-transparent text-sm" type="email" id="email">
            </div>
            <div class="number flex flex-col">
              <label class="text-white mb-1.5 font-medium text-sm" for="number">Phone number</label>
              <input v-model="form.phoneNumber" class="border rounded-md p-3 focus:outline-none focus:border-transparent text-sm" type="tel" id="number">
            </div>
          </div>
          <div class="inquiry">
            <h6 class="font-semibold mb-1.5 text-white">Select Subject?</h6>
            <div class="flex gap-4">
              <div class="flex gap-2 items-center">
                <input type="radio" name="inquiry" id="businessin" value="Bussiness Inquiry" v-model="form.inquiry">
                <label class="font-normal text-white text-sm" for="businessin">Project Inquiry</label>
              </div>
              <div class="flex gap-2 items-center">
                <input type="radio" name="inquiry" id="generalInQ" value="General Inquiry" v-model="form.inquiry">
                <label class="font-normal text-white text-sm" for="generalInQ">General Inquiry</label>
              </div>
            </div>
          </div>
          <div class="message flex flex-col">
            <label class="text-white mb-1.5 font-medium text-sm" for="message">Message</label>
            <textarea v-model="form.message" id="message" cols="30" rows="7" class="border rounded-md p-3 text0-sm focus:outline-none focus:border-transparent text-sm" placeholder="Write your message.."></textarea>
          </div>
          <div class="btngroup flex justify-start">
            <button type="submit" class="bg-btnGradient flex gap-3 py-3 px-4 rounded-lg font-bold shadow-btnShadow text-sm capitalize text-white justify-center items-center tracking-widest">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        inquiry: '',
        message: '',
      },
    };
  },
  methods: {
    sendEmail() {
      const serviceID = 'service_a91rdbr';
      const templateID = 'template_er45iyq';
      const userID = 'jjhpYJ1RS_0moTmO9';

      emailjs.send(serviceID, templateID, this.form, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          this.clearForm();  // Clear the form after successful submission
        })
        .catch((error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        });
    },
    clearForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        inquiry: '',
        message: '',
      };
    },
  },
};
</script>

<style>
.contact_box::before {
  background-image: url('/public/assets/home/elip-2.svg');
}

.ellipsis {
  background-image: url('/public/assets/home/elip-1.svg');
}

.contact_form {
  background: url(/public/assets/home/roseate-06.jpg);
}
</style>
