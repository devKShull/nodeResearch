const express = require('express');
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
  res.send('complete');
})
app.listen(PORT, () => {
  console.log(`exceeded http://localhost:${PORT}`);
})