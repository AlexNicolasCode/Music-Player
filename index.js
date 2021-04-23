const express = require('express');
const upload = require('express-fileupload');

const app = express();

app.use(upload())

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    if (req.files) {
        let file = req.files.file;
        let filename = file.name;
        console.log(filename)
        console.log(file)

        file.mv('./uploads/' + filename, function (err) {
            if (err) res.send(err)
        })
    }
})

app.listen(3000)