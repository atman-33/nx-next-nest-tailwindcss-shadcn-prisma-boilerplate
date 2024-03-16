/* eslint-disable @nx/enforce-module-boundaries */
import { Link } from '@/components/elements/Link';
import { Button } from '@libs/web/ui-shadcn';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div>
        <Link href="/">
          <Button variant={'link'}>ホームへ戻る</Button>{' '}
        </Link>
        <Link href="/debug">
          <Button variant={'link'}>Debug Room トップへ戻る</Button>{' '}
        </Link>
      </div>
      <div className="m-4">{children}</div>
    </div>
  );
};

export default Layout;
