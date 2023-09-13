import {Router} from 'express';

const walletRouter = Router();

walletRouter.get('/', (req, res) => {
  res.json({
    message: 'api manage wallet',
  });
});

walletRouter.post('create', (req, res) => {
  res.json({
    message: 'Created new wallet successful',
  });
});

export default walletRouter;
