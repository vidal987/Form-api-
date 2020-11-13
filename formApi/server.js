var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const cors = require('cors');



app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));


// default route
app.get('/', function(req, res) {
    return res.send({ error: true, message: 'hello' });
});


// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'vidal',
    password: 'Matheus@vidal987',
    database: 'form2'
});

// connect to database
dbConn.connect();


// app.get('/user:name&:password', function(req, res) {
//     const name = req.params.name;
//     const password = req.params.password;
//     if (!name) {
//         return res.status(400).send({ error: true, message: 'Please provide name' });
//     }
//     dbConn.query('SELECT * FROM form.User WHERE name="' + name + '" AND password="' + password + '";', function(error, results, fields) {
//         if (error) throw error;
//         if (results.length > 0) {
//             return res.send({ error: false, data: results[0], name, password });
//         } else {
//             return res.send({ error: true, data: results[0], name, password });
//         }
//     });
// });

// Retrieve all users 
 app.get('/forms', function(req, res) {
     dbConn.query('SELECT * FROM form2.Form', function(error, results, fields) {
        if (error) throw error;
         if (results.length > 0) {
             return res.send({results});
         } else {
            return res.send({results});
        }
    });
});


// // Add a new user  
// app.post('/add', function(req, res) {
//     let user = req.body;
//     console.log("add user");

//     if (!user) {
//         return res.status(400).send({ error: true, message: 'Please provide user' });
//     }

//     dbConn.query("INSERT INTO form.User SET ? ", user, function(error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
//     });
// });


// app.put('/update', function(req, res) {
//     let user = req.body;

//     if (!user.id_user || !user) {
//         return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
//     }

//     dbConn.query("UPDATE form.User SET ? WHERE id_user = ?", [user, user.id_user],
//         function(error, results, fields) {
//             if (error) throw error;
//             return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
//         });
// });


// //  Delete user
// app.delete('/delete/id_user', function(req, res) {

//     let user_id = req.params.id_user;

//     if (!user_id) {
//         return res.status(400).send({ error: true, message: 'Please provide user_id' });
//     }
//     dbConn.query('DELETE FROM form.User WHERE id_user = ?', [id_user], function(error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
//     });
// });


// Add a new form  
app.post('/formulario', function(req, res) {
    let form = req.body;
    console.log("add form");

    if (!form) {
        return res.status(400).send({ error: true, message: 'Please provide user' });
    }

    dbConn.query("INSERT INTO form2.Form SET ? ", form, function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, results, message: 'New form has been created successfully.' });
    });
});









// set port
app.listen(3001, function() {
    console.log('Node app is running on port 3000');
});

module.exports = app;