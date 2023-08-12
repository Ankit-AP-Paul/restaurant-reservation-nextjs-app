export default function Custom404() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black-600">404</h1>
        <p className="text-xl text-gray-600">Oops! Looks like you're lost.</p>
        <p className="text-lg text-gray-600">
          The page you're looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-4 inline-block px-4 py-2 text-lg font-medium text-white bg-gray-600 rounded hover:bg-black transition duration-300">
          Go back to Home
        </a>
      </div>
    </div>
  );
}
