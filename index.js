const express = require('express');
const bodyParser = require('body-parser');
const fakerSchema = require('json-schema-faker');
const app = express();
const port = 3000;

fakerSchema.extend('faker', () => require('faker'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const { EventHubClient } = require('@azure/event-hubs');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.post('/submit', function(req, res) {
    var connectionString = req.body.connectionstring;
    var eventHubNamespace = req.body.namespace;
    var messages = req.body.messages;
    var method = req.body.method;

    console.log(messages);
    console.log(method);

    const client = EventHubClient.createFromConnectionString(connectionString, eventHubNamespace);

    for (let i = 0; i < messages; i++) {
        var dataJSON = JSON.parse(method);
        var data = fakerSchema.generate(dataJSON);
        const eventData = {body: data};
        console.log(`Sending message: ${eventData.body}`);
        //console.table(dataJSON)
        console.table(data)
        client.send(eventData);
    }
  
    client.close();

    console.log("A batch of three events have been sent to the event hub");
    console.log('Successfully pushed data to Azure services [' + connectionString + '/' + eventHubNamespace + ']');
    res.redirect('/');
});

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(port, function() {
    console.log('running nodejs on port '+ port);
});