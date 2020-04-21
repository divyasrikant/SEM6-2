
  

const axios = require('axios');
const cheerio = require('cheerio');
let fs=require('fs');

axios.get('https://www.google.com/search?q=about+page+mumbai+airport&oq=about+page+mumbai+airport&aqs=chrome..69i57j33l2.10019j0j7&sourceid=chrome&ie=UTF-8')
    .then((response) => {
        if(response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html); 
            console.log($.text());

    }
}, (error) => console.log(error) );