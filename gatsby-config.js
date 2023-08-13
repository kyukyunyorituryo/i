/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    PARALLEL_QUERY_RUNNING: false
  },
pathPrefix: "/i",
  siteMetadata: {
    title: `電書ニュース`,
    author: {
      name: `99`,
      summary: `電子書籍に関するものを公開しています。キンドルで電子書籍を出してます。`,
    },
    description: `電子書籍に関する情報やセールなど`,
    siteUrl: `https://kyukyunyorituryo.github.io/i/`,
    social: {
      twitter: `99nyorituryo`,
    },
  },
  plugins: [
  `gatsby-plugin-sitemap`,
     {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-J8FW91ELEL'],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-amazon-link`,
            options: {
              accessKey: process.env.accessKey,
              secretKey: process.env.secretKey,
              partnerTag: "kyukyunyorituryo-22",
              marketplace: "www.amazon.co.jp",
           }
          },
          {
            resolve: `gatsby-remark-link-beautify`,
            options: {
             enableLinkPreview: false,
                  },
              },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/densho512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
