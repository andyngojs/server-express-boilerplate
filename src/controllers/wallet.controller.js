export const getAllWalletsController = (req, res) => {
  res.json({
    status: 200,
    message: 'Successfully',
    data: {
      message: 'Hello world!',
    },
  });
};

export const createNewWalletController = (req, res) => {
  res.json({
    status: 200,
    message: 'Successfully',
    data: [],
  });
};
