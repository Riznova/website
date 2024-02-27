// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'


import "~/assets/css/plugins/bootstrap.min.css"
import "~/assets/css/plugins/fontawesome.min.css"
import "~/assets/css/plugins/slick.css"
import "~/assets/css/plugins/lightgallery.min.css"
import "~/assets/css/plugins/animate.css"
import "~/assets/css/style.css"
import "prismjs/themes/prism-tomorrow.css";

export default function (Vue, { router, head, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  console.log(appOptions)

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
