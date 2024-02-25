import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const env = {
  PORT: Number(process.env['PORT']) as number | undefined,
  DB_URL: process.env['DB_URL'] as string | undefined,
  API_PORT: Number(process.env['API_PORT']) as number | undefined,
  PRODUCTION_ORIGIN: process.env['PRODUCTION_ORIGIN'] as string | undefined
};
