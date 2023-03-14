const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());
app.use('/admin/users/', users);

app.listen(port, () => {
  console.log(`Applicando abrindo na porta: ${port}`)
});

module.exports = app;