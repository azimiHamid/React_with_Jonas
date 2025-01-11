import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6 text-center">
      <h1 className="text-xl font-semibold leading-snug text-stone-700 sm:text-5xl lg:text-6xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
