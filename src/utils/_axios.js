const axios = require('axios');

const _axios = axios.create({
    baseURL: 'https://music.0melon0.cn/',
    timeout: 3000
})


// _axios.interceptors.request.use( response => {
//     this.$loading.show();
//     return response
// })

// _axios.interceptors.response.use( response => {
//     this.$loading.hide();
//     if (response.status === 200) {
//         return response.data;
//     } 
// })

module.exports = _axios;