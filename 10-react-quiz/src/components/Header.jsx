import ReactLogo from "../assets/react.svg";

function Header() {
  return (
    <header className="flex flex-col items-center gap-5 p-4 sm:flex-row sm:justify-center md:gap-10">
      <img
        className="w-24 sm:w-28 md:w-40 lg:w-44"
        src={ReactLogo}
        alt="react-logo"
      />
      <h1 className="text-gray-50 text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl xl:uppercase font-bold md:font-semibold lg:font-medium font-ralewayDots text-center md:text-left">
        The React Quiz
      </h1>
    </header>
  );
}

export default Header;
