import type { GatsbyConfig } from "gatsby"

/*
  "AW-CONVERSION_ID", // Google Ads / Adwords / AW
  "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
*/

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {

        
        trackingIds: [ "G-JMT5E6KQ92", ],

        pluginConfig: {

          head: true,

        },
    
    },},
    'gatsby-plugin-postcss',

    // ...
  ],

  pathPrefix: "/habit-tracker-landing-page",
  

}

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://tobyhogan.github.io/habit-tracker-landing-page/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
}

export default config


