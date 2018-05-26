// See http://brunch.io for documentation.
exports.config = {
  files: {
    javascripts: {
      joinTo: {
        "app.js": /^src|node_modules/
      }
    },
    stylesheets: {
      joinTo: {
        "app.css": /^styles|node_modules/
      }
    }
  },

  paths: {
    watched: ["assets", "src", "styles"]
  },

  conventions: {
    assets: /assets\//
  },

  plugins: {
    babel: {
      presets: ["env", "react"],
      ignore: [/^node_modules/]
    },
    autoReload: {
      enabled: false,
      match: {
        stylesheets: ["*.css", "*.scss"],
        javascripts: ["*.js", "*.jsx"]
      }
    }
  },

  npm: {
    enabled: true
  },

  // modules:{
  //   wrapper: "commonjs",
  //   definition: false
  // },

  // hot: true;
}
