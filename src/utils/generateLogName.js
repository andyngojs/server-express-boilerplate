const pad = (num) => (num > 9 ? '' : '0') + num;
export const generator = (time, index) => {
  if (!time) return 'access.log';

  const month = `${time.getFullYear()}  ${pad(time.getMonth() + 1)}`;
  const day = pad(time.getDate());
  const hour = pad(time.getHours());
  const minute = pad(time.getMinutes());

  return `${month}/${month}${day}-${hour}${minute}-${index}-access.log`;
};
