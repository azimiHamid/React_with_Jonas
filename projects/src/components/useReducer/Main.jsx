import PropTypes from "prop-types";

function Main({ children }) {
  return (
    <main className="relative bg-zinc-300 w-full min-h-screen flex bg-gradient-radial from-blue-300 to-transparent bg-opacity-30 backdrop-blur-lg text-center flex-col items-center font-poppins p-4">
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
