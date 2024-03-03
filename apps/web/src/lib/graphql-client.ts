import { webEnv } from '@libs/shared/config';
import { getGraphqlClient } from '@libs/web/data-access-graphql';

if (!webEnv.NEXT_PUBLIC_API_GQL_URL) {
  throw new Error('NEXT_PUBLIC_API_GQL_URL is not defined');
}

export const gql = getGraphqlClient(webEnv.NEXT_PUBLIC_API_GQL_URL);
