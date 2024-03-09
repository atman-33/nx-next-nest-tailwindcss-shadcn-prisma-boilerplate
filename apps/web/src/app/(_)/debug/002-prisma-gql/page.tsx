'use client';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { dummySelectors } from '@/features/dummy';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@libs/web/ui-shadcn';

const Page = () => {
  const dummies = dummySelectors.useGetDummies();
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummies.map((dummy) => (
          <TableRow key={dummy?.id}>
            <TableCell className="font-medium">{dummy?.id}</TableCell>
            <TableCell>{dummy?.text}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default Page;
