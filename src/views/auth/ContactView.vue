<template>
  <div class="dark:bg-slate-900 flex flex-col gap-5 md:gap-10 py-10 px-2 md:px-0">
    <div class="container mx-auto">
      <h1 class="text-3xl lg:text-5xl leading-normal font-bold text-black mb-2">Contact Us</h1>
      <p>
        We'd love to hear from you! Drop us a line by filling out the form below or send your requirements <br> to <a href="mailto:info@codeflare.in" class="text-primary underline underline-offset-4">info@codeflare.in</a>. Let's make something amazing together!
      </p>
    </div>
    <div class="container mx-auto flex flex-col gap-10 bg-white my-6">
      <div>
        <div class="grid lg:grid-cols-3 items-center gap-4 shadow-md rounded-30">
          <div class="bg-contact rounded-30 p-6 max-lg:text-center">
            <h2 class="text-xl font-bold text-white">Contact Information</h2>
            <p class="text-sm text-white mt-3">Have a specific question or want to explore new opportunities? Our experienced team is here to help.</p>
            <ul class="mt-16 space-y-10">
              <li class="flex items-center max-lg:justify-center">
                <img src="/assets/home/mail.gif" alt="" class="w-6 h-6">
                <a href="javascript:void(0)" class="text-white text-sm ml-3">
                  <strong>info@codeflare.in</strong>
                </a>
              </li>
              <li class="flex items-center max-lg:justify-center">
                <img src="/assets/home/mobile.gif" alt="" class="w-6 h-6">
                <a href="javascript:void(0)" class="text-white text-sm ml-3">
                  <strong>+97 76578 12422</strong>
                </a>
              </li>
              <li class="flex items-center max-lg:justify-center">
                <img src="/assets/home/location-pin.gif" alt="" class="w-6 h-6">
                <a href="javascript:void(0)" class="text-white text-sm ml-3">
                  <strong>Mohali, PB, India</strong>
                </a>
              </li>
            </ul>
            <ul class="flex max-lg:justify-center mt-16 space-x-4">
              <li class="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.facebook.com/codeflare.in/" target="_blank">
                  <img src="/assets/home/facebook.svg" alt="">
                </a>
              </li>
              <li class="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://x.com/codeflare_in/" target="_blank">
                  <img src="/assets/home/twitter.svg" alt="">
                </a>
              </li>
              <li class="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.linkedin.com/company/code-flare/" target="_blank">
                  <img src="/assets/home/linkedin.svg" alt="">
                </a>
              </li>
              <li class="bg-gray-800 hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.instagram.com/codeflare.in/" target="_blank">
                  <img src="/assets/home/instagram.svg" alt="">
                </a>
              </li>
            </ul>
          </div>
          <div class="p-6 rounded-xl lg:col-span-2">
            <form @submit.prevent="sendEmail" class="flex flex-col gap-6">
              <div class="grid sm:grid-cols-2 gap-8">
                <div class="relative flex items-center">
                  <input v-model="form.firstName" type="text" placeholder="First Name" class="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-primary outline-none" />
                  <img src="/assets/home/user.svg" alt="" class="w-[18px] h-[18px] absolute right-2 opacity-25">
                </div>
                <div class="relative flex items-center">
                  <input v-model="form.lastName" type="text" placeholder="Last Name" class="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-primary outline-none" />
                  <img src="/assets/home/user.svg" alt="" class="w-[18px] h-[18px] absolute right-2 opacity-25">
                </div>
                <div class="relative flex items-center">
                  <input v-model="form.phoneNumber" type="tel" placeholder="Phone No." class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-primary outline-none" />
                  <svg fill="#bbb" class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 64 64">
                    <path d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z" data-original="#000000"></path>
                  </svg>
                </div>
                <div class="relative flex items-center">
                  <input v-model="form.email" type="email" placeholder="Email" class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-primary outline-none" />
                  <img src="/assets/home/send-black.svg" alt="" class="w-[18px] h-[18px] absolute right-2 opacity-25">
                </div>
                <div class="relative flex items-center sm:col-span-2">
                  <textarea v-model="form.message" placeholder="Write Message" class="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-primary outline-none"></textarea>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 -1.33 0 682.667)">
                      <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                      <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                    </g>
                  </svg>
                </div>
                <div class="col-span-full">
                  <h6 class="text-sm text-gray-400">Select Subject</h6>
                  <div class="flex max-lg:flex-col lg:space-x-6 max-lg:space-y-6">
                    <div class="flex items-center mt-3">
                      <input v-model="form.subject" id="radio1" type="radio" name="subject" value="General Inquiry" class="hidden peer" checked />
                      <label for="radio1" class="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-primary rounded-full overflow-hidden">
                        <span class="border-[4px] border-primary rounded-full w-full h-full"></span>
                      </label>
                      <p class="text-sm ml-3 text-black">General Inquiry</p>
                    </div>
                    <div class="flex items-center mt-3">
                      <input v-model="form.subject" id="radio2" type="radio" name="subject" value="Technical Support" class="hidden peer" />
                      <label for="radio2" class="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-primary rounded-full overflow-hidden">
                        <span class="border-[4px] border-primary rounded-full w-full h-full"></span>
                      </label>
                      <p class="text-sm ml-3 text-black">Technical Support</p>
                    </div>
                    <div class="flex items-center mt-3">
                      <input v-model="form.subject" id="radio3" type="radio" name="subject" value="Website development" class="hidden peer" />
                      <label for="radio3" class="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-primary rounded-full overflow-hidden">
                        <span class="border-[4px] border-primary rounded-full w-full h-full"></span>
                      </label>
                      <p class="text-sm ml-3 text-black">Website development</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btngroup flex justify-center md:justify-end">
                <button type="submit" class="bg-btnGradient animate-Newpulse flex gap-3 py-4 px-4 rounded-lg font-bold shadow-btnShadow text-sm capitalize text-white justify-center items-center tracking-widest z-999">
                  <img src="/assets/home/send.svg" alt=""> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="map-view rounded">
        <iframe class="rounded-30" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109782.7103670227!2d76.61497888501322!3d30.698443001937164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1717609429656!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
        phoneNumber: '',
        email: '',
        message: '',
        subject: 'General Inquiry',
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
          this.clearForm();
          alert('Message sent successfully!');
        }, (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again.');
        });
    },
    clearForm() {
      this.form.firstName = '';
      this.form.lastName = '';
      this.form.phoneNumber = '';
      this.form.email = '';
      this.form.message = '';
      this.form.subject = 'General Inquiry';
    },
  },
};
</script>

<style scoped></style>
