module.exports = {
    devPort: 8081,
    projectConfig: {
        default: {
            name: "tmpl",
            rootPath: "api",
            baseURL: "proxyTmpl",
            proxyServer: "http://localhost:3000"
        },
        info: {
            name: "info",
            rootPath: "info/portal",
            baseURL: "proxyInfo",
            proxyServer: "https://test.yunyesoft.com"
        }
    },
    //图片服务器前缀
    // PrefixImg: "https://static.yunyesoft.com/fsimg",
    PrefixImg: "https://pbsq.pobo.net.cn/fsimg"
}
