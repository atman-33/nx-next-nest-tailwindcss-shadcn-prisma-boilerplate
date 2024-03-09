/* eslint-disable @nx/enforce-module-boundaries */
import { Link } from '@/components/elements/Link';
import { Button } from '@libs/web/ui-shadcn';

/* eslint-disable @nx/enforce-module-boundaries */

const Page = () => {
  return (
    <div className="flex flex-col space-y-4 m-8">
      <h1 className="text-3xl font-bold underline">
        Nx Nextjs x Nestjs Tailwindcss Shadcn-ui Prisma Boilerplate{' '}
      </h1>

      <Link href="/debug">
        <Button variant="default">Debug Room</Button>
      </Link>
    </div>
  );
};

export default Page;
