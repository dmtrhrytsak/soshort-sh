import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimiter from 'express-rate-limit';
import xss from 'xss-clean';
import morgan from 'morgan';
import path from 'path';

import connectDB from './db.js';
import errorMiddleware from './middlewares/error.middleware.js';
import handleRedirect from './utils/handleRedirect.js';
import urlRouter from './resources/url/url.route.js';

const app = express();

app.set('trust proxy', 1);

const __dirname = path.resolve();

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(xss());
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/url', urlRouter);
app.get('/:slug', handleRedirect);

app.use(errorMiddleware);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const run = async () => {
  try {
    await connectDB(MONGO_URI);

    app.listen(PORT, () => {
      console.log(`Application is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

run();
