module.exports = {
    publicPath: './',
    productionSourceMap: false, // 取消生产环境map
    chainWebpack:(config)=>{
        config.plugins.delete('prefetch');
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: ` 
                    @import "~@/assets/scss/_method.scss";
                `  
            }
        }
    }
}