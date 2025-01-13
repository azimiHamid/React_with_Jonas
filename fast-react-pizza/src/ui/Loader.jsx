function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <article className="loader"></article>
    </div>
  );
}

export default Loader;

// Here in the TAILWIND classes;
// inset-0 means:
// top-0, left-0, right-0, bottom-0
