# Gatsby + Stylus

### Core

>[Gatsby](https://www.gatsbyjs.org/) [Stylus](http://stylus-lang.com/)

### custom html

    cp .cache/default-html.js src/html.js

Read more about [custom-html](https://www.gatsbyjs.org/docs/custom-html/)

### custom gatsby config

New a file at the root of the project folder called `gatsby-config.js`
  
    module.exports = {
      // plugins
      plugins: [`gatsby-plugin-stylus`], // stylus
    }
  
Read more about [gatsby-plugin-stylus](https://www.gatsbyjs.org/packages/gatsby-plugin-stylus/) and [custom-gatsby-config](https://www.gatsbyjs.org/docs/gatsby-config/)

### custom webpack config

New a file at the root of the project folder called `gatsby-node.js`

    exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, actions }) => {
      actions.setWebpackConfig(myWebpackConfig);
    };
    
Read more about [custom-webpack-config](https://www.gatsbyjs.org/docs/add-custom-webpack-config/)
