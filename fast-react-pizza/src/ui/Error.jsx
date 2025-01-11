import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong 😢
      </h1>
      <p className="text-gray-700 mb-6">{error.data || error.message}</p>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500 transition"
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
