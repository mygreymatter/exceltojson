const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies
app.use(express.static(__dirname + '/public'));
app.set('port', PORT);

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), () => {
    console.log("app running at http://127.0.0.1:" + PORT);
});