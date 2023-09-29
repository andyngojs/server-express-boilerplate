import 'dotenv/config';

export const {APP_PORT, APP_HOSTNAME} = process.env;
export const isProduction = process.env.NODE_ENV === 'production';
