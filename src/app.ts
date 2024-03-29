import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './config/default';
import router from './routes/index';
import corsMiddleware from './middleware/cors';

const app = express();

app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

export default app;
