import { Button } from "./_components/ui/button";

const Home = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <h1 className="p-5 text-red-500">Hello World!</h1>
      <Button>Save Document</Button>
    </div>
  );
};

export default Home;
