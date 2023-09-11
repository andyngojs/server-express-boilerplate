import userRouter from './user.route';
import walletRouter from './wallet.route';

function Router(app) {
  app.use('/apiUser', userRouter);
  app.use('/apiWallet', walletRouter);
}

export default Router;
