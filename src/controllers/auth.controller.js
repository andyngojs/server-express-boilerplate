import {StatusCodes} from 'http-status-codes';

export const signInController = (req, res) => {
  res.status(StatusCodes.OK).json({
    status: StatusCodes.OK,
    message: 'Successfully',
  });
};
