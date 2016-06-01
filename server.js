var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function (req, res){
    console.log("I received a GET request")

    person1 = {
        name: 'Matheus',
        email: 'matheus@gmail.com',
        tel: '(111) 111-1111'
    };

    person2 = {
        name: 'Pedro',
        email: 'pedro@gmail.com',
        tel: '(222) 222-2222'
    };

    person3 = {
        name: 'Andre',
        email: 'andre@gmail.com',
        tel: '(333) 333-3333'
    };

    person4 = {
        name: 'Willian',
        email: 'bill@gmail.com',
        tel: '(444) 444-4444'
    };

    var contactlist = [person1, person2, person3, person4];
    res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");
