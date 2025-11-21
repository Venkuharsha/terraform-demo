const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/patients', (req, res) => {
  res.json([{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }]);
});

app.listen(PORT, () => {
  console.log(`Patient Service running on port ${PORT}`);
});
