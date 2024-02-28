const fileURLToPath = require("url")
const __dirname = require("path")

const __filename = fileURLToPath(import.meta.url);
const __dirname = __dirname(__filename);

module.exports=__dirname;