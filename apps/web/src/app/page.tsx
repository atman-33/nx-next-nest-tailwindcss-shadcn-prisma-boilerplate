'use client';

/* eslint-disable @nx/enforce-module-boundaries */
import { gql } from '@/lib/graphql-client';
import { Button } from '@libs/web/ui-shadcn';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    const fetch = async () => {
      const dummies = await gql.getDummies();
      console.log(dummies);
    };

    fetch();
  });

  return (
    <div className="flex flex-col space-y-2 m-4">
      <h1 className="text-3xl font-bold underline">Web</h1>

      <div className="flex space-x-2">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  );
};

export default Page;
