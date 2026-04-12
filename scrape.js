const https = require('https');

const fetchOG = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const titleMatch = data.match(/<title>([^<]+)<\/title>/i);
        const ogMatch = data.match(/<meta property="og:image" content="([^"]+)"/i) || data.match(/<link rel="icon" href="([^"]+)"/i);
        const imgMatch = data.match(/<img[^>]+src="([^">]+)"/i);
        resolve({
          url,
          title: titleMatch ? titleMatch[1].trim() : '',
          image: ogMatch ? ogMatch[1] : (imgMatch ? imgMatch[1] : null)
        });
      });
    }).on('error', () => resolve({url, error: true}));
  });
};

Promise.all([
  fetchOG('https://www.paperandpie.in/contact/'),
  fetchOG('https://tart.co.in/'),
  fetchOG('https://vanamo.in/'),
  fetchOG('https://bigbeancafe.in/')
]).then(console.log);
