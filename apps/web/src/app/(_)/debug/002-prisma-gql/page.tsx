/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import { gql } from '@/lib/graphql-client';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    const fetch = async () => {
      const dummies = await gql.getDummies();
      console.log(dummies);
    };

    fetch();
  });
  return <div>Page</div>;
};

export default Page;
