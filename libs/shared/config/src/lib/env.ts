import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const apiEnv = {
  API_PORT: Number(process.env['API_PORT']) as number | undefined,
  PRODUCTION_ORIGIN: process.env['PRODUCTION_ORIGIN'] as string | undefined,
  DB_URL: process.env['DB_URL'] as string | undefined
};

export const webEnv = {
  NEXT_PUBLIC_API_ENDPOINT: process.env['NEXT_PUBLIC_API_ENDPOINT'] as string | undefined,
  NEXT_PUBLIC_API_GQL_URL: process.env['NEXT_PUBLIC_API_GQL_URL'] as string | undefined
};
