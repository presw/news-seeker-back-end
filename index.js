const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', require('./api'));
app.listen(port, () => console.log(`News Seeker listening on port: ${port}`));

module.exports = app;
