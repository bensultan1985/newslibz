const http = require('http');
const path = require('path');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/html'})
//             res.end(content)
//         })
//         fs.readFile(path.join(__dirname, 'public', 'style.css'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/css'})
//             res.end(content)
            
//         })
//         fs.readFile(path.join(__dirname, 'public', 'script.js'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'text/javascript'})
//             res.end(content)
//         })
//         fs.readFile(path.join(__dirname, 'public', 'favicon.ico'), (err, content) => {
//             if (err) throw err;
//             res.writeHead(200)
//             res.end(content)
//         })
//     }
// })

const express = require('express');

const app = express()

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))