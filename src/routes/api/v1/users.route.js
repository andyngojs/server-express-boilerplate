import {Router} from 'express';
import {signInController, signUpController} from '~/controllers';

const userRouter = Router();

userRouter.get('/sign-in', signInController);
userRouter.post('/sign-up', signUpController);

export default userRouter;
