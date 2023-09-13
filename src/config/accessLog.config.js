import path from 'path';
import {createStream} from 'rotating-file-stream';
import {generator} from '~/utils/generateLogName';

const accessLogStream = createStream(generator(new Date(), 1), {
  interval: '1d',
  path: path.join(__dirname.slice(0, 37), 'log'),
});

export default accessLogStream;
