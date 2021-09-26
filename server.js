const http = require('http');
const server = http.createServer();
const PORT = 5000

const banner = `
**************************
    Basic Node.js Server  👨‍💻
        For dev react ⚛ project  🚀
**************************
Status: Online  ✅
Listening on port: ${PORT} 🖥
`;

server.listen(PORT, ()=>{
    console.info(banner);
})