// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import DefaultLayout from '~/layouts/Default.vue'


import "~/assets/css/plugins/bootstrap.min.css"
import "~/assets/css/plugins/fontawesome.min.css"
import "~/assets/css/plugins/slick.css"
import "~/assets/css/plugins/lightgallery.min.css"
import "~/assets/css/plugins/animate.css"
import "~/assets/css/style.css"
import "prismjs/themes/prism-tomorrow.css";

export default function (Vue, { router, head, appOptions }) {

  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDqEIMtqEAhu56beNaYFT2FZQzpvHgev2M",
    authDomain: "riznova-866f9.firebaseapp.com",
    projectId: "riznova-866f9",
    storageBucket: "riznova-866f9.appspot.com",
    messagingSenderId: "62034778089",
    appId: "1:62034778089:web:3bb6eb8f2411a8431d5d78",
    measurementId: "G-1E231B8SZ9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  Vue.prototype.$db = getFirestore(app);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push(
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      crossorigin: true
    }
  )


  head.script.push(
    { body: true, src: "/js/plugins/jquery-3.6.0.min.js"},
    { body: true, src: "/js/plugins/isotope.pkg.min.js"},
    { body: true, src: "/js/plugins/jquery.slick.min.js"},
    { body: true, src: "/js/plugins/jquery.counter.min.js"},
    { body: true, src: "/js/plugins/lightgallery.min.js"},
    { body: true, src: "/js/plugins/wow.min.js"},
    { body: true, src: "/js/plugins/gsap.min.js"},
    // { body: true, src: "/js/main.js"},
  )
}
