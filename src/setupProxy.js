const { createProxyMiddleware: proxy } = require("http-proxy-middleware");
module.exports = app => {
    app.use(
        "/api",
            proxy({
                target:"http://101.43.174.213:5000/",
                changeOrigin: true,
                pathRewrite:{
                    "^/api": ""
            }
        })
    )
}
//http://101.43.174.213:5000/manage/user/list