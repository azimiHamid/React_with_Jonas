/* eslint-disable react/prop-types */
function Main({ children }) {
  return (
    <main className="relative flex flex-col items-center justify-center">
      {children}
    </main>
  );
}

export default Main;
