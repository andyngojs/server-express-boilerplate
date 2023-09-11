import path from 'path';
import {createStream} from 'rotating-file-stream';

const pad = (num) => (num > 9 ? '' : '0') + num;
const generator = (time, index) => {
  if (!time) return 'access.log';

  const month = `${time.getFullYear()}  ${pad(time.getMonth() + 1)}`;
  const day = pad(time.getDate());
  const hour = pad(time.getHours());
  const minute = pad(time.getMinutes());

  return `${month}/${month}${day}-${hour}${minute}-${index}-access.log`;
};

const accessLogStream = createStream(generator(new Date(), 1), {
  interval: '1d',
  path: path.join(__dirname.slice(0, 37), 'log'),
});

export default accessLogStream;
