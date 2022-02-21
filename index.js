const express = require('express')
const app = express()
const port = process.env.PORT || 3000

router.get('/', function(req, res){ 
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

router.get('/', function(req, res){ 
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
