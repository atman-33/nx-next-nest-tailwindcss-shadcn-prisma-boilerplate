'use client';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { dummySelectors, useDummyDispatcher } from '@/features/dummy';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@libs/web/ui-shadcn';
import CreateDummyForm from './_components/CreateDummyForm';
import DeleteDummyForm from './_components/DeleteDummyForm';
import UpdateDummyForm from './_components/UpdateDummyForm';

const Page = () => {
  const dummies = dummySelectors.useGetDummies();
  const dummyDispatcher = useDummyDispatcher();

  const handleReloadButtonClick = () => {
    dummyDispatcher.reloadDummies();
  };

  return (
    <div className="flex space-x-12 items-start">
      <div className="border-r-2 pr-4">
        <Button variant={'secondary'} onClick={handleReloadButtonClick}>
          リロード
        </Button>
        <Table className="w-[500px]">
          <TableCaption>A list of dummy table.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>TEXT</TableHead>
              <TableHead className="text-right">INT</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummies.map((dummy) => (
              <TableRow key={dummy?.id}>
                <TableCell className="font-medium w-[220px]">{dummy?.id}</TableCell>
                <TableCell className="w-[200px]">{dummy?.text}</TableCell>
                <TableCell className="text-right">{dummy?.int}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className="text-right">$---</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <div className="flex flex-col space-y-4 items-start">
        <CreateDummyForm />
        <hr className="w-full" />
        <UpdateDummyForm />
        <hr className="w-full" />
        <DeleteDummyForm />
      </div>
    </div>
  );
};

export default Page;
