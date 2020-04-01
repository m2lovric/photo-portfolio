let express = require('express');
let app = express();
let cors = require('cors');

app.use(cors());
app.use('/json', express.static(__dirname));

app.get('/',function(req,res){
  res.send('Hello');
});

app.listen(3030);