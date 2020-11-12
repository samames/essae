const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 5000;

const emailRouter = require('./router/emailRouter');

app.use(express.json());

app.use(emailRouter);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'frontend', 'build', 'index.html')
    );
  });
}

const expressServer = app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
