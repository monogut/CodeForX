module.exports = function(app, customSchema) {
  require("./questions/new.js")(app, customSchema);
  require("./questions/index.js")(app, customSchema);
  require("./questions/check.js")(app, customSchema);
  require("./static-pages/index.js")(app, customSchema);
  require("./static-pages/others.js")(app, customSchema);
}
