module.exports = function(app) {
  require("./staticPages.js")(app);
  require("./solutions.js")(app);
}