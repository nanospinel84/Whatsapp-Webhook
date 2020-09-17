import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

let app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", function (request, response) {
  response.send('Simple WhatsApp Webhook tester</br>There is no front-end, see server.js for implementation!');
});

app.post("/webhook", function (request, response) {
  console.log('Incoming webhook: ' + JSON.stringify(request.body));
  response.sendStatus(200);
});

var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

