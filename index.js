const express = require('express');
const cors = require('cors');
const app = express();
const port = 5500;
const bodyParser = require('body-parser');

let data = [];

for (let i=0; i < 50; i++) {
    data = [ 
        ...data, 
        {
            name: "Janko",
            surname: "Hrasko",
            email: "hrasko@gmail.com",
            phone: "0959111000",
            city: "Cabaj",
            street: "Hlavna",
            number: i,
            postalCode: "95117",
            gender: "male",
            emailInfo: true,
            smsInfo: false
        }
    ];
}

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log("Get data");
    res.json(data);
});

app.post("/", (req, res) => {
    data = req.body;
    console.log("Post data", data);
    res.send("ok");
});

app.listen(port, () => console.log('Server listen on port', port));