const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/etanbetsu/src/templates/blog-post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/etanbetsu/src/templates/tags.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/etanbetsu/src/pages/404.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/etanbetsu/src/pages/blog/index.js"))),
  "component---src-pages-contact-file-upload-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/etanbetsu/src/pages/contact/file-upload.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/etanbetsu/src/pages/contact/index.js"))),
  "component---src-pages-contact-thanks-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/etanbetsu/src/pages/contact/thanks.js"))),
  "component---src-pages-etanbetsu-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/etanbetsu/src/pages/etanbetsu.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/etanbetsu/src/pages/index.js"))),
  "component---src-pages-kori-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/etanbetsu/src/pages/kori.js"))),
  "component---src-pages-tags-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/etanbetsu/src/pages/tags/index.js")))
}

