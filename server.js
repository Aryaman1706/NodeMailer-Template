const express = require('express');

const app = express();

// MiddleWare
app.use(express.json());

// Functions
const sendMail = require('./sendMail');

app.post('/api/sendMail', async (req, res)=>{
    const user = req.body.user;
    const subject = req.body.subject;
    const text = req.body.text;
    sendMail(user, subject, text);
    res.send(`Mail send to ${user}`);
});

// Port
const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Listening on port ${port}`)); 