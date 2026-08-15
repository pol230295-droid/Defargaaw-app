const { getDefaultConfig } = require("expo/metro-config");
const config = getDefaultConfig(__dirname);
// permet à require("./web/index.html") de fonctionner
config.resolver.assetExts.push("html");
module.exports = config;
