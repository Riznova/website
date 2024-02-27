// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Riznova',
  siteUrl: "https://candid-horse-8627dc.netlify.app",
  icon: {
    favicon: './src/assets/img/icons/favicon.png',
    touchicon: './src/assets/img/icons/favicon.png'
  },
  plugins: [
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     path: "./articles/**/*.md",
    //     typeName: "Article",
    //     remark: {
    //       plugins: ["@gridsome/remark-prismjs"],
    //     },
    //   },
    // },
    // {
    //   use: `gridsome-plugin-netlify-cms`
    // }
  ],
  // templates: {
  //   Article: "/:slug",
  // },
  // transformers: {
  //   remark: {
  //     plugins: [["@gridsome/remark-prismjs", { transformInlineCode: false }]],
  //   },
  // },
}
