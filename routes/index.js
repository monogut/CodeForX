module.exports = function(app, customSchema) {
  require("./questions/new.js")(app, customSchema);
  require("./staticPages.js")(app, customSchema);
  require("./solutions.js")(app, customSchema);
}