import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { dayName, date, year, monthName} from './day.js';
import ejs from 'ejs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const port = 3500;

var letnum
var names
var num

function count(x,y){
    names = x + y;
    // console.log(names)
    num = names.length 
    // console.log(num)
    return num
}

app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.post('/submit', (req, res) => {
    letnum = count(req.body['fname'], req.body['lname'])
    res.render('index.ejs',

        // console.log("why" +res.locals.counted),
        {messages: `they're a total of ${letnum} letters in your name`},
        // { day: dayName, date: date, month:monthName, year:year },
        console.log("why" +letnum),
        // res.redirect('/submit')
    );

})



app.listen(port, () => {
  console.log('Server is running on http://localhost:3500');
});