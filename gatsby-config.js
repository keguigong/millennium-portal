module.exports = {
  siteMetadata: {
    title: `keguigong`,
    description: `@keguigong(可圭共)'s personal page.`,
    author: `@keguigong`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `keguigong.org`,
        short_name: `keguigong`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2b2b2b`,
        // define favicon
        icon: `src/images/piggy-bank.png`, // This path is relative to the root of the site.
      },
    },
    // add gatsby-plugin-typography path
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    // change the theme of antd.js
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#E9F2F4',
          'secondary-color': '#E9F2F4',
          'text-color': '#222222',
          'text-color-secondary': '#DCDCDC',
          'heading-color': '#3D7E9A',
          'layout-header-background': '#E9F2F4',
          'btn-primary-bg': '#83CFF2',
          'border-radius-base': '4px',
          'link-color': '#83CFF2',
          'success-color': '#52c41a',
          'warning-color': '#faad14',
          'error-color': '#f5222d',
          'disabled-color': 'rgba(0, 0, 0, .25)',
          'border-color-base': '#d9d9d9',
          'box-shadow-base': ' 0 2px 8px rgba(0, 0, 0, .15)'
        }
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
