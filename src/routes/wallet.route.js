import {Router} from 'express';

const walletRouter = Router();

walletRouter.get('/', (req, res) => {
  res.json({
    message: 'api manage wallet',
  });
});

export default walletRouter;
