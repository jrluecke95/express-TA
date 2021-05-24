const express = require('express');

const app = express();
let port = 3000;

// public folder
app.use(express.static('public')) //static assets 
app.set('view engine', 'ejs');

app.use(require('./routes/index'));
app.use(require('./routes/aboutUs'));
app.use(require('./routes/details'));
app.use(require('./routes/faq'));

app.listen(port, ()=>{
  console.log(`server is running on port ${port}`)
})