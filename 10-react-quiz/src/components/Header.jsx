import ReactLogo from "../assets/react.svg";

function Header() {
  return (
    <header className="flex flex-col items-center gap-5 p-4 sm:flex-row sm:justify-center md:gap-10">
      <img
        className="w-24 sm:w-28 md:w-40 lg:w-48"
        src={ReactLogo}
        alt="react-logo"
      />
      <h1 className="text-gray-300 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold md:font-normal font-ralewayDots text-center md:text-left">
        The React Quiz
      </h1>
    </header>
  );
}

export default Header;
