const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const config = require("../../../webpack.config.js")

const server = new WebpackDevServer(webpack(config), {})

server.listen(9030, "localhost", (err) => {
    if (err) {
        return
    }

    if (process.send) {
        process.send("ready")
    }
})