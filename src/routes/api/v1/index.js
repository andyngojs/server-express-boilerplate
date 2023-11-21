import express from 'express';
import userRouter from './users.route';

const Router = express.Router();

Router.use('/users', userRouter);

export const APIs_V1 = Router;
