/* eslint-disable @nx/enforce-module-boundaries */

import { Link } from '@/components/elements/Link';

const debugPages = ['/debug/001-shadcn-button', '/debug/002-prisma-gql'];

const Page = () => {
  return (
    <div>
      {debugPages.map((page) => {
        return (
          <Link href={page} key={page}>
            <div key={page} className="my-4 rounded-md bg-primary/20 p-2">
              {page}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
