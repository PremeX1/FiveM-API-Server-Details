const axios = require('axios');
class api {
    constructor(ip, port){ 
        this.ip = ip; 
        this.port = port;
        this.token = []
    }

    async getToken() { 
        const token = await axios.get(`http://${this.ip}:${this.port}`)
        return token.headers['x-citizenfx-join-token'];
    }


    async getInfo(token) {
        try {
            const resp = await axios.get(`https://servers-frontend.fivem.net/api/servers/single/${token}`,{
                headers: {
                "Content-Type": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Mobile Safari/537.36",
                },
            });
            return resp
        } catch (e) {
            return
        }

    }

}

module.exports = api;