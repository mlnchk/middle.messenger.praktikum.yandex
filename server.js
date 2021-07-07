const express = require('express');

const app = express();
const PORT = 3000;

// const indexFile = './dist/index.html';
// app.get('*', (req, res) => res.send(indexFile));

app.use(express.static('./dist/'));
app.use('/registration', express.static('./dist/'));
app.use('/profile', express.static('./dist/'));
app.use('/profile-edit', express.static('./dist/'));
app.use('/password-edit', express.static('./dist/'));
app.use('/chat-page', express.static('./dist/'));
app.use('/404', express.static('./dist/'));
app.use('/500', express.static('./dist/'));

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});