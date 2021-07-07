const express = require('express');
const Bundler = require('parcel-bundler');

const app = express();
const PORT = 3000;

const indexFile = './index.html';

const bundler = new Bundler(indexFile, { watch: true, cache: false });
app.use(bundler.middleware());

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});