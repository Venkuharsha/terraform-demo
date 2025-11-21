const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from Application Service!');
});

app.listen(PORT, () => {
  console.log(`Application Service running on port ${PORT}`);
});
