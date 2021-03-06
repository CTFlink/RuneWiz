/* 
i package.json har jeg lavet nogle scripts der betyder flg.:

for at køre nodemon skriv
npm run dev
for at køre serveren uden nodemon skriv
npm run start
*/

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const data = require('./database/data.js');
const logger = require('./middleware/logger');
const app = express();
const moment = require('moment');


//Her initialiserer jeg middlewaren
app.use(logger);


//denne route henter Runerne 
app.get('/api/runes', (req, res) => {
    res.json(data.runeValues);
});


//Dette bruges til at sætte en static folder så middleware løsninger fungerer
app.use(express.static(path.join(__dirname, 'public')));


//Dette bruges når vi ikke har brug for en static folder til at benytte middleware løsninger.
// app.get ('/', (req, res) => {
// res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(PORT, () => console.log(`Server started on Port ${PORT} `));