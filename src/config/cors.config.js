const whiteList = ['http://localhost:3000'];

const corsOptions = {
  origin: whiteList,
  optionsSuccessStatus: 200,
};

export default corsOptions;
