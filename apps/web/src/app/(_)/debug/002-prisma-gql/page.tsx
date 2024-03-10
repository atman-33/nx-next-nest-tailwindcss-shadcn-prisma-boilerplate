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
      <TableCaption>A list of dummy table.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>TEXT</TableHead>
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
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$xxx,xxx,xxx</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default Page;
