module.exports = {
  "staticFileGlobs": [
    "**/*.css",
    "**/*.html",
    "**/*.png",
    "**/*.ico",
    "**/*.svg",
    "**/*.woff2",
    "**/*.js",
    "**/*.json"
  ],
  "stripPrefix": "",
  "runtimeCaching": [{
    "urlPattern": /^https:\/\/musicbrainz.org\//,
    "handler": "networkFirst"
  }]
}