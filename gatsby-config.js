/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins:400,500,600`, `Roboto:400`, `Karla:400`],
        display: "swap",
      },
    },
    `gatsby-plugin-sass`,
  ],
}
