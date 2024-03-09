<template>
  <div class="layout">
    <!-- Start Header Section -->
    <!-- #1648ff -->
    <header class="cs-site_header cs-style1 text-uppercase cs-sticky_header">
      <div class="cs-main_header">
        <div class="container">
          <div class="cs-main_header_in">
            <div class="cs-main_header_left">
              <a class="cs-site_branding" href="index.html">
                <img src="../assets/img/riznova.png" alt="Logo"/>
              </a>
            </div>
            <div class="cs-main_header_center">
              <div class="cs-nav cs-primary_font cs-medium">
                <ul class="cs-nav_list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#service">Services</a>
                  </li>
                  <li>
                    <a href="#About">About</a>
                  </li>
                  <li>
                    <a href="#Portfolio">Portfolio</a>
                  </li>
                  <!-- <li>
                    <a href="/client-side-inference">Blog</a>
                  </li> -->
                  <li>
                    <a href="#Blog">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#contact" style="font-family: sans-serif; font-size: 15px; font-weight: bold;" id="contact_btn" class="cs-newsletter_btn custom-icon_btn">
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </header>
    <slot/>

    <!-- Start Footer -->
    <footer class="cs-fooer">
      <div class="container">
        <div class="cs-bottom_footer">
          <div class="cs-bottom_footer_left" style="display: flex; align-items: center;">
            <div class="cs-copyright">Copyright © 2024 Riznova.</div>
          </div>
          <div class="cs-bottom_footer_right">
            <img style="width: 150px;" src="../assets/img/riznova.png" alt="Riznova">
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
    <span class="cs-scrollup">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z" fill="currentColor" />
      </svg>
    </span>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
