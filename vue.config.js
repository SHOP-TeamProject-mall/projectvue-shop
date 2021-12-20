module.exports = {
    devServer: {
        proxy: {
            // 127.0.0.1:8080/HOST/users 
            '/HOST/member': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                logLevel: 'debug',
            },
            '/HOST/product': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                logLevel: 'debug',
            },
            '/HOST/productoption': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                logLevel: 'debug',
            },
        },
        port: 9090
    },
    // publicPath:'/HOST'
};