const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-blue-dark">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-light-yellow border-r-transparent"></div>
        <p className="mt-4 text-light-gray">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;