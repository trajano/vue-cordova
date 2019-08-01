const VueCliService = require("@vue/cli-service")

module.exports = function(context) {
  const service = new VueCliService(context.opts.projectRoot)
  service.run("build")
}
