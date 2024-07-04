import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoute from '../server/Routes/user.js';  // Ensure the path and extension are correct

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api/user', userRoute);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
