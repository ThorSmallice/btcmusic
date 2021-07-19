const axios = require('axios');

const _axios = axios.create({
    baseURL: 'https://music.0melon0.cn/',
    timeout: 3000
})

module.exports = _axios;