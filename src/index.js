/* eslint-disable no-console */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
// config
import corsOptions from '~/config/cors.config';
import accessLogStream from '~/config/accessLog.config';
import {CONNECT_DB, GET_DB} from '~/config/db.config';
// routes
import Router from './routes';

const isProduction = process.env.NODE_ENV === 'production';

function START_SERVER() {
  const app = express();

  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
  // Using Cors to allow some specific origins (other domains) request to server.
  app.use(cors(corsOptions));
  // Using helmet to security for app
  app.use(helmet());
  // Using Morgan to log all requests
  app.use(
    isProduction
      ? morgan('combined', {stream: accessLogStream})
      : morgan('dev'),
  );

  // Router init
  Router(app);

  app.listen(process.env.APP_PORT, process.env.APP_HOSTNAME, () => {
    console.log(
      `Server is running at http://${process.env.APP_HOSTNAME}:${process.env.APP_PORT}`,
    );
  });
}

/**
 * Note: Only when it connects to the Database successfully does it start-sever.
 */
(async () => {
  try {
    await CONNECT_DB();
    console.log('Connected to MongoDB Cloud Atlas!');

    START_SERVER();
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
})();
