import {Router} from 'express';
import {signInController} from '~/controllers';

const userRouter = Router();

userRouter.get('/sign-in', signInController);

export default userRouter;
