const express = require('express');
const upload = require('express-fileupload');
const fs = require('fs');

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

app.get('/files', (req, res) => {
    res.sendFile(__dirname + '/uploads/O Grilo - Infinito (-1).mp3')

    // fs.readFile('O Grilo - Infinito (-1).mp3', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/mp3'});
    //     res.write(data);
    //     return res.end();
    // });
})

const port = 5000

app.listen(port, () => {console.log(`listening on ${port} `)})