import express, {Express} from 'express';
import appRouter from './routes/app.routes.js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { connectDB } from './configs/database.js';

// config biến môi trường
dotenv.config();
const app: Express = express();

// config body json 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config file tĩnh trong typescript
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);
app.use(express.static(join(__dirname, 'public')));

// prefix api
app.use('/api/v1', appRouter);

connectDB();

// config server port
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
