import { Button } from '@libs/web/ui-shadcn';

const Page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Web</h1>

      <Button variant="default">Default</Button>
      <Button variant="secondary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};

export default Page;
