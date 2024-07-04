import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoute from '../server/Routes/user.js';  // Ensure the path and extension are correct
import path from 'path'
import { fileURLToPath } from 'url';


const app = express();

app.use(bodyParser.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, './client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'));
});

app.use('/api/user', userRoute);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
