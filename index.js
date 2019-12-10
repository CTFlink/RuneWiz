/* 
i package.json har jeg lavet nogle scripts der betyder flg.:

for at køre nodemon skriv
npm run dev
for at køre serveren uden nodemon skriv
npm run start
*/


const express = require('express');
const path = require('path');
//const data = require('./data.js');
const app = express();

//dette er midlertidig hardcoded data der skal erstattes med det jeg vil vise.
const members = [
    {
        id: 1,
        name: 'John',
        email: 'John@mail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Sven',
        email: 'Sven@mail.com',
        status: 'inactive'
    }
];

app.get('/api/members', (req, res) => {
    res.json(members);
});


//Dette bruges til at sætte en static folder til middleware løsninger
app.use(express.static(path.join(__dirname, 'public')));


//Dette bruges når vi ikke har brug for en static folder til at benytte middleware løsninger.
// app.get ('/', (req, res) => {
// res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT} `));