import {Router} from 'express';
import {
  createNewWalletController,
  getAllWalletsController,
} from '~/controllers/wallet.controller';

const walletRouter = Router();

walletRouter.get('/getAllWallets', getAllWalletsController);
walletRouter.post('/create', createNewWalletController);

export default walletRouter;
