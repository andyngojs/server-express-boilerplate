import {Router} from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.json({
    message: 'This is api user',
  });
});

export default userRouter;
