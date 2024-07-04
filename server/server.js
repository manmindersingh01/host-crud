const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('../server/Routes/user')
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/user', userRoute)


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
